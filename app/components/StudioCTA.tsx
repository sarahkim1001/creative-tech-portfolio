'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StudioCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="relative py-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Atmospheric blur background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.1), transparent 70%)`,
          filter: 'blur(60px)',
          transition: 'opacity 0.8s ease-out',
        }}
      />
      
      {/* CTA Link */}
      <div className="relative flex justify-center">
        <Link
          href="/studio"
          className="group relative inline-block"
        >
          <div 
            className="transition-all duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              filter: isHovered ? 'blur(0.5px)' : 'blur(0px)',
            }}
          >
            <span
              className="block lowercase tracking-wider"
              style={{
                fontFamily: 'PP Neue Montreal',
                fontSize: 'clamp(2.5rem, 6.25vw, 5rem)',
                fontWeight: 400,
                color: 'var(--text-bold)',
                letterSpacing: '0.1em',
                transition: 'opacity 0.6s ease-out',
                opacity: isHovered ? 0.9 : 1,
              }}
            >
              reweave with us
            </span>
          </div>
          
          {/* Subtle underline on hover */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-700"
            style={{
              width: isHovered ? '100%' : '0%',
              opacity: isHovered ? 0.3 : 0,
            }}
          />
        </Link>
      </div>
    </div>
  );
}
