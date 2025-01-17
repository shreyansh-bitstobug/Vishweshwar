// ShareButton.js
'use client';

import React from 'react';
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShareButton = () => {
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex gap-1 w-full sm:w-auto justify-center"
      onClick={handleShare}
    >
      <Share2 size={16} className="flex-shrink-0" />
      Share
    </Button>
  );
};

export default ShareButton;