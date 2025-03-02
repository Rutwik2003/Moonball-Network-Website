import React from 'react';
import { motion } from 'framer-motion';
import { plugins } from '../data/plugins';
import { ParallaxSection } from '../components/ParallaxSection';

export function PluginsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <ParallaxSection
        className="py-12"
        bgImage="https://images.unsplash.com/photo-1624559911499-98ec7a48a498?q=80&w=2574&auto=format&fit=crop"
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
              <h1 className="text-4xl font-bold mb-4">Server Plugins & Commands</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover all the features and commands available on our server. Use these commands to enhance your gameplay experience.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {plugins.map((plugin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-muted p-4 rounded-lg mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <div className="text-primary">{plugin.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plugin.name}</h3>
                    <p className="text-muted-foreground">{plugin.description}</p>
                    <span className="inline-block bg-primary/20 text-primary text-xs px-2 py-1 rounded mt-2">
                      {plugin.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 border-b pb-2">Available Commands</h4>
              <div className="space-y-4">
                {plugin.commands.map((cmd, cmdIndex) => (
                  <div key={cmdIndex} className="bg-muted p-4 rounded-md">
                    <code className="text-primary font-mono break-all">{cmd.command}</code>
                    <p className="text-sm text-muted-foreground mt-2">{cmd.description}</p>
                    {cmd.permission && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Permission: <code className="text-primary">{cmd.permission}</code>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}