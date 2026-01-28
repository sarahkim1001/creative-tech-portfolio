'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Lock body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup: ensure scroll is restored when component unmounts or menu closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/studio', label: 'studio' },
    { href: '/glossary', label: 'glossary' },
    { href: '/about', label: 'about' },
  ];

  return (
    <>
      {/* Menu Button - Top Right (Mobile Only) */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="md:hidden fixed top-6 right-[calc(15%+4rem)] z-50"
          style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.25rem'
          }}
          aria-label="Toggle menu"
        >
          menu
        </button>
      )}

      {/* Full Page Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start px-[calc(15%+4rem)] pt-6">
              <Link 
                href="/"
                onClick={closeMenu}
                className="font-bold transition-colors duration-200 hover:opacity-80"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  color: 'var(--text-header)'
                }}
              >
                Sarah S. Kim
              </Link>
              <button
                onClick={closeMenu}
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem'
                }}
                aria-label="Close menu"
              >
                close
              </button>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`lowercase transition-all duration-300 ease-in-out ${
                      isActive ? 'nav-link-active' : ''
                    }`}
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.875rem',
                      color: isActive ? 'var(--text-header)' : 'var(--text-primary)'
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
