'use client';

export default function Ouroboros() {
  return (
    <div className="min-h-screen">
      {/* Project Gallery */}
      <section className="pb-40" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
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

      {/* Header Section */}
      <section 
        className="pb-12"
        style={{ 
          paddingTop: 'var(--header-top-spacing)'
        }}
      >
        <div>
            <h1 className="mb-4">
              Ouroboros
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              Senior Thesis | 2025
            </p>
        </div>
      </section>

      {/* Description & Content Section */}
      <section className="pb-20">
        <div className="w-full space-y-16">
            {/* Main Description */}
            <div>
              <p className="body-large">
                Ouroboros is a study of how physical spaces affect our state of mind. Using a crawl-through tunnel as a physical threshold, the installation explores the human need to find a private moment of reflection within a busy, overstimulating environment. It acts as a deliberate pause—a physical descent into a quiet, enclosed space that filters out the distractions of the surrounding exhibition. Inside the tunnel, participants are prompted to feel exactly how much their built surroundings dictate their mood, their movement, and their capacity for focus.
              </p>
            </div>

            {/* Conceptual Framework */}
            <div>
              <h2 className="mb-6 font-bold">
                Conceptual Framework
              </h2>
              <p className="body-large">
                The project draws from the existential containment described in Franz Kafka's The Burrow, focusing on the instinct to navigate and find stability within "in-between" spaces. Rather than a traditional gallery experience, Ouroboros functions as a somatic audit, using a change in physical posture—crawling—to break the "autopilot" of daily movement. It is an exploration of how the architectures we inhabit, from the domestic to the industrial, shape our internal consciousness and our ability to connect with ourselves.
              </p>
            </div>

            {/* Sonic & Technical Audit */}
            <div>
              <h2 className="mb-6 font-bold">
                Sonic & Technical Audit
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Consciousness Modulation
                  </h3>
                  <p className="body-large">
                    Using Pauline Oliveros' Deep Listening approach, the system captures everyday ambient urban sounds and uses phase shifting and indeterminacy to transform them into abstract textures. This shift in the acoustic environment helps move the participant from an external "observer" state into a more internal, reflective state of mind.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Memory Triggers
                  </h3>
                  <p className="body-large">
                    The audio landscape is layered with field recordings of domestic and industrial artifacts—such as a kitchen sink or an old computer hum. These sounds are triggered randomly, surfacing like sonic memories that remind the participant of the specific environments (such as the tech-centric domesticity of Silicon Valley) that have shaped their history and values.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Physical Thresholds
                  </h3>
                  <p className="body-large">
                    By forcing a radical change in scale and mobility, the tunnel makes the participant physically aware of their own biological presence. This design demonstrates that our relationship to the non-human world and our own identity is inextricably tied to the physical dimensions of the structures we build.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h2 className="mb-6 font-bold">
                Project Details
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  <span className="font-bold">Role:</span> Lead Creator & Technologist
                </p>
                <p>
                  <span className="font-bold">Medium:</span> Interactive Somatic Installation
                </p>
                <p>
                  <span className="font-bold">Technical Stack:</span> Max/MSP/Jitter, Spatial Audio, Projection Mapping, Custom Fabrication
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
