'use client';

import { useEffect } from 'react';

export default function About() {
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
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ 
          paddingTop: 'calc(var(--header-top-spacing) - 4rem)',
          paddingBottom: '8rem',
          position: 'relative'
        }}
      >
        {/* Contact Info - Top Right */}
        <div style={{
          position: 'absolute',
          top: 'calc(var(--header-top-spacing) - 4rem + 4rem)', // Lower to align with image start
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          alignItems: 'flex-end'
        }}>
          <a href="mailto:sarahkim1001@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              <path d="M3 7l9 6 9-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sarah-s-kim-03047020a/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12" fill="#1a1a1a"/>
                <circle cx="4" cy="4" r="2" fill="#1a1a1a"/>
            </svg>
          </a>
          <a href="https://instagram.com/s4rahkim" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" fill="#1a1a1a"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#1a1a1a"/>
            </svg>
          </a>
        </div>

        <div className="w-full">
          <div className="w-full max-w-[300px] aspect-[3/4] mb-16" style={{ borderRadius: '50%', overflow: 'hidden' }}>
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
              fontWeight: 500,
              fontSize: '1.3rem',
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
               About Sarah
              </h2>
              <p 
                className="mb-6 body-large"
              >
                For Sarah, being a creative technologist is about using digital media to bring people together. She views this as an art form that mixes technical production and a search for new forms of connection, using experimental configurations of code, data, sound, light, and space—whether digital, physical, or in-between. She finds purpose in connecting with people through new experiences that transform us into something new.
              </p>
              <p 
                className="mb-6 body-large"
              >
                Sarah sees technology as a tool for reinterpretation, connection, and growth. Whether she is coding generative interfaces, designing AV systems for installations, or working in a gallery, her focus remains on creating experiences that ground us in reflection of our cultural moment, understanding that today's world is profoundly digital. Through the design of intuitive interfaces, she transforms digital media into a space for questioning, discovery, and collective wonder. Growing with communities through innovative projects is the foundational process.
              </p>
            </div>

            {/* Principles */}
            <div>
              <h2 
                className="mb-8 font-bold"
              >
                
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-bold">
                    Words from the artist
                  </h3>
                  <p className="body-large">
                    "I love learning about how people relate with art, the world, and each other." <br></br> 
                    "Embrace uncertainty, dream big, work hard, and choose kindness."<br></br>
                    "Creative experimentation is a gift for healing and connecting."<br></br>
                     "We all together are the foundation of creation"<br></br> 
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
              fontWeight: 500,
                    fontSize: '1.82rem',
                    lineHeight: '1.6',
                    opacity: '0.7'
                  }}
                >
                  <p>NYU IDM (2025): B.S. in Integrated Design and Media</p>
                  <p>Minor: Media, Culture, and Communication</p>
                  <p>Residency: Global Research Residency in Florence (Speculative Materiality focus)</p>
                </div>
                
                {/* Previous Experience */}
                <div style={{ marginTop: '4rem' }}>
                  <h3 
                    className="mb-4 tracking-widest small no-outline"
                  >
                    Previous Experience
                  </h3>
                  <div 
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: '1.82rem',
                      lineHeight: '1.6',
                      opacity: '0.7'
                    }}
                  >
                
                    <p style={{ marginTop: '1.6rem' }}>Qualia Contemporary Art, Palo Alto, CA</p>
                    <p style={{ marginLeft: '1.6rem', fontSize: '1.56rem' }}>Gallery Intern (Jan 2026 - current)</p>
                    <p>Harvestworks, New York, NY</p>
                    <p style={{ marginLeft: '1.6rem', fontSize: '1.56rem' }}>Production Assistant (April - June 2025)</p>
                  </div>
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
                    fontSize: '1.17rem',
                    lineHeight: '1.6',
                    opacity: '0.6'
                  }}
                >
                  <div>
                    <p 
                      className="mb-2 tracking-widest"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.17rem',
                        fontWeight: 500,
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
                        fontSize: '1.17rem',
                        fontWeight: 500,
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

    </div>
  );
}
