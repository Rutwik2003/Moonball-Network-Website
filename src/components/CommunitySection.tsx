import { motion } from 'framer-motion';
import { Disc, ChevronRight, Pickaxe, Sword, Shield, Gem } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
              <p className="text-muted-foreground mb-6">
                Join our active Discord community to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Chat with other players</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Get server announcements</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Participate in events</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                  <span>Report issues and get support</span>
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
                <h4 className="font-bold mb-4 text-white">Server Rules</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <Pickaxe className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">No Griefing:</span>
                      <span className="text-white ml-1">Respect all builds. Do not destroy, alter, or steal other players' creations.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">No Cheating/Mods:</span>
                      <span className="text-white ml-1">Use only approved clients. Hacked clients are forbidden.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Gem className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">No Exploits:</span>
                      <span className="text-white ml-1">Exploiting glitches or duplicating items is strictly prohibited.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Sword className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-bold">No Unauthorized PvP:</span>
                      <span className="text-white ml-1">Engage in PvP only in designated areas or with mutual consent.</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-primary/20">
                  <div className="flex items-center justify-center">
                    <img src="./logo.png" alt="Moonball Network Logo" className="w-8 h-8 mr-2" />
                    <span className="text-white font-minecraft">Moonball Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}