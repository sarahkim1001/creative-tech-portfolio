'use client';

import { useEffect } from 'react';

export default function Ouroboros() {
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
              Ouroboros
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7,
                marginBottom: '4.8rem'
              }}
            >
              Senior Thesis | 2025
            </p>
        </div>
      </section>

      {/* Description & Content Section */}
      <section style={{ paddingBottom: '24rem' }}>
        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '38.4rem' }}>
            {/* Main Description */}
            <div>
              <p className="body-large">
                Ouroboros is a study of how physical spaces affect our state of mind. Using a crawl-through tunnel as a physical threshold, the installation explores the human need to find a private moment of reflection within a busy, overstimulating environment. It acts as a deliberate pause—a physical descent into a quiet, enclosed space that filters out the distractions of the surrounding exhibition. Inside the tunnel, participants are prompted to feel exactly how much their built surroundings dictate their mood, their movement, and their capacity for focus.
              </p>
            </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section style={{ paddingTop: 'var(--header-top-spacing)', paddingBottom: '24rem' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '19.2rem' }}>
              {/* Gallery Item 1 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem' }}>
                  <img 
                    src="/media/gif/jerry.gif" 
                    alt="Ouroboros Installation"
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
                  Inside the tunnel
                </p>
              </div>

              {/* Gallery Item 2 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem' }}>
                  <img 
                    src="/media/gif/projection.gif" 
                    alt="Ouroboros Interior"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Project Image 2]</span>';
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
                  Projection Design
                </p>
              </div>

              {/* Gallery Item 3 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem' }}>
                  <img 
                    src="/media/gif/within.gif" 
                    alt="Ouroboros Technical"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Project Image 3]</span>';
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
                  The Living Installation
                </p>
              </div>
        </div>
      </section>

      {/* Description & Content Section - Continued */}
      <section style={{ paddingBottom: '24rem' }}>
        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '38.4rem' }}>
            {/* Conceptual Framework */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 400 }}>
               
              </h2>
              <p className="body-large">
                The project draws from the existential containment described in Franz Kafka's The Burrow, focusing on the instinct to navigate and find stability within "in-between" spaces. Rather than a traditional gallery experience, Ouroboros functions as a somatic audit, using a change in physical posture—crawling—to break the "autopilot" of daily movement. It is an exploration of how the architectures we inhabit, from the domestic to the industrial, shape our internal consciousness and our ability to connect with ourselves.
              </p>
            </div>

            {/* Sonic & Technical Audit */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 400 }}>
                
              </h2>
              <p className="body-large">
                Using Pauline Oliveros' Deep Listening approach, the system captures everyday ambient urban sounds and uses phase shifting and indeterminacy to transform them into abstract textures.
              </p>
            </div>

           
        </div>
      </section>
    </div>
  );
}
