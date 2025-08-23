// src/components/shared/VantaBackground.js
'use client';

import React, { useEffect, useRef, useState } from 'react';

const FOG_CONFIG = {
  // Blue palette
  highlightColor: 0x4d94ff,
  midtoneColor: 0x0052cc,
  lowlightColor: 0x002966,
  baseColor: 0x0,
  blurFactor: 0.6,
  speed: 0.8,
  zoom: 0.8,
};

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect = vantaEffect;
    let tries = 0;
    const maxTries = 40; // ~4s at 100ms
    const tryInit = () => {
      if (effect || !vantaRef.current) return;
      const hasVanta = typeof window !== 'undefined' && window.VANTA && typeof window.VANTA.FOG === 'function';
      const hasThree = typeof window !== 'undefined' && window.THREE;
      if (hasVanta && hasThree) {
        effect = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          ...FOG_CONFIG,
        });
        setVantaEffect(effect);
        clearInterval(timer);
      } else if (++tries >= maxTries) {
        clearInterval(timer);
        // optionally log for diagnostics
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('[VantaBackground] VANTA/THREE not available after retries.');
        }
      }
    };

    const timer = setInterval(tryInit, 100);
    tryInit();

    return () => {
      clearInterval(timer);
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-[-2]" />
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black/60" />
    </>
  );
};

export default VantaBackground;
