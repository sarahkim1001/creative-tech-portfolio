'use client';

import { useState } from 'react';
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
  {
    id: '1',
    title: 'The Sink',
    category: ['digital collage'],
    thumbnail: '/media/img/cleansegirl.png',
    description: 'Investigating the Culture of Cleanse as a pervasive ideological atmospheric inherited from colonial eugenics',
    href: '/studio/digital-collagescapes'
  },
  {
    id: '3',
    title: 'The Feeding Plate',
    category: ['experimental sound', 'interactive media art'],
    thumbnail: '/media/gif/plate.gif',
    description: 'An inquiry into the transduction of material resonance and the uncomfortable feedback loops found in our relationship with objects',
    href: '/studio/the-feeding-plate'
  },
  {
    id: '4',
    title: 'Seventh Sense',
    category: ['experimental sound', 'projection visuals'],
    thumbnail: '/media/img/seventh-sense-landing.jpg',
    description: 'Investigates digital media as a contemporary sensory organ, auditing the interface layer that mediates our perception',
    href: '/studio/seventh-sense'
  },
  {
    id: '2',
    title: 'Ouroboros',
    category: ['experimental sound', 'interactive media art'],
    thumbnail: '/media/gif/within.gif',
    description: 'A study of how physical and digitally mediated spaces affect presence through a personal crawl through installation',
    href: '/studio/ouroboros'
  }
];

const categories: Array<'digital collage' | 'experimental sound' | 'mixed media sculpture' | 'interactive media art' | 'projection visuals' | 'All'> = [
  'All',
  'digital collage',
  'experimental sound',
  'mixed media sculpture',
  'interactive media art',
  'projection visuals'
];

export default function Studio() {
  const [activeFilter, setActiveFilter] = useState<'digital collage' | 'experimental sound' | 'mixed media sculpture' | 'interactive media art' | 'projection visuals' | 'All'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));


  return (
    <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '2rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          marginTop: 0
        }}>
          Studio
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          margin: 0
        }}>
          Creating-with: a collaborative process involving people, technology, and shared systems.
        </p>
      </div>

      {/* Filter System */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category as typeof activeFilter)}
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: activeFilter === category ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href!}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {/* Thumbnail */}
                  <div style={{ 
                    width: '100%',
                    aspectRatio: '1/1',
                    backgroundColor: '#f5f5f5',
                    marginBottom: '1rem',
                    overflow: 'hidden'
                  }}>
                    {project.thumbnail && project.thumbnail !== '/placeholder.jpg' ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : null}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {project.title}
                    </h3>
                    {project.description && (
                      <p style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                        color: 'var(--text-primary)',
                        margin: 0
                      }}>
                        {project.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
