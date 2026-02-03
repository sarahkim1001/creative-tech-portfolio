'use client';

import { useEffect } from 'react';

export default function TheFeedingPlate() {
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
              The Feeding
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7,
                marginBottom: '4.8rem'
              }}
            >
              Interactive Sound Installation
            </p>
        </div>
      </section>
      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)', paddingBottom: 'var(--header-top-spacing)' }}>
        <div style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img 
            src="/media/gif/plate.gif" 
            alt="The Feeding Plate - Wide Shot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Hero Image: The Feeding Plate Installation]</span>';
              }
            }}
          />
        </div>
      </section>

      {/* Description & Content Section */}
      <section style={{ paddingBottom: '24rem' }}>
      <h2 style={{ marginBottom: '12rem', fontWeight: 500 }}>
                
              </h2>
              
        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '38.4rem' }}>
            {/* Main Description */}
            <div>
              <p className="body-large">
                The Feeding is an inquiry into the transduction of material resonance and the uncomfortable feedback loops found in our relationship with objects. This installation uses a contact microphone and an electromagnetic transducer to establish an analog circuit within a metal plate. By amplifying the plate's own resonant frequencies and reintroducing them into the material, the object "listens" to itself—sustaining a continuous signal that feels both autonomous and trapped. The intervention of domestic utensils to "play" the plate disrupts this equilibrium, questioning the "sticky" tension between human control and the inherent liveliness of inorganic matter.
              </p>
            </div>

            {/* The Technical Audit */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 500 }}>
               
              </h2>
              <p className="body-large">
                The installation examines the intersection of electromagnetic signals and the physical properties of objects. The Feeding is an exercise in co-being, challenging the view that inorganic matter is inert until used by a human agent.
              </p>
            </div>
        </div>
      </section>
    </div>
  );
}
