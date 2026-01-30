export default function Footer() {
  return (
    <footer style={{ 
      padding: 'clamp(2.4rem, 4.8rem, 4.8rem) clamp(1.6rem, 2.4rem, 2.4rem)',
      marginTop: 'clamp(4.8rem, 9.6rem, 9.6rem)',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      maxWidth: '1680px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      zIndex: 1000
    }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '3.6rem'
      }}>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.26rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1.2rem',
            marginTop: 0
          }}>
            Connect
          </h3>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            alignItems: 'flex-start'
          }}>
            <a href="mailto:sarahkim1001@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#666666" strokeWidth="2" fill="none"/>
                <path d="M3 7l9 6 9-6" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sarah-s-kim-03047020a/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#666666" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12" fill="#666666"/>
                <circle cx="4" cy="4" r="2" fill="#666666"/>
              </svg>
            </a>
            <a href="https://instagram.com/s4rahkim" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#666666" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" fill="#666666"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#666666"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.26rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1.2rem',
            marginTop: 0
          }}>
            Location
          </h3>
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.26rem',
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Palo Alto, CA
          </p>
        </div>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.26rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1.2rem',
            marginTop: 0
          }}>
            Documents
          </h3>
          <a 
            href="/media/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1.26rem',
              color: 'var(--text-primary)',
              textDecoration: 'none'
            }}
          >
            Resume/CV
          </a>
        </div>
      </div>
    </footer>
  );
}
