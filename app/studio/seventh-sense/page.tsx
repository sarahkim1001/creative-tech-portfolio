'use client';

export default function SeventhSense() {
  return (
    <div className="min-h-screen">
      {/* Hero Image - Full Width with 1rem spacing */}
      <section className="w-full relative" style={{ paddingTop: 'calc(var(--header-top-spacing) - 1rem)' }}>
        <a 
          href="https://seventhsense.space"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative cursor-pointer"
          style={{ marginLeft: 'calc(-15% - 4rem)', marginRight: 'calc(-15% - 4rem)', padding: '0 1rem', aspectRatio: '16/9', overflow: 'hidden' }}
        >
          <iframe
            src="https://seventhsense.space"
            className="w-full h-full pointer-events-none transition-opacity duration-300"
            style={{ border: 'none', width: '100%', height: '100%' }}
            title="Seventh Sense Website"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
        </a>
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
              Seventh Sense
            </h1>
            <p 
              className="body-small mb-4"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              2026
            </p>
            <a 
              href="https://seventhsense.space"
              target="_blank"
              rel="noopener noreferrer"
              className="body-small underline"
              style={{ 
                fontFamily: 'var(--font-sans)',
                opacity: 0.7
              }}
            >
              seventhsense.space
            </a>
        </div>
      </section>

      {/* Description & Content Section */}
      <section className="pb-20">
        <div className="w-full space-y-16">
            {/* The Story */}
            <div>
              <h2 className="mb-6 font-bold">
                The Story
              </h2>
              <p className="body-large">
                Seventh Sense is a journey into the hidden architecture of our daily lives. We often think of our digital world as something new, floating in a cloud, but it actually carries a deep, heavy inheritance. This project looks at our screens and feeds as a "seventh sense"—an artificial layer that has quietly grafted itself onto how we perceive the world and each other.
              </p>
              <p className="body-large mt-6">
                By tracing the parallels between the "invisible pipes" of Silicon Valley and the industrial plumbing of the 19th century, the work finds that we are still living within a logic of containment and flow. It's an exploration of how we've been "piped" into certain behaviors and how much of our visceral, human reality gets drained away in the process.
              </p>
            </div>

            {/* The Creative Process */}
            <div>
              <h2 className="mb-6 font-bold">
                The Creative Process
              </h2>
              <p className="mb-6 body-large">
                The development of Seventh Sense was an act of uncovering—a slow, tactile search for the "rust" and "stains" behind the perfect glass of our interfaces:
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Infrastructural Inheritance
                  </h3>
                  <p className="body-large">
                    This began with a curiosity about where our data actually goes. By tracing the lineage back to Victorian-era civil engineering, the work notices how the old ways of moving water and waste were repurposed to manage the movement of our thoughts and connections.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    The Logic of the Sieve
                  </h3>
                  <p className="body-large">
                    A process of noticing the "cleanse." The project explores how platforms act as a mechanical mesh—catching the "sanitized" data points they can use, while letting the complex, messy textures of our actual lives slip through the cracks.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Information Attrition
                  </h3>
                  <p className="body-large">
                    A study of what is lost in translation. By observing how information decays as it's forced through rigid digital protocols, the work surfaces the "clogs" and "stains"—the parts of our story that the system tries to wash away but that ultimately define who we are.
                  </p>
                </div>
              </div>
            </div>

            {/* Found Patterns */}
            <div>
              <h2 className="mb-6 font-bold">
                Found Patterns
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold">
                    Systemic Calibration
                  </h3>
                  <p className="body-large">
                    Noticing how our tools gently nudge us to be more "optimized," filtering out the quirks and non-standard rhythms that make us human.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    Atonic Environments
                  </h3>
                  <p className="body-large">
                    Exploring the "smart" spaces that feel strangely still—homogenous, sedate places where the biological "noise" of life is smoothed over for a standardized domesticity.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">
                    The Terminal Sink
                  </h3>
                  <p className="body-large">
                    Locating the drain—the points where our shared history pools, flattens, and is eventually left behind.
                  </p>
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
                <div className="w-full aspect-video bg-gray-200 border border-gray-400 overflow-hidden mb-4">
                  <img 
                    src="/media/img/seventh-sense-1.jpg" 
                    alt="Seventh Sense Installation"
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
                  [Caption: Installation view]
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
