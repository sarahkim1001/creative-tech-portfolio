'use client';

import { useEffect } from 'react';

export default function DigitalCollagescapes() {
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
              Not Hers: Systemic Excavations
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7,
                marginBottom: '4.8rem'
              }}
            >
              2026 | Multimedia Series
            </p>
        </div>
      </section>

      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)', paddingBottom: 'var(--header-top-spacing)' }}>
        <div style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img 
            src="/media/img/she.png" 
            alt="Not Hers - Wide Shot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Hero Image: /media/img/she.png]</span>';
              }
            }}
          />
        </div>
      </section>

      {/* Description & Content Section */}
      <section style={{ paddingBottom: '24rem' }}>
        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '38.4rem' }}>
            {/* Project Overview */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 400 }}>
                Project Overview
              </h2>
              <p className="body-large">
                This series functions as a structural analysis of filtration—the process by which biological life is translated into standardized data. Using the domestic sink as a primary site of inquiry, the work investigates the historical lineage of standardized domesticity and the infrastructures designed to manage human behavior.
              </p>
            </div>

            {/* Methodology: Information Layering */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 400 }}>
                Methodology: Information Layering
              </h2>
              <p className="body-large">
                The work employs a methodology of data degradation. By layering technical schematics with organic textures, the collages track the tension between the sterile precision of a data point and the viscerality of living experience.
              </p>
            </div>

            {/* Structural Themes */}
            <div>
              <h2 style={{ marginBottom: '12rem', fontWeight: 400 }}>
                Structural Themes
              </h2>
              <p className="body-large">
                Investigating the points where information pools and loses its original weight, becoming a standardized unit of measurement.
              </p>
            </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section style={{ paddingBottom: '48rem', display: 'none' }}>
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '19.2rem' }}>
              {/* Gallery Item 1 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span 
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    [Project Image 1]
                  </span>
                </div>
                <p 
                  className="body-small italic"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    opacity: 0.7
                  }}
                >
                  [Caption: Sensory Excavation / Industrial Biography of found assets]
                </p>
              </div>

              {/* Gallery Item 2 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span 
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    [Project Image 2]
                  </span>
                </div>
                <p 
                  className="body-small italic"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    opacity: 0.7
                  }}
                >
                  [Caption: Sensory Excavation / Industrial Biography of found assets]
                </p>
              </div>

              {/* Gallery Item 3 */}
              <div>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f5f5f5', border: '1px solid #999999', overflow: 'hidden', marginBottom: '4.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span 
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    [Project Image 3]
                  </span>
                </div>
                <p 
                  className="body-small italic"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    opacity: 0.7
                  }}
                >
                  [Caption: Sensory Excavation / Industrial Biography of found assets]
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
