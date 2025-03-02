import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '../components/ParallaxSection';
import { Disc, ChevronRight, Pickaxe, Sword, Shield, Gem, Users, MessageSquare } from 'lucide-react';

export function CommunityPage() {
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
              <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with other players, participate in events, and become part of our growing Minecraft family.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 py-12">
        {/* Discord Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Disc className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Discord Community</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Our Discord server is the central hub for all community activities. Join us to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Chat with other players in real-time</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Get instant server announcements</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Participate in community events and giveaways</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Report issues and get support from staff</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Share your builds and screenshots</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Suggest new features for the server</span>
                </li>
              </ul>
              <a
                href="https://discord.com/invite/krdHGQsne4"
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-btn"
              >
                <span className="minecraft-btn-inner"></span>
                <span className="minecraft-btn-text flex items-center">
                  <Disc className="w-4 h-4 mr-2" />
                  Join Discord Server
                </span>
              </a>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-muted p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-bold text-white">Discord Channels</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">#welcome:</span>
                      <span className="text-white ml-1">Server rules and information for new members.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">#announcements:</span>
                      <span className="text-white ml-1">Important server updates and news.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">#general-chat:</span>
                      <span className="text-white ml-1">Main discussion channel for all members.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">#build-showcase:</span>
                      <span className="text-white ml-1">Share your amazing Minecraft creations.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">#support:</span>
                      <span className="text-white ml-1">Get help with any server-related issues.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Server Rules Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Server Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Pickaxe className="w-5 h-5 text-primary mr-3" />
                <h3 className="font-bold text-white">No Griefing</h3>
              </div>
              <p className="text-white text-sm">
                Respect all builds and player creations. Do not destroy, alter, or steal other players' work without permission. This includes breaking blocks, placing unwanted blocks, or using TNT in player-built areas.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <h3 className="font-bold text-white">No Cheating/Hacks</h3>
              </div>
              <p className="text-white text-sm">
                Use only approved clients and mods. Hacked clients, X-ray texture packs, or any mod that gives an unfair advantage are strictly forbidden. We regularly scan for unauthorized modifications.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Gem className="w-5 h-5 text-primary mr-3" />
                <h3 className="font-bold text-white">No Exploits</h3>
              </div>
              <p className="text-white text-sm">
                Exploiting glitches, bugs, or duplicating items is strictly prohibited. If you discover a bug, report it to staff immediately rather than taking advantage of it. Helping others exploit will also result in punishment.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sword className="w-5 h-5 text-primary mr-3" />
                <h3 className="font-bold text-white">No Unauthorized PvP</h3>
              </div>
              <p className="text-white text-sm">
                Engage in PvP only in designated areas or with mutual consent. Killing players without permission, especially new players, is not allowed. PvP is enabled in specific arenas and during special events only.
              </p>
            </div>
          </div>
        </div>

        {/* Community Events Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Community Events</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            We regularly host special events to bring our community together. Join our Discord to stay updated on upcoming events!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-muted p-6 rounded-lg text-center"
            >
              <h3 className="font-bold text-white mb-3">Coming Soon!</h3>
              {/* <p className="text-white text-sm">
                Show off your building skills in our themed competitions with awesome in-game prizes.
              </p> */}
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-muted p-6 rounded-lg text-center"
            >
              <h3 className="font-bold text-white mb-3">Coming Soon!</h3>
              {/* <p className="text-white text-sm">
                Battle other players in organized tournaments with special rules and rewards.
              </p> */}
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-muted p-6 rounded-lg text-center"
            >
              <h3 className="font-bold text-white mb-3">Coming Soon!</h3>
              {/* <p className="text-white text-sm">
                Follow clues and solve puzzles to find hidden treasures across the server.
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}