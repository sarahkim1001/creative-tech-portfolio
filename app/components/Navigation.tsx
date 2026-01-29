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
    <nav style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    }}>
      <Link 
        href="/" 
        style={{ 
          fontFamily: 'var(--font-sans)', 
          fontWeight: 400, 
          color: 'var(--text-primary)',
          fontSize: '1.25rem',
          textDecoration: 'none'
        }}
      >
        Sarah S. Kim
      </Link>
      <div style={{ 
        display: 'flex',
        gap: '2rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem'
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
