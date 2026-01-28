'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* The Manifesto Staircase - Centered Intro */}
      <div 
        className="flex justify-center"
        style={{ 
          paddingTop: 'calc(var(--header-top-spacing) + 1rem)',
          paddingBottom: '24rem'
        }}
      >
        <div className="w-full text-left">
          <div 
            style={{ 
              fontFamily: "'Garamond', 'Apple Garamond', 'EB Garamond', 'Times New Roman', serif",
              fontSize: 'clamp(2.8125rem, 5.625vw, 6.5625rem)',
              lineHeight: '1.1',
              fontStyle: 'italic',
              fontWeight: 100,
              color: '#a5b39d'
            }}
          >
       All Together Here and Now
          </div>
        </div>
      </div>

      {/* Visual Artifact Section */}
      <section className="flex justify-center" style={{ marginTop: '15vh', marginBottom: '15vh' }}>
        <div className="w-full" style={{ maxWidth: '90vw' }}>
          <img 
            src="/media/img/she.png" 
            alt="Visual Artifact"
            className="w-full h-auto"
            style={{ 
              objectFit: 'contain',
              maxHeight: '80vh'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; padding: 4rem;">[Image: /media/img/she.png]</span>';
              }
            }}
          />
        </div>
      </section>
    </div>
  );
}
