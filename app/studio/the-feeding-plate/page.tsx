'use client';

export default function TheFeedingPlate() {
  return (
    <div className="min-h-screen">
      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
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

      {/* Header Section */}
      <section 
        className="pb-12"
        style={{ 
          paddingTop: 'var(--header-top-spacing)'
        }}
      >
        <div>
            <h1 className="mb-4">
              The Feeding Plate
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              Interactive Sound Installation
            </p>
        </div>
      </section>

      {/* Description & Content Section */}
      <section className="pb-20">
        <div className="w-full space-y-16">
            {/* Main Description */}
            <div>
              <p className="body-large">
                An inquiry into the transduction of material resonance and the uncomfortable feedback loops found in our relationship with objects. This installation uses a contact microphone and an electromagnetic transducer to establish an analog circuit within a metal plate. By amplifying the plate's own resonant frequencies and reintroducing them into the material, the object "listens" to itself—sustaining a continuous signal that feels both autonomous and trapped. The intervention of domestic utensils to "play" the plate disrupts this equilibrium, questioning the "sticky" tension between human control and the inherent liveliness of inorganic matter.
              </p>
            </div>

            {/* The Technical Audit */}
            <div>
              <h2 className="mb-6 font-bold">
                The Technical Audit
              </h2>
              <p className="mb-6 body-large">
                The work examines the intersection of electromagnetic signals and the physical properties of objects:
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Signal Transduction
                  </h3>
                  <p className="body-large">
                    The project utilizes a piezo-electric contact microphone to convert physical vibrations into an electrical signal, which is then boosted through a high-gain pre-amplifier circuit.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Material Resonance
                  </h3>
                  <p className="body-large">
                    Feeding the amplified signal back into the plate via a surface transducer allows the system to sustain the material's specific resonant modes, turning the plate's physical dimensions into the primary determinant of the sound.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Cybernetic Agency
                  </h3>
                  <p className="body-large">
                    The setup creates a basic cybernetic system—a loop of sensing and acting that persists without human presence until the equilibrium is disturbed.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Human Tooling
                  </h3>
                  <p className="body-large">
                    Using utensils to "play" the plate acts as a mechanical modulation of the circuit, highlighting the tension between the autonomous behavior of the system and our historical habit of treating material culture as a passive resource.
                  </p>
                </div>
              </div>
            </div>

            {/* Conceptual Framing */}
            <div>
              <h2 className="mb-6 font-bold">
                Conceptual Framing: Vital Materialism & The Non-Human
              </h2>
              <p className="mb-6 body-large">
                This installation functions as an exercise in co-being, challenging the view that inorganic matter is inert until used by a human agent:
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Material Liveliness
                  </h3>
                  <p className="body-large">
                    The project imagines the plate not as a passive tool, but as an entity with its own internal logic and "sonorous biography". The sustained vibration serves as a proxy for a heartbeat, suggesting matter possesses a form of agency that exists outside of human utility.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    The Listening Object
                  </h3>
                  <p className="body-large">
                    In The Feeding Plate, the roles are reversed; the object is the one listening to itself. This shifts the viewer's perspective from a position of dominance to one of witness, observing a system engaged in an internal, cyclic dialogue.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Questioning Domesticity
                  </h3>
                  <p className="body-large">
                    By using common utensils to interfere with the loop, the work critiques the "clean," sterilized relationship we have with our domestic objects. It suggests that our "tooling" of material culture is often an act of silencing the inherent resonance of the world around us.
                  </p>
                </div>
              </div>
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
                    src="/media/gif/plate.gif" 
                    alt="The Feeding Plate Installation"
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
                  [Caption: Installation view / Metal plate with contact microphone]
                </p>
              </div>

              {/* Gallery Item 2 */}
              <div>
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
                  <img 
                    src="/media/gif/plate.gif" 
                    alt="The Feeding Plate Detail"
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
                  [Caption: Detail view / Domestic utensils interacting with plate]
                </p>
              </div>

              {/* Gallery Item 3 */}
              <div>
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
                  <img 
                    src="/media/gif/plate.gif" 
                    alt="The Feeding Plate Technical"
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
                  [Caption: Technical documentation / Analog circuit diagram]
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
