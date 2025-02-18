import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="./logo.png" alt="Server Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Moonball Network</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#plugins" className="hover:text-primary transition-colors hidden sm:block">Plugins</a>
            <a href="#ranks" className="hover:text-primary transition-colors hidden sm:block">Ranks</a>
            <a href="#community" className="hover:text-primary transition-colors hidden sm:block">Community</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}