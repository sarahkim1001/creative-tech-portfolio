export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ 
          paddingTop: 'calc(var(--header-top-spacing) + 1rem)',
          paddingBottom: '8rem'
        }}
      >
        <div>
          <div className="w-full max-w-[300px] aspect-[3/4] mb-16">
            <img 
              src="/media/img/pfp2.JPG" 
              alt="Sarah S. Kim"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="mb-2">
          </h1>
          <h4 className="font-normal mb-6 no-outline">
            Sarah S. Kim <br></br>  Born in 2002 Silicon Valley, CA
          </h4>
          <p 
            className="italic"
            style={{ 
              opacity: 0.8
            }}
          >
            "Cyborgs are not reverent; they do not re-member the cosmos. They are wary of holism, but needy for connection- they seem to have a natural feel for united front politics, but without the vanguard party. The main trouble with cyborgs, of course, is that they are the illegitimate offspring of militarism and patriarchal capitalism, not to mention state socialism. But illegitimate offspring are often exceedingly unfaithful to their origins."
          </p>
          <p 
            className="mt-4"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              lineHeight: '1.75',
              opacity: 0.7
            }}
          >
            ― Donna J. Haraway
          </p>
        </div>
      </section>

      {/* Narrative Sections - Centered Narrow Column */}
      <section className="pb-40">
        <div className="flex justify-center">
          <div 
            className="w-full space-y-20 text-left"
            style={{ maxWidth: 'var(--content-max-width)' }}
          >
            {/* The Vision */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                The Vision
              </h2>
              <p 
                className="mb-6 body-large"
              >
                Palo Alto is a place where technology isn't just an industry—it's the air we breathe. Growing up here, I've watched global systems move into our most private spaces, blurring the line between our digital and physical lives. My work explores this shared atmosphere, looking at how we build our collective memory and our identities when our most intimate moments are woven into these systems.
              </p>
            </div>

            {/* Creative Practice */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                Creative Practice
              </h2>
              <p 
                className="mb-6 body-large"
              >
                My creative practice is a process of sensory excavation, but more importantly, it is an act of creating with. I don't see technology as a standalone tool, but as a medium for communication—a way to create alongside people, systems, and the infrastructure itself. Whether I am designing an installation or curating a gallery, my goal is to build a clearing where we can stop and create together. It's about uncovering the stories that get lost in the rush and finding new ways to coexist through the tools we share.
              </p>
            </div>

            {/* The Outcome: Experiential Environments */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                The Outcome: Experiential Environments
              </h2>
              <p 
                className="body-large"
              >
                As a creator, I translate these dialogues into spatial sound, digital art, and gallery curation. I turn invisible digital patterns into tactile experiences, transforming spaces into sites of resonance. Through practices like Deep Listening, I try to quiet the noise of a tech-heavy world to create a sense of shared presence. These environments are built to help us navigate a mediated world as a connected, resilient community—less as isolated users and more as active participants in a shared story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Biography - Education & Technical Stack */}
      <section className="pt-40 pb-40">
        <div className="flex justify-center">
          <div 
            className="w-full text-left"
            style={{ maxWidth: 'var(--grid-max-width)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Education & Background */}
              <div>
                <h3 
                  className="mb-4 uppercase tracking-widest small no-outline"
                >
                  Education & Background
                </h3>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.171875rem',
                    lineHeight: '1.6',
                    opacity: '0.7'
                  }}
                >
                  <p>NYU IDM (2025)</p>
                  <p>Minor in Media, Culture, and Communication</p>
                  <p>Global Research Residency in Florence (Speculative Materiality focus)</p>
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h3 
                  className="mb-4 uppercase tracking-widest small no-outline"
                >
                  Technical Stack
                </h3>
                <div 
                  className="space-y-6"
                  style={{ 
                    fontFamily: 'monospace',
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    opacity: '0.6'
                  }}
                >
                  <div>
                    <p 
                      className="mb-2 uppercase tracking-widest"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: 'var(--text-bold)',
                        opacity: '0.8'
                      }}
                    >
                      Systemic Craft
                    </p>
                    <p>Figma, Adobe Creative Suite, DaVanci Resolve, Ableton Live, REAPER, Arduino, MIDI, Max/MSP, Isadora, Github, HTML/CSS/JS, Cursor (AI-assisted development), React, TypeScript, Next.js, Tailwind CSS, Python</p>
                  </div>
                  <div>
                    <p 
                      className="mb-2 uppercase tracking-widest"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: 'var(--text-bold)',
                        opacity: '0.8'
                      }}
                    >
                      Sensory Craft
                    </p>
                    <p>Projection & Installation Design, Interaction Design, User Experience Design, Immersive Spatial Audio, Digital Signal Processing, Cinematography, Video Production, Documentary Photography, Experimental Cello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="pt-32 pb-32">
        <div className="flex justify-center">
          <div 
            className="w-full text-left"
            style={{ maxWidth: 'var(--content-max-width)' }}
          >
            <h3 
              className="mb-4 uppercase tracking-widest small no-outline"
            >
              Connect (Direct Inquiry)
            </h3>
            <div 
              className="space-y-2"
              style={{ 
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                lineHeight: '1.75'
              }}
            >
              <p>
                <span className="font-bold" style={{ fontFamily: 'var(--font-sans)' }}>Email:</span>{' '}
                <a 
                  href="mailto:sarahkim1001@gmail.com"
                  className="underline"
                >
                  sarahkim1001@gmail.com
                </a>
              </p>
              <p>
                <span className="font-bold" style={{ fontFamily: 'var(--font-sans)' }}>Location:</span> Based in Palo Alto, CA
              </p>
              <p>
                <span className="font-bold" style={{ fontFamily: 'var(--font-sans)' }}>Presence:</span>{' '}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
                {' '}|{' '}
                <a href="https://instagram.com/s4rahkim" target="_blank" rel="noopener noreferrer" className="underline">Instagram (@s4rahkim)</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
