import { Link } from 'react-router-dom';
import { Github, Disc, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-muted-foreground">
              Moonball Network is a Minecraft community focused on creating an enjoyable
              and friendly gaming experience for all players.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plugins" className="text-muted-foreground hover:text-primary transition-colors">
                  Plugins
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/#ranks" className="text-muted-foreground hover:text-primary transition-colors">
                  Ranks
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.com/invite/krdHGQsne4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Disc className="w-4 h-4 mr-2" />
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rutwik2003/Moonball-Network-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Server Status</h3>
            <p className="text-muted-foreground">
              Server IP: mc.rutwikdev.com:6007
            </p>
            <p className="text-muted-foreground">
              Version: 1.21.4
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Moonball Network Team
          </p>
        </div>
      </div>
    </footer>
  );
}