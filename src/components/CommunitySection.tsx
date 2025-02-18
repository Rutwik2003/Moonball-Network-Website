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
                <h4 className="font-bold mb-4">Server Rules</h4>
                <ul className="space-y-2 text-sm">
                  <li>1. Be respectful to all players</li>
                  <li>2. No griefing or stealing</li>
                  <li>3. No cheating or exploits</li>
                  <li>4. Keep chat family-friendly</li>
                  <li>5. Follow staff instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}