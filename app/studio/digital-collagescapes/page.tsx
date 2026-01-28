'use client';

export default function DigitalCollagescapes() {
  return (
    <div className="min-h-screen">
      {/* Hero Image - Full Width */}
      <section className="w-full" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
        <div className="w-full aspect-video bg-gray-200 border-b border-gray-400 overflow-hidden">
          <img 
            src="/media/img/cleansegirl.png" 
            alt="Culture of Cleanse - Wide Shot"
            className="w-full h-full object-cover"
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
        <div className="flex justify-center">
          <div 
            className="w-full text-left"
            style={{ maxWidth: 'var(--content-max-width)' }}
          >
            <h1 className="mb-4">
              Culture of Cleanse
            </h1>
            <p 
              className="body-small"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              2026
            </p>
          </div>
        </div>
      </section>

      {/* Description & Content Section */}
      <section className="pb-20">
        <div className="flex justify-center">
          <div 
            className="w-full space-y-16"
            style={{ maxWidth: 'var(--content-max-width)' }}
          >
            {/* Background & Context */}
            <div>
              <h2 className="mb-6 font-bold">
                Background & Context
              </h2>
              <p className="body-large">
                This installment functions as a somatic excavation of the "cleanse" as a survival strategy—an inquiry born from the sterilized environments from the heart of Silicon Valley, California. It investigates the ideological blueprint of Standardized Domesticity that governed my upbringing, where rituals of hygiene were inextricably linked to the mandates of assimilation. This work situates the home not as a private refuge, but as a site of biopolitical regulation, where the domestic sink and the digital interface both serve as tools to filter out the "un-sanitized" complexities of biological life.
              </p>
            </div>

            {/* About the Work */}
            <div>
              <h2 className="mb-6 font-bold">
                About the Work
              </h2>
              <p className="body-large">
                Through a methodology of faded layering, the work deciphers the haunting overlaps between colonial hygiene and the contemporary "utopia" of the digital realm. By deconstructing the technogenetic forces that shape our daily routines, these collages reveal how algorithmic governance attempts to automate instinctual behaviors and standardize communal life. The project utilizes sensory excavation to surface the "hidden histories" of repression and the somatic costs of optimization. Ultimately, Culture of Cleanse seeks to produce situated knowledges that reclaim the visceral texture and weight of an un-sanitized existence against the computational indifference of the modern age.
              </p>
            </div>

            {/* Theoretical Anchors */}
            <div>
              <h2 className="mb-6 font-bold">
                Theoretical Anchors
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Digital Eugenics
                  </h3>
                  <p className="body-large">
                    The framework used to understand how Silicon Valley design cultures favor ideals of efficiency and progress that are actualized through the management of the human body.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Atonic Worlds
                  </h3>
                  <p className="body-large">
                    The concept of "smart" futures that are designed to be homogeneous and sedate, effectively suppressing significant change or biological nuance.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Mnemonic Persistence
                  </h3>
                  <p className="body-large">
                    The act of using art to "tense" an automated world, bringing back the "plant" of communal memory into a sterile, digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="pb-40">
        <div className="flex justify-center">
          <div 
            className="w-full"
            style={{ maxWidth: 'var(--content-max-width)' }}
          >
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
                    fontFamily: 'var(--font-serif)',
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
                    fontFamily: 'var(--font-serif)',
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
                    fontFamily: 'var(--font-serif)',
                    opacity: 0.7
                  }}
                >
                  [Caption: Sensory Excavation / Industrial Biography of found assets]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
