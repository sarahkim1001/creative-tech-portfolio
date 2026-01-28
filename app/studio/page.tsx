'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: 'digital collage' | 'experimental sound composition' | 'mixed media sculpture' | 'interactive media art';
  thumbnail: string;
  techStack?: string;
  description?: string;
  href?: string;
};

// Projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Culture of Cleanse',
    category: 'digital collage',
    thumbnail: '/media/img/cleansegirl.png',
    description: 'Investigating the Culture of Cleanse as a pervasive ideological atmospheric inherited from colonial eugenics',
    href: '/studio/digital-collagescapes'
  }
];

const categories: Array<'digital collage' | 'experimental sound composition' | 'mixed media sculpture' | 'interactive media art' | 'All'> = [
  'All',
  'digital collage',
  'experimental sound composition',
  'mixed media sculpture',
  'interactive media art'
];

export default function Studio() {
  const [activeFilter, setActiveFilter] = useState<'digital collage' | 'experimental sound composition' | 'mixed media sculpture' | 'interactive media art' | 'All'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div 
      className="min-h-screen"
      style={{ 
        paddingTop: 'calc(var(--header-top-spacing) - 4rem)',
        paddingBottom: 'var(--section-bottom-spacing)'
      }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <p className="body-large">
            The Studio is a site of sym-poietic becoming, where the distinction between tool and artifact dissolves. Here, systemic craft and sensory inquiry converge to map the inextricable connections of our sociotechnical reality.
          </p>
        </div>
      </section>

      {/* Filter System */}
      <section className="pb-16">
        <div className="flex justify-center">
          <div 
            className="w-full text-left"
            style={{ maxWidth: 'var(--grid-max-width)' }}
          >
            <div className="flex gap-8 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category as typeof activeFilter)}
                  className="relative lowercase transition-all duration-300"
                  style={{ 
                    fontFamily: activeFilter === category ? 'monospace' : 'var(--font-sans)',
                    fontSize: '1.5625rem',
                    color: activeFilter === category ? 'var(--text-header)' : 'var(--text-secondary)',
                    opacity: activeFilter === category ? 1 : 0.8
                  }}
                >
                  {category}
                  {activeFilter === category && (
                    <span 
                      className="absolute -bottom-1 left-0 w-full h-[1px]"
                      style={{ backgroundColor: 'var(--text-header)', opacity: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="flex justify-center">
          <div 
            className="w-full"
            style={{ maxWidth: 'var(--grid-max-width)' }}
          >
            <div 
              className="grid"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '4rem'
              }}
            >
              {filteredProjects.map((project) => {
                const ProjectWrapper = project.href ? Link : 'div';
                const wrapperProps = project.href ? { href: project.href } : {};
                
                return (
                  <ProjectWrapper
                    key={project.id}
                    {...wrapperProps}
                    className="group cursor-pointer text-left block"
                  >
                    {/* Thumbnail */}
                    <div 
                      className="w-full aspect-[4/3] bg-gray-200 border border-gray-400 mb-4 transition-all duration-300 group-hover:border-black group-hover:bg-gray-100 flex items-center justify-center overflow-hidden"
                    >
                      {project.thumbnail && project.thumbnail !== '/placeholder.jpg' ? (
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span 
                          className="text-gray-500 text-sm group-hover:text-black transition-colors"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          [Thumbnail]
                        </span>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="text-left">
                      <h3 
                        className="mb-2 font-bold"
                        style={{ 
                          fontFamily: 'PP Neue Montreal',
                          fontSize: '1.5625rem',
                          fontWeight: 100,
                          color: 'transparent',
                          WebkitTextStroke: '1px var(--text-bold)'
                        }}
                      >
                        {project.title}
                      </h3>
                      {project.description && (
                        <p 
                          className="mb-2"
                          style={{ 
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.171875rem',
                            lineHeight: '1.6',
                            opacity: 0.7
                          }}
                        >
                          {project.description}
                        </p>
                      )}
                      {project.techStack && (
                        <p 
                          style={{ 
                            fontFamily: 'monospace',
                            fontSize: '1.125rem',
                            opacity: 0.5
                          }}
                        >
                          {project.techStack}
                        </p>
                      )}
                    </div>
                  </ProjectWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
