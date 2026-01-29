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
        <div className="w-full">
          <div className="w-full max-w-[300px] aspect-[3/4] mb-16">
            <img 
              src="/media/img/pfp2.JPG" 
              alt="Sarah S. Kim"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="mb-2">
          </h1>
          <h4 className="font-normal mb-6 no-outline" style={{ maxWidth: 'fit-content' }}>
            Sarah S. Kim <br></br>  Born in 2002 Silicon Valley, CA
          </h4>
          <p 
            className="italic"
            style={{ 
              opacity: 0.8,
              maxWidth: 'fit-content'
            }}
          >
            "Cyborgs are not reverent; they do not re-member the cosmos. They are wary of holism, but needy for connection- they seem to have a natural feel for united front politics, but without the vanguard party. The main trouble with cyborgs, of course, is that they are the illegitimate offspring of militarism and patriarchal capitalism, not to mention state socialism. But illegitimate offspring are often exceedingly unfaithful to their origins."
          </p>
          <p 
            className="mt-4"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '1.25rem',
              lineHeight: '1.75',
              opacity: 0.7
            }}
          >
            ― Donna J. Haraway
          </p>
        </div>
      </section>

      {/* Narrative Sections */}
      <section className="pb-40">
        <div className="w-full space-y-20 text-left">
            {/* The Practice */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                Community
              </h2>
              <p 
                className="mb-6 body-large"
              >
                For Sarah, being a creative technologist is about using digital media to bring people together. She views this as an art form that mixes technical production and a search for new forms of connection, using experimental configurations of sound, light, and space—whether digital, physical, or the "in-between." She finds purpose in connecting with people through new spaces and experiences.
              </p>
              <p 
                className="mb-6 body-large"
              >
                Sarah sees technology as a tool for reconnection. Whether she is installing AV systems for live performances, working in a gallery, or building immersive projects, her focus remains on creating experiences that ground us in our humanity. Through the design of intuitive interfaces, she transforms digital media into a space for questioning, discovery, and collective wonder. For her, growing with communities and collaborating on projects is the foundational process.
              </p>
            </div>

            {/* Principles */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                Being
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-bold">
                    Actively Curious
                  </h3>
                  <p className="body-large">
                    In every project there is the opportunity to learn how people relate with art, the world, and each other. This shared curiosity is the foundation of her practice.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Grounded & Practical
                  </h3>
                  <p className="body-large">
                    Sarah sees beauty in the technical; for her, aligning images, text, and colors, positioning a projector, or balancing sound signals is a very special kind of meditation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Human
                  </h3>
                  <p className="body-large">
                    Waking up with the world. 
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Industrial Biography - Education & Technical Stack */}
      <section className="pt-40 pb-40">
        <div className="w-full text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Education & Background */}
              <div>
                <h3 
                  className="mb-4 tracking-widest small no-outline"
                >
                  Education & Background
                </h3>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-sans)',
              fontWeight: 400,
                    fontSize: '1.75rem',
                    lineHeight: '1.6',
                    opacity: '0.7'
                  }}
                >
                  <p>NYU IDM (2025): B.S. in Integrated Design and Media</p>
                  <p>Minor: Media, Culture, and Communication</p>
                  <p>Residency: Global Research Residency in Florence (Speculative Materiality focus)</p>
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h3 
                  className="mb-4 tracking-widest small no-outline"
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
                      className="mb-2 tracking-widest"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        color: 'var(--text-bold)',
                        opacity: '0.8'
                      }}
                    >
                      Systemic Craft
                    </p>
                    <p>Figma, Adobe Creative Suite, DaVinci Resolve, Ableton Live, REAPER, Arduino, MIDI, Max/MSP, Isadora, GitHub, HTML/CSS/JS, Cursor, React, TypeScript, Next.js, Tailwind CSS, Python.</p>
                  </div>
                  <div>
                    <p 
                      className="mb-2 tracking-widest"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        color: 'var(--text-bold)',
                        opacity: '0.8'
                      }}
                    >
                      Sensory Craft
                    </p>
                    <p>Projection & Installation Design, Interaction Design, User Experience Design, Immersive Spatial Audio, Digital Signal Processing, Cinematography, Video Production, Documentary Photography, Experimental Cello.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="pt-32 pb-32">
        <div className="w-full text-left">
            <h3 
              className="mb-4 tracking-widest small no-outline"
            >
              Connect
            </h3>
            <div 
              className="space-y-2"
              style={{ 
                fontFamily: 'var(--font-sans)',
              fontWeight: 400,
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
      </section>
    </div>
  );
}
