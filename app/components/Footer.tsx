export default function Footer() {
  return (
    <footer style={{ 
      padding: '4rem 2rem',
      marginTop: '8rem',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem'
      }}>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            marginTop: 0
          }}>
            Connect
          </h3>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem'
          }}>
            <a href="mailto:sarahkim1001@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              sarahkim1001@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sarah-s-kim-03047020a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              LinkedIn
            </a>
            <a href="https://instagram.com/s4rahkim" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            marginTop: 0
          }}>
            Location
          </h3>
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Palo Alto, CA
          </p>
        </div>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
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
              fontSize: '0.875rem',
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
