"use client"
import useScrollProgress from "@/app/hooks/useScrollProgress";
import React from "react";

const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-neonBlue to-blue-500"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
