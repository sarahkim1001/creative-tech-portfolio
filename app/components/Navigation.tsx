'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/studio', label: 'studio' },
    { href: '/glossary', label: 'glossary' },
    { href: '/about', label: 'about' },
  ];

  return (
    <nav className="hidden md:flex" style={{ 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2.4rem',
      maxWidth: '1680px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 1000
    }}>
      <Link 
        href="/" 
        style={{ 
          fontFamily: 'var(--font-sans)', 
          fontWeight: 400, 
          color: 'var(--text-primary)',
          fontSize: '1.8rem',
          textDecoration: 'none'
        }}
      >
        Sarah S. Kim
      </Link>
      <div style={{ 
        display: 'flex',
        gap: '2.4rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.44rem'
      }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-primary)',
              textDecoration: 'none'
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
