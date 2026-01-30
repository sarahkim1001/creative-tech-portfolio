'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const pointsRef = useRef<THREE.Points | null>(null);
  const originalPositionsRef = useRef<Float32Array | null>(null);
  const dispersedPositionsRef = useRef<Float32Array | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const gradient = 'linear-gradient(180deg, #e8f2ff 0%, #a99db3 100%)';
    document.documentElement.style.background = gradient;
    document.body.style.background = gradient;
    return () => {
      document.documentElement.style.background = '';
      document.body.style.background = '';
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0.5; // Move camera up slightly to shift sphere center up
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Group for rotation
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    // Shaders
    const vertexShader = `
      uniform float uTime;
      uniform float uBreath;
      uniform float uDispersion;
      attribute vec3 aOriginalPosition;
      attribute vec3 aDispersedPosition;
      
      // Simple hash-based noise function
      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }
      
      float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = i.x + i.y * 57.0 + 113.0 * i.z;
        return mix(
          mix(mix(hash(vec3(n + 0.0)), hash(vec3(n + 1.0)), f.x),
              mix(hash(vec3(n + 57.0)), hash(vec3(n + 58.0)), f.x), f.y),
          mix(mix(hash(vec3(n + 113.0)), hash(vec3(n + 114.0)), f.x),
              mix(hash(vec3(n + 170.0)), hash(vec3(n + 171.0)), f.x), f.y),
          f.z
        );
      }
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying float vNoise;
      
      void main() {
        vNormal = normal;
        vPosition = position;
        
        // Interpolate between original and dispersed positions
        vec3 currentPos = mix(aOriginalPosition, aDispersedPosition, uDispersion);
        
        // Multi-octave noise for organic displacement - faster movement
        float noiseValue = noise(currentPos * 1.5 + uTime * 0.08);
        noiseValue += noise(currentPos * 3.0 + uTime * 0.12) * 0.7;
        noiseValue += noise(currentPos * 6.0 + uTime * 0.18) * 0.4;
        noiseValue += noise(currentPos * 12.0 + uTime * 0.25) * 0.2;
        vNoise = noiseValue;
        
        // Add more organic movement with additional noise layers - faster
        float organicMovement = noise(currentPos * 0.8 + uTime * 0.06) * 0.5;
        organicMovement += noise(currentPos * 2.2 + uTime * 0.1) * 0.3;
        organicMovement += noise(currentPos * 5.0 + uTime * 0.15) * 0.2;
        
        // Add wave-like flow patterns - faster
        float waveFlow = sin(currentPos.x * 2.0 + uTime * 0.25) * cos(currentPos.y * 2.0 + uTime * 0.2) * sin(currentPos.z * 1.8 + uTime * 0.3);
        
        // Displace vertices based on noise - increased displacement for more organic, irregular shape
        vec3 displaced = currentPos + normal * (noiseValue * 0.3 + organicMovement * 0.4 + waveFlow * 0.15) * (1.0 - uDispersion * 0.5);
        
        // Add rotation-based displacement for more organic, flowy feel
        vec3 tangent = cross(normal, vec3(0.0, 1.0, 0.0));
        if (length(tangent) < 0.1) {
          tangent = cross(normal, vec3(1.0, 0.0, 0.0));
        }
        tangent = normalize(tangent);
        vec3 bitangent = cross(normal, tangent);
        
        // More pronounced swirl with varied frequencies for flowy movement - faster
        float swirl1 = sin(uTime * 0.2 + length(currentPos) * 1.8) * 0.12;
        float swirl2 = cos(uTime * 0.3 + length(currentPos) * 2.5) * 0.08;
        float swirl = swirl1 + swirl2;
        
        // Add spiral flow pattern - faster
        float spiral = sin(atan(currentPos.y, currentPos.x) * 3.0 + length(currentPos) * 2.0 + uTime * 0.25) * 0.1;
        
        displaced += (tangent * cos(uTime * 0.35 + length(currentPos) * 1.5) + bitangent * sin(uTime * 0.35 + length(currentPos) * 1.5)) * swirl * (1.0 - uDispersion);
        displaced += normal * spiral * (1.0 - uDispersion);
        
        // Breathing effect - more irregular expansion/contraction - faster
        float breathVariation = noise(currentPos * 0.5 + uTime * 0.12) * 0.3;
        displaced *= (1.0 + (uBreath * 0.06 + breathVariation * 0.04) * (1.0 - uDispersion));
        
        vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Point size based on distance and noise - make smaller for more translucency
        float distance = length(mvPosition.xyz);
        gl_PointSize = 1.5 * (300.0 / distance) * (0.5 + noiseValue * 0.5) * (1.0 - uDispersion * 0.3);
      }
    `;

        const fragmentShader = `
          uniform float uTime;
          uniform float uOpacity;
          uniform float uDispersion;
          uniform float uDesaturation;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vNoise;
          
          void main() {
            // Soft glow effect
            float distance = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distance);
            
            // Color based on noise and position - increased lightness variability
            vec3 color = vec3(0.4, 0.4, 0.4); // Gray base color
            
            // Increased variation for more lightness variability
            float noiseVariation = vNoise * 0.4; // Increased from 0.1-0.12 to 0.4
            vec3 variation = vec3(
              noiseVariation + sin(vPosition.x * 2.0 + uTime * 0.2) * 0.15,
              noiseVariation + sin(vPosition.y * 2.0 + uTime * 0.16) * 0.15,
              noiseVariation + sin(vPosition.z * 2.0 + uTime * 0.24) * 0.15
            );
            
            // Increased lighting variation
            vec3 lighting = vNormal * 0.2; // Increased from 0.05 to 0.2
            
            // Add position-based brightness variation
            float positionBrightness = sin(length(vPosition) * 3.0 + uTime * 0.1) * 0.25;
            
            // Combine all variations
            vec3 finalColor = color + variation + lighting + vec3(positionBrightness);
            
            // Mix with grayscale to desaturate - animated from muted to colorful
            float gray = dot(finalColor, vec3(0.299, 0.587, 0.114)); // Luminance
            color = mix(finalColor, vec3(gray), uDesaturation); // Use uniform for animated desaturation
            
            // Fade opacity during dispersion
            float dispersionOpacity = uOpacity * (1.0 - uDispersion * 0.6);
            
            // More translucent - reduce alpha significantly
            gl_FragColor = vec4(color, alpha * dispersionOpacity);
          }
        `;

    // Create Icosahedron geometry
    const geometry = new THREE.IcosahedronGeometry(1.2, 4); // Smaller radius for more compact sphere
    
    // Convert to Points geometry
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = geometry.attributes.position.array;
    const normals = geometry.attributes.normal.array;
    
    // Store original positions
    originalPositionsRef.current = new Float32Array(positions);
    
    // Create dispersed positions with noise-based turbulence
    const dispersedPositions = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      // Direction away from center
      const direction = new THREE.Vector3(x, y, z).normalize();
      
      // Add noise-based turbulence - increased for full page dispersion
      const noiseScale = 2.0;
      const turbulenceX = (Math.random() - 0.5) * noiseScale;
      const turbulenceY = (Math.random() - 0.5) * noiseScale;
      const turbulenceZ = (Math.random() - 0.5) * noiseScale;
      
      // Disperse distance with variation - much larger for full page explosion
      const disperseDistance = 10.0 + Math.random() * 8.0;
      
      dispersedPositions[i] = x + direction.x * disperseDistance + turbulenceX;
      dispersedPositions[i + 1] = y + direction.y * disperseDistance + turbulenceY;
      dispersedPositions[i + 2] = z + direction.z * disperseDistance + turbulenceZ;
    }
    dispersedPositionsRef.current = dispersedPositions;
    
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    pointsGeometry.setAttribute('aOriginalPosition', new THREE.Float32BufferAttribute(originalPositionsRef.current, 3));
    pointsGeometry.setAttribute('aDispersedPosition', new THREE.Float32BufferAttribute(dispersedPositionsRef.current, 3));

    // Material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uBreath: { value: 0 },
        uOpacity: { value: 0 }, // Start at 0 for fade-in
        uDispersion: { value: 0 },
        uDesaturation: { value: 0.9 } // Start with high desaturation (muted/white tones)
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    // Create Points mesh
    const points = new THREE.Points(pointsGeometry, material);
    group.add(points);
    pointsRef.current = points;

    // Fade in the sphere on load - slower animation
    gsap.to(material.uniforms.uOpacity, {
      value: 0.15,
      duration: 4,
      ease: 'power2.in'
    });

    // Animate color from muted/white tones to more colorful
    gsap.to(material.uniforms.uDesaturation, {
      value: 0.5, // End at current colorful state
      duration: 6,
      ease: 'power2.out',
      delay: 1 // Start after fade-in begins
    });

        // Mouse interaction - use container coordinates
        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const mouseX = (e.clientX - centerX) / (rect.width / 2);
          const mouseY = (e.clientY - centerY) / (rect.height / 2);
          
          targetRotationRef.current = {
            x: mouseY * Math.PI * 0.3,
            y: mouseX * Math.PI * 0.3
          };
        };

    const handleMouseLeave = () => {
      targetRotationRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Click handler for spore dispersion
    let isAnimating = false;
    const handleClick = () => {
      if (isAnimating) return; // Prevent multiple clicks during animation
      
      isAnimating = true;
      
      // Create GSAP timeline
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
          // Keep particles dispersed and invisible - don't reset
        }
      });
      
      // Dispersion - particles flow away
      tl.to(material.uniforms.uDispersion, {
        value: 1,
        duration: 8,
        ease: 'power2.out'
      });
      
      // Fade out completely after dispersion
      tl.to(material.uniforms.uOpacity, {
        value: 0,
        duration: 1,
        ease: 'power2.out'
      }, '>');
      
      // Show button and fade it in after particles fade
      // Set showButton immediately so React renders it
      setShowButton(true);
      
      // Add button fade-in to timeline with delay - faster fade in
      tl.call(() => {
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (buttonRef.current) {
              // Set initial opacity explicitly
              buttonRef.current.style.opacity = '0';
              gsap.to(buttonRef.current, { 
                opacity: 1, 
                duration: 0.8,
                ease: 'power2.in'
              });
            } else {
              // Retry after a short delay
              setTimeout(() => {
                if (buttonRef.current) {
                  buttonRef.current.style.opacity = '0';
                  gsap.to(buttonRef.current, { 
                    opacity: 1, 
                    duration: 0.8,
                    ease: 'power2.in'
                  });
                }
              }, 100);
            }
          });
        });
      }, [], '>+=0.2'); // Start 0.2s after fade out completes (faster)
    };

    container.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      timeRef.current += 0.015; // Increased speed for faster flow
      
      // Lerp rotation for smooth movement
      const lerpFactor = 0.05;
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * lerpFactor;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * lerpFactor;
      
      if (group) {
        group.rotation.x = currentRotationRef.current.x;
        group.rotation.y = currentRotationRef.current.y;
      }
      
      // Breathing animation - faster
      const breath = Math.sin(timeRef.current * 0.5) * 0.5 + 0.5; // Increased speed for faster flow
      if (material.uniforms) {
        material.uniforms.uTime.value = timeRef.current;
        material.uniforms.uBreath.value = breath;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerWidth, containerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      
      container.removeEventListener('click', handleClick);
      
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      pointsGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      cursor: 'grab',
      position: 'relative'
    }}>
      <div 
        ref={containerRef}
          style={{ 
          position: 'relative',
          width: '100vw',
          height: '100vh',
          zIndex: 0
        }}
      />
      {showButton && (
        <div
          ref={buttonRef}
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            zIndex: 10000,
            cursor: 'pointer',
            pointerEvents: 'auto',
            width: 'auto',
            height: 'auto'
          }}
        >
        <Link 
            href="/studio"
          style={{ 
            fontFamily: 'var(--font-sans)',
              fontSize: '2.16rem',
              fontWeight: 400,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              padding: '1.2rem 2.4rem',
              border: '1px solid var(--text-primary)',
              borderRadius: '4px',
              transition: 'opacity 0.3s ease',
              display: 'block',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            the studio
        </Link>
      </div>
      )}
    </div>
  );
}
