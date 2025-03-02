import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  bgColor?: string;
  direction?: 'up' | 'down';
  speed?: number;
  id?: string;
}

export function ParallaxSection({ 
  children, 
  className = '', 
  bgImage,
  bgColor = 'transparent',
  direction = 'up',
  speed = 0.2,
  id
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yValue = direction === 'up' ? [speed * 100, 0] : [0, speed * 100];
  const y = useTransform(scrollYProgress, [0, 1], yValue);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  const backgroundStyle = bgImage 
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: bgColor };

  return (
    <div ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ 
            ...backgroundStyle,
            y: useTransform(scrollYProgress, [0, 1], [0, direction === 'up' ? -30 : 30]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
          }}
        />
      )}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}