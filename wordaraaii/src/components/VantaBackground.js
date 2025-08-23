// src/components/VantaBackground.js
'use client';
import React, { useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (typeof window !== 'undefined' && vantaRef.current) {
      vantaEffect = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0000ff, // Blue
        shininess: 30.0,
        waveHeight: 20.0,
        waveSpeed: 0.75,
        zoom: 0.75,
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-screen h-screen">
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;
