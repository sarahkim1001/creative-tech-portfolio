import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-[calc(15%+4rem)] pt-[48rem] pb-48 border-t border-black" style={{ borderTopWidth: '1px', borderTopColor: 'rgba(0, 0, 0, 0.05)' }}>
      {/* Grid Section */}
      <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
        {/* Column 1: Pages */}
        <div className="footer-column">
          <h3 className="mb-8 uppercase tracking-widest small no-outline footer-heading">
            pages
          </h3>
          <div 
            className="flex flex-col gap-6 lowercase leading-loose body-small items-center md:items-start"
            style={{ 
              fontFamily: 'var(--font-sans)'
            }}
          >
            <Link href="/studio" className="footer-link transition-colors duration-200 hover:text-[var(--text-header)]">studio</Link>
            <Link href="/glossary" className="footer-link transition-colors duration-200 hover:text-[var(--text-header)]">glossary</Link>
            <Link href="/about" className="footer-link transition-colors duration-200 hover:text-[var(--text-header)]">about</Link>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-column">
          <h3 className="mb-8 uppercase tracking-widest small no-outline footer-heading">
            contact
          </h3>
          <div 
            className="flex flex-col gap-6 lowercase leading-loose body-small items-center md:items-start"
            style={{ 
              fontFamily: 'var(--font-sans)'
            }}
          >
            <a href="mailto:sarahkim1001@gmail.com" className="footer-link transition-colors duration-200 hover:text-[var(--text-header)]">sarahkim1001@gmail.com</a>
            <a href="https://www.linkedin.com/in/sarah-s-kim-03047020a/" target="_blank" rel="noopener noreferrer" className="footer-link transition-colors duration-200 hover:text-[var(--text-header)]">linkedin</a>
          </div>
        </div>

        {/* Column 3: Location */}
        <div className="footer-column">
          <h3 className="mb-8 uppercase tracking-widest small no-outline footer-heading">
            location
          </h3>
          <p className="lowercase leading-loose body-small footer-text" style={{ fontFamily: 'var(--font-sans)' }}>
            palo alto, ca
          </p>
        </div>

        {/* Column 4: Documents */}
        <div className="footer-column">
          <h3 className="mb-8 uppercase tracking-widest small no-outline footer-heading">
            documents
          </h3>
          <p className="lowercase leading-loose body-small footer-text" style={{ fontFamily: 'var(--font-sans)' }}>
            resume/cv
          </p>
        </div>
      </div>
    </footer>
  );
}
