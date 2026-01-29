import Link from 'next/link';

const projects = [
  {
    title: 'The Sink',
    href: '/studio/digital-collagescapes',
    thumbnail: '/media/img/cleansegirl.png'
  },
  {
    title: 'The Feeding Plate',
    href: '/studio/the-feeding-plate',
    thumbnail: '/media/gif/plate.gif'
  },
  {
    title: 'Seventh Sense',
    href: '/studio/seventh-sense',
    thumbnail: '/media/img/seventh-sense-landing.jpg'
  },
  {
    title: 'Ouroboros',
    href: '/studio/ouroboros',
    thumbnail: '/media/gif/within.gif'
  }
];

export default function Home() {
  return (
    <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {projects.map((project) => (
          <Link key={project.href} href={project.href}>
            <div style={{ cursor: 'pointer' }}>
              <div style={{ 
                width: '100%', 
                aspectRatio: '1/1',
                backgroundColor: '#f5f5f5',
                marginBottom: '1rem',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                margin: 0
              }}>
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
