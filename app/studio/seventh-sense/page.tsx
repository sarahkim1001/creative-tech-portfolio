'use client';

import { useEffect } from 'react';

export default function Cyborgania() {
  useEffect(() => {
    const gradient = 'linear-gradient(180deg, #e8f2ff 0%, #a99db3 100%)';
    document.documentElement.style.background = gradient;
    document.body.style.background = gradient;
    return () => {
      document.documentElement.style.background = '';
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="min-h-screen">

      {/* Header Section */}
      <section 
        style={{ 
          paddingTop: 'var(--header-top-spacing)',
          paddingBottom: '14.4rem'
        }}
      >
        <div>
            <h1 style={{ marginBottom: '4.8rem' }}>
              Cyborgania
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7,
                marginBottom: '4.8rem'
              }}
            >
              2026
            </p>
            <a 
              href="https://cyborgania.org"
              target="_blank"
              rel="noopener noreferrer"
              className="body-small underline"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              cyborgania.org
            </a>
        </div>
      </section>
      
      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
        <a 
          href="https://cyborgania.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative cursor-pointer"
          style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}
        >
          <iframe
            src="https://cyborgania.org"
            className="w-full h-full pointer-events-none transition-opacity duration-300"
            style={{ border: 'none', width: '100%', height: '100%' }}
            title="Cyborgania Website"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
        </a>
      </section>


      {/* Description & Content Section */}
      <section style={{ paddingBottom: '24rem' }}>
        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '38.4rem' }}>
            {/* About Cyborgania */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                About Cyborgania
              </h2>
              <p className="body-large">
                Cyborgania is an artist-led design research laboratory exploring the ontological collapse between biological systems and digital architecture. We interrogate the screen not as a barrier, but as a porous, permeable membrane where the enmeshment of the machine and the organism occurs.
              </p>
            </div>

            {/* Technical Framework */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Technical Framework
              </h2>
              <p className="body-large">
                Technically, the project functions as a "cyborganic" feedback loop. By ingesting real-world geospatial data—including solar positioning, anemometric shifts, and seismic tremors—the digital environment is algorithmically reconfigured in real-time. This creates a responsive "eco-scape" where code acts as a living tissue, fluctuating in direct somatic response to the earth's physical rhythms.
              </p>
            </div>

            {/* Critical Perspective */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Critical Perspective
              </h2>
              <p className="body-large">
                From a critical perspective, Cyborgania seeks to dismantle the techno-industrial binary that positions the digital as an extraction from the natural. We advocate for a post-humanist design language that prioritizes "softness" and "oneness," utilizing storytelling and communal gatherings to foster a future where technology serves as a celebratory extension of the planet's inherent pulse.
              </p>
            </div>

            {/* Design & Development: 6 Key Pillars */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Design & Development: 6 Key Pillars
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7.2rem' }}>
                <p className="body-large">
                  Generative (The Architecture)
                </p>
                <p className="body-large">
                  Geospatial (The Mapping)
                </p>
                <p className="body-large">
                  Atmospheric (The UX)
                </p>
                <p className="body-large">
                  Brutalist (The Structure)
                </p>
                <p className="body-large">
                  Algorithmic (The Motion)
                </p>
                <p className="body-large">
                  Tactile (The Texture)
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="pb-40" style={{ display: 'none' }}>
        <div>
            <div className="space-y-16">
              {/* Gallery Item 1 */}
              <div>
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
                  <img 
                    src="/media/img/seventh-sense-1.jpg" 
                    alt="Cyborgania Installation"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Project Image 1]</span>';
                      }
                    }}
                  />
                </div>
                <p 
                  className="body-small italic"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    opacity: 0.7
                  }}
                >
                  [Caption: Installation view]
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
