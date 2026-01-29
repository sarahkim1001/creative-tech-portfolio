'use client';

export default function DigitalCollagescapes() {
  return (
    <div className="min-h-screen">
      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
        <div style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img 
            src="/media/img/cleansegirl.png" 
            alt="The Sink - Wide Shot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-gray-500" style="font-family: var(--font-sans); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">[Hero Image: /media/img/cleansegirl.png]</span>';
              }
            }}
          />
        </div>
      </section>

      {/* Header Section */}
      <section 
        className="pb-12"
        style={{ 
          paddingTop: 'var(--header-top-spacing)'
        }}
      >
        <div>
            <h1 className="mb-4">
              The Sink: Systemic Excavations
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              2026 | Multimedia Series
            </p>
        </div>
      </section>

      {/* Description & Content Section */}
      <section className="pb-20">
        <div className="w-full space-y-16">
            {/* Project Overview */}
            <div>
              <h2 className="mb-6 font-bold">
                Project Overview
              </h2>
              <p className="mb-6 body-large">
                This series functions as a structural analysis of filtration—the process by which biological life is translated into standardized data. Using the domestic sink as a primary site of inquiry, the work investigates the historical lineage of standardized domesticity and the infrastructures designed to manage human behavior.
              </p>
              <p className="body-large">
                The project treats the collage as a technical "sink," a terminal point where historical blueprints, digital interfaces, and biological residues are compressed into a single, flattened plane.
              </p>
            </div>

            {/* Methodology: Information Layering */}
            <div>
              <h2 className="mb-6 font-bold">
                Methodology: Information Layering
              </h2>
              <p className="mb-6 body-large">
                The work employs a methodology of data degradation. By layering technical schematics with organic textures, the collages track the tension between the sterile precision of a data point and the viscerality of living experience.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Filtration & Objectification
                  </h3>
                  <p className="body-large">
                    The imagery deciphers how modern interfaces—both physical (plumbing) and digital (algorithms)—function as sieves. These systems are designed to isolate "value" while discarding the complexities of instinct and memory.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Systems of Measurement
                  </h3>
                  <p className="body-large">
                    The project traces the lineage of tools used to quantify the body. From colonial hygiene mandates to contemporary smart-home sensors, the work examines how these frameworks attempt to "calibrate" the human experience.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Mnemonic Residue
                  </h3>
                  <p className="body-large">
                    By deconstructing these technogenetic forces, the series surfaces what the system cannot fully process: the "clog" or the "stain." These are the historical and somatic costs of optimization that resist being filtered away.
                  </p>
                </div>
              </div>
            </div>

            {/* Structural Themes */}
            <div>
              <h2 className="mb-6 font-bold">
                Structural Themes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    The Digital Sink
                  </h3>
                  <p className="mb-6 body-large">
                    Investigating the points where information pools and loses its original weight, becoming a standardized unit of measurement.
                  </p>
                  <div className="space-y-6 ml-6">
                    <div>
                      <h4 className="mb-2 font-bold">
                        Infrastructural Inheritance
                      </h4>
                      <p className="body-large">
                        Noticing a pattern between industrial fluid management and modern data architecture. The logic of 19th-century civil engineering—containment, flow, and the terminal "sink"—has been repurposed to build the invisible pipes of the digital network.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">
                        The Logic of the Sieve
                      </h4>
                      <p className="body-large">
                        Noticing the "cleanse" as a process of active filtration. This observes how the sink functions as a selective threshold for both biological and social characteristics. It is an inquiry into the lineage of systemic sorting—where the interface acts as a filter to isolate "sanitized" or "optimized" traits while draining away the complexities that don't fit the mesh.
                      </p>
                    </div>
                  </div>
                </div>
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 flex items-center justify-center mb-4">
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 flex items-center justify-center mb-4">
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 flex items-center justify-center mb-4">
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
