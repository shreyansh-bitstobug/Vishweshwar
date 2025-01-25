"use client"
import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import Image from 'next/image';

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'd like to get in touch.", 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out"
      role="complementary"
      aria-label="WhatsApp Contact"
    >
      <button
        onClick={toggleModal}
        className={`
          bg-[#25D366] text-white p-3 rounded-full shadow-xl 
          hover:bg-[#128C7E] focus:outline-none focus:ring-2 
          focus:ring-green-300 transition-all duration-200
          ${isModalOpen ? 'rotate-45' : 'rotate-0'}
        `}
        aria-expanded={isModalOpen}
        aria-controls="whatsapp-modal"
      >
        {isModalOpen ? <X className="w-6 h-6" /> : <Image src={"/wp.svg"} width={30} height={30} alt='wp Logo'/> }
      </button>

      {isModalOpen && (
        <div 
          id="whatsapp-modal"
          className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 animate-slide-up"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Chat with Us</h2>
            <button 
              onClick={toggleModal} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close WhatsApp contact modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Click below to start a WhatsApp conversation
          </p>
          
          <button
            onClick={openWhatsApp}
            className="
              w-full flex items-center justify-center gap-2
              bg-[#25D366] text-white py-2 rounded-md
              hover:bg-[#128C7E] transition-colors
              focus:outline-none focus:ring-2 focus:ring-green-300
            "
          >
            <Send className="w-5 h-5" />
            Open WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;