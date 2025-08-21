// src/components/VantaBackground.js
'use client';
import React from 'react';

// This component creates the animated gradient background effect.
const VantaBackground = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="animated-gradient-bg"></div>
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;
