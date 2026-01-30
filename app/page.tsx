'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

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
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
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
        
        // Multi-octave noise for organic displacement (only when not dispersed) - slowed down
        float noiseValue = noise(currentPos * 2.0 + uTime * 0.02);
        noiseValue += noise(currentPos * 4.0 + uTime * 0.03) * 0.5;
        noiseValue += noise(currentPos * 8.0 + uTime * 0.04) * 0.25;
        vNoise = noiseValue;
        
        // Displace vertices based on noise (less when dispersed)
        vec3 displaced = currentPos + normal * noiseValue * 0.15 * (1.0 - uDispersion * 0.5);
        
        // Breathing effect - subtle expansion/contraction (only when not dispersed)
        displaced *= (1.0 + uBreath * 0.05 * (1.0 - uDispersion));
        
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
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vNoise;
          
          void main() {
            // Soft glow effect
            float distance = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distance);
            
            // Color based on noise and position - increased lightness variability
            vec3 color = vec3(0.4, 0.4, 0.4); // Gray base color
            
            // Increased variation for more lightness variability - slowed down
            float noiseVariation = vNoise * 0.4; // Increased from 0.1-0.12 to 0.4
            vec3 variation = vec3(
              noiseVariation + sin(vPosition.x * 2.0 + uTime * 0.2) * 0.15,
              noiseVariation + sin(vPosition.y * 2.0 + uTime * 0.16) * 0.15,
              noiseVariation + sin(vPosition.z * 2.0 + uTime * 0.24) * 0.15
            );
            
            // Increased lighting variation
            vec3 lighting = vNormal * 0.2; // Increased from 0.05 to 0.2
            
            // Add position-based brightness variation - slowed down
            float positionBrightness = sin(length(vPosition) * 3.0 + uTime * 0.1) * 0.25;
            
            // Combine all variations
            vec3 finalColor = color + variation + lighting + vec3(positionBrightness);
            
            // Mix with grayscale to desaturate (less desaturation for more variation)
            float gray = dot(finalColor, vec3(0.299, 0.587, 0.114)); // Luminance
            color = mix(finalColor, vec3(gray), 0.5); // Reduced from 0.7 to 0.5 for more color variation
            
            // Fade opacity during dispersion
            float dispersionOpacity = uOpacity * (1.0 - uDispersion * 0.6);
            
            // More translucent - reduce alpha significantly
            gl_FragColor = vec4(color, alpha * dispersionOpacity);
          }
        `;

    // Create Icosahedron geometry
    const geometry = new THREE.IcosahedronGeometry(2, 4); // High subdivision for detail
    
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
        uOpacity: { value: 0.15 },
        uDispersion: { value: 0 }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    // Create Points mesh
    const points = new THREE.Points(pointsGeometry, material);
    group.add(points);
    pointsRef.current = points;

    // Mouse interaction - use window coordinates for full page
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const mouseX = (e.clientX - centerX) / (window.innerWidth / 2);
      const mouseY = (e.clientY - centerY) / (window.innerHeight / 2);
      
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
    };

    container.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      timeRef.current += 0.005; // Slowed down from 0.01 to 0.005
      
      // Lerp rotation for smooth movement
      const lerpFactor = 0.05;
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * lerpFactor;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * lerpFactor;
      
      if (group) {
        group.rotation.x = currentRotationRef.current.x;
        group.rotation.y = currentRotationRef.current.y;
      }
      
      // Breathing animation - slowed down
      const breath = Math.sin(timeRef.current * 0.25) * 0.5 + 0.5; // Slowed from 0.5 to 0.25
      if (material.uniforms) {
        material.uniforms.uTime.value = timeRef.current;
        material.uniforms.uBreath.value = breath;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
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
    <div 
      ref={containerRef}
          style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        cursor: 'grab',
        zIndex: 0
      }}
    />
  );
}
