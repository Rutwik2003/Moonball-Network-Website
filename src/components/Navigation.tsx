import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img src="./logo.png" alt="Server Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Moonball Network</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="sm:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link to="/plugins" className="hover:text-primary transition-colors">Plugins</Link>
            <Link to="/#ranks" className="hover:text-primary transition-colors">Ranks</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 space-y-4 border-t pt-4">
            <Link 
              to="/plugins" 
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Plugins
            </Link>
            <Link 
              to="/#ranks" 
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ranks
            </Link>
            <Link 
              to="/gallery" 
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/community" 
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}