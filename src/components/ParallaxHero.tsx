import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

export function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://64.media.tumblr.com/02df562998609dd0d0f8506afe210d19/tumblr_inline_pty4z4bJ6n1uu5udo_1280.png')",
          y,
          scale,
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Minecraft-style floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center text-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <img src="./logo.png" alt="Moonball Network Logo" className="w-24 h-24 mx-auto" />
        </motion.div>
        
        <AnimatedText 
          text="Moonball Network"
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl"
        >
          Experience Minecraft like never before with our unique gameplay features and vibrant community
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <a 
            href="#server-info" 
            className="minecraft-btn"
          >
            <span className="minecraft-btn-inner"></span>
            <span className="minecraft-btn-text">
              Start Your Adventure
            </span>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}