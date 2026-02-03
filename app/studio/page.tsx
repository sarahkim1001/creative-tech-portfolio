'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: Array<'digital collage' | 'experimental sound' | 'mixed media sculpture' | 'interactive media art' | 'projection visuals'>;
  thumbnail: string;
  techStack?: string;
  description?: string;
  href?: string;
};

// Projects
const projects: Project[] = [
  
 // {
   // id: '1',
   // title: 'Not Hers',
//    category: ['digital collage'],
  //  thumbnail: '/media/img/she.png',
//    description: 'Investigating the Culture of Cleanse as a pervasive ideological atmospheric inherited from colonial eugenics',
 //   href: '/studio/digital-collagescapes'
 // },
  {
    id: '2',
    title: 'Ouroboros',
    category: ['experimental sound', 'interactive media art'],
    thumbnail: '/media/gif/within.gif',
    description: 'A study of how physical and digitally mediated spaces affect presence through a personal crawl through installation',
    href: '/studio/ouroboros'
  },

  {
    id: '4',
    title: 'Cyborgania',
    category: ['experimental sound', 'projection visuals'],
    thumbnail: '/media/img/seventh-sense-landing.jpg',
    description: 'Investigates digital media as a contemporary sensory organ, auditing the interface layer that mediates our perception',
    href: '/studio/seventh-sense'
  },
  {
    id: '3',
    title: 'The Feeding',
    category: ['experimental sound', 'interactive media art'],
    thumbnail: '/media/gif/plate.gif',
    description: 'An inquiry into the transduction of material resonance and the uncomfortable feedback loops found in our relationship with objects',
    href: '/studio/the-feeding-plate'
  }
];

export default function Studio() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

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
    <div className="studio-page" style={{ paddingTop: '4.8rem', paddingBottom: '4.8rem' }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '4.8rem', maxWidth: 'calc(960px + 8rem)', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '2.5rem',
          fontWeight: 500,
          color: 'var(--text-primary)',
          marginBottom: '1.2rem',
          marginTop: 0
        }}>
          
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '1.25rem',
          fontWeight: 500,
          color: 'var(--text-primary)',
          margin: 0
        }}>
          
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{ maxWidth: 'calc(960px + 8rem)', marginLeft: 'auto', marginRight: 'auto' }}>
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.4rem',
            justifyContent: 'center'
          }}
        >
              {projects.map((project, index) => {
                // Create irregular timing for each card - slower durations
                const durations = [10, 11, 12];
                const delays = [0, 1.5, 2.5];
                // Ensure we don't go out of bounds
                const duration = durations[index] ?? durations[0];
                const delay = delays[index] ?? delays[0];
                
                // Skip if no href
                if (!project.href) return null;
                
                const isActive = activeCard === project.id;
                
                return (
                <Link
                  key={project.id}
                  href={project.href}
                  className={`floating-card ${isActive ? 'card-active' : ''}`}
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    display: 'block'
                  }}
                  onTouchStart={() => setActiveCard(project.id)}
                  onTouchEnd={() => setTimeout(() => setActiveCard(null), 300)}
                  onMouseEnter={() => setActiveCard(project.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Thumbnail */}
                  <div className="project-card-container" style={{ 
                    width: '100%',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f5',
                    opacity: 0.9,
                    marginBottom: '1.2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '100%'
                  }}>
                    {project.title === 'Cyborgania' ? (
                      <iframe
                        src="https://cyborgania.org"
                        className={`project-image-hover ${isActive ? 'image-active' : ''}`}
                        style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none', position: 'absolute', top: 0, left: 0 }}
                        title="Cyborgania Website Preview"
                      />
                    ) : project.thumbnail && project.thumbnail !== '/placeholder.jpg' ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className={`project-image-hover ${isActive ? 'image-active' : ''}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                      />
                    ) : null}
                    {/* Dark overlay - shows on hover/touch */}
                    <div className={`project-dark-overlay ${isActive ? 'overlay-active' : ''}`} style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: isActive ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
                      transition: 'background-color 0.3s ease',
                      pointerEvents: 'none',
                      zIndex: 5
                    }} />
                  </div>
                </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}
