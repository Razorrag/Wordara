// src/components/VantaBackground.js
'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xADD8E6, // Light Blue
          midtoneColor: 0x4682B4,   // Steel Blue
          lowlightColor: 0x00008B,  // Dark Blue
          baseColor: 0x000033,      // Dark Navy Blue
          blurFactor: 0.65,
          speed: 1.2,
          zoom: 0.8,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="vanta-background">
      {children}
    </div>
  );
};

export default VantaBackground;
