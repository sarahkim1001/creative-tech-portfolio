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
      <section className="pb-40">
        <div>
            <div className="space-y-16">
              {/* Gallery Item 1 */}
              <div>
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
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
        </div>
      </section>

      {/* Description & Content Section - Continued */}
      <section className="pb-20">
        <div className="w-full space-y-32">
            {/* Conceptual Framework */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Conceptual Framework
              </h2>
              <p className="body-large">
                The project draws from the existential containment described in Franz Kafka's The Burrow, focusing on the instinct to navigate and find stability within "in-between" spaces. Rather than a traditional gallery experience, Ouroboros functions as a somatic audit, using a change in physical posture—crawling—to break the "autopilot" of daily movement. It is an exploration of how the architectures we inhabit, from the domestic to the industrial, shape our internal consciousness and our ability to connect with ourselves.
              </p>
            </div>

            {/* Sonic & Technical Audit */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Sonic & Technical Audit
              </h2>
              <p className="body-large">
                Using Pauline Oliveros' Deep Listening approach, the system captures everyday ambient urban sounds and uses phase shifting and indeterminacy to transform them into abstract textures.
              </p>
            </div>

            {/* Project Details */}
            <div>
              <h2 className="font-bold" style={{ marginBottom: '12rem' }}>
                Project Details
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7.2rem' }} className="body-large">
                <p>
                  <span className="font-bold">Role:</span> Lead Creator & Technologist
                </p>
                <p>
                  <span className="font-bold">Medium:</span> Interactive Somatic Installation
                </p>
                <p>
                  <span className="font-bold">Technical Stack:</span> Max/MSP/Jitter, Spatial Audio, Visual Projection Design, Projection Mapping, Custom Fabrication
                </p>
                <p>
                  <span className="font-bold">Context:</span> NYU Integrated Design & Media (2025)
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full pb-40 relative">
        <div style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img 
            src="/media/gif/jerry.gif" 
            alt="Ouroboros - Wide Shot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Hero Image: Ouroboros Installation]</span>';
              }
            }}
          />
        </div>
      </section>
    </div>
  );
}
