import { motion } from 'framer-motion';
import { Disc as Discord, ChevronRight } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
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
                  <Discord className="w-4 h-4 mr-2" />
                  Join Discord Server
                </span>
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold mb-4 text-white">Server Rules</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="text-white font-bold">1. No Griefing:</span>
                    {/* <span className="text-white"> Respect all builds. Do not destroy, alter, or steal other players' creations.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">2. No Cheating/Mods:</span>
                    {/* <span className="text-white"> Use only approved clients. Hacked clients are forbidden.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">3. No Exploits or Duplication:</span>
                    {/* <span className="text-white"> Exploiting glitches or duplicating items is strictly prohibited.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">4. No Stealing:</span>
                    {/* <span className="text-white"> Do not take items or resources from others without permission.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">5. Respect Others:</span>
                    {/* <span className="text-white"> Harassment, hate speech, or bullying will not be tolerated.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">6. No Unauthorized PvP:</span>
                    {/* <span className="text-white"> Engage in PvP only in designated areas or with mutual consent.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">7. No Advertising:</span>
                    {/* <span className="text-white"> Advertising other servers or external sites is not allowed.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">8. Keep Chat Clean:</span>
                    {/* <span className="text-white"> Avoid spamming, excessive caps, and inappropriate language.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">9. Obey Staff:</span>
                    {/* <span className="text-white"> Follow all directions from moderators and admins.</span> */}
                  </li>
                  <li>
                    <span className="text-white font-bold">10. Have Fun:</span>
                    {/* <span className="text-white"> Enjoy your time and help foster a friendly community!</span> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
