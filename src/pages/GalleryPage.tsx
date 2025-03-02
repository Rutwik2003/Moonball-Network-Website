import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '../components/ParallaxSection';
import { MessageSquare, Disc } from 'lucide-react';

const galleryImages = [
  {
    url: "rutwik_mansion.png",
    title: "Rocky_rutwik's Mansion",
    description: "An epic dark mansion built for storage", 
    builder: "Rocky_rutwik"
  },
  {
    url: "./shishui_portal.png",
    title: "Shishui's Nether Portal",
    description: "Sword styled portal",
    builder: "Shishui"
  },
  {
    url: "./shishui_enderman.png",
    title: "Enderman Statue in the overworld",
    description: "Long lost Enderman Statue",
    builder: "Shishui"
  },
  // Add more gallery images here
];

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <ParallaxSection
        className="py-12"
        bgImage="https://i.imgur.com/bjK4J.jpg"
        direction="down"
        speed={0.1}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">Server Gallery</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore amazing builds and creations from our talented community members.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Submit Your Builds</h3>
              <p className="text-muted-foreground mb-4">
                Want to showcase your own creations? Join our Discord server and submit your screenshots in the #build-showcase channel!
              </p>
              <a
                href="https://discord.com/invite/krdHGQsne4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <Disc className="w-4 h-4 mr-2" />
                Join our Discord
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
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
                <p className="text-muted-foreground mb-2">{image.description}</p>
                <p className="text-sm text-primary">Built by: {image.builder}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}