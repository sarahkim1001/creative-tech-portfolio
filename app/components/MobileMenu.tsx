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
      {/* Mobile Header - Always Visible */}
      {!isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 flex justify-between items-center" style={{
          padding: '1.6rem',
          zIndex: 1000,
          background: 'var(--bg)'
        }}>
          <Link 
            href="/"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1.8rem',
              fontWeight: 400,
              color: 'var(--text-header)',
              textDecoration: 'none'
            }}
          >
            Sarah S. Kim
          </Link>
          <button
            onClick={toggleMenu}
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1.8rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
            aria-label="Toggle menu"
          >
            menu
          </button>
        </div>
      )}

      {/* Full Page Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 md:hidden" style={{ zIndex: 1001, background: 'var(--bg)' }}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start" style={{ 
              padding: '1.6rem'
            }}>
              <Link 
                href="/"
                onClick={closeMenu}
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  color: 'var(--text-header)',
                  textDecoration: 'none'
                }}
              >
                Sarah S. Kim
              </Link>
              <button
                onClick={closeMenu}
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.8rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
                aria-label="Close menu"
              >
                close
              </button>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center" style={{ gap: '4.8rem' }}>
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
                      fontSize: '2.7rem',
                      color: isActive ? 'var(--text-header)' : 'var(--text-primary)',
                      textDecoration: 'none'
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
