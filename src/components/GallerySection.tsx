import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxSection } from './ParallaxSection';

const featuredImages = [
  {
    url: "rutwik_mansion.png",
    title: "Rocky_rutwik's Mansion",
    description: "An epic dark mansion built for storage"
  },
  {
    url: "./shishui_portal.png",
    title: "Shishui's Nether Portal",
    description: "Sword styled portal"
  },
  {
    url: "./shishui_enderman.png",
    title: "Enderman Statue in the overworld",
    description: "Long lost Enderman Statue"
  }
];

export function GallerySection() {
  return (
    <ParallaxSection 
      className="py-20 bg-muted"
      bgColor="hsl(var(--muted))"
      direction="down"
      speed={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Server Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of the amazing builds and moments from our server community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-muted-foreground">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <div className="flex items-start">
              <MessageSquare className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-sm">
                Want to showcase your own builds? Join our Discord server and submit your screenshots in the #build-showcase channel!
              </p>
            </div>
          </div>
          
          <Link
            to="/gallery"
            className="inline-flex items-center minecraft-btn"
          >
            <span className="minecraft-btn-inner"></span>
            <span className="minecraft-btn-text flex items-center justify-center">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
}