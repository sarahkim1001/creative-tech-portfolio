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
    <nav className="hidden md:flex w-full px-[calc(15%+4rem)] py-6 items-center justify-between">
      <Link 
        href="/" 
        style={{ fontFamily: 'var(--font-sans)', fontWeight: 'bold', color: 'var(--text-header)' }}
        className="text-lg transition-colors duration-200 hover:opacity-80"
      >
        Sarah S. Kim
      </Link>
      <div 
        className="flex gap-8 lowercase"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 ease-in-out ${
                isActive ? 'nav-link-active' : ''
              }`}
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: isActive ? 'var(--text-header)' : 'var(--text-primary)'
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
