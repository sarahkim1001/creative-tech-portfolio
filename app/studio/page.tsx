'use client';

import { useEffect } from 'react';
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
    <div style={{ paddingTop: '4.8rem', paddingBottom: '4.8rem' }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '4.8rem', maxWidth: '1680px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '2.88rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '1.2rem',
          marginTop: 0
        }}>
          
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '1.44rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          margin: 0
        }}>
          
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{ maxWidth: '1680px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.4rem'
          }}
        >
              {projects.map((project, index) => {
                // Create irregular timing for each card - slower durations
                const durations = [10, 11, 12, 10.5];
                const delays = [0, 1.5, 2.5, 0.8];
                return (
                <Link
                  key={project.id}
                  href={project.href!}
                  className="floating-card"
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    animationDelay: `${delays[index]}s`,
                    animationDuration: `${durations[index]}s`,
                    display: 'block'
                  }}
                >
                  {/* Thumbnail */}
                  <div className="project-card-container" style={{ 
                    width: '100%',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f5',
                    opacity: 0.75,
                    marginBottom: '1.2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {project.title === 'Cyborgania' ? (
                      <iframe
                        src="https://cyborgania.org"
                        className="project-image-hover"
                        style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none', position: 'absolute', top: 0, left: 0 }}
                        title="Cyborgania Website Preview"
                      />
                    ) : project.thumbnail && project.thumbnail !== '/placeholder.jpg' ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="project-image-hover"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                      />
                    ) : null}
                    {/* Dark overlay - shows on hover */}
                    <div className="project-dark-overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
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
