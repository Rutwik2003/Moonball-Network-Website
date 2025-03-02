import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-primary/20 rounded-full';
      
      // Random starting position
      const startX = Math.random() * container.offsetWidth;
      const startY = Math.random() * container.offsetHeight;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      container.appendChild(particle);

      // Animate the particle
      const animation = particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 0 },
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(2)`, opacity: 0.5 },
        { transform: `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0)`, opacity: 0 }
      ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        particle.remove();
        createParticle();
      };
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    />
  );
}