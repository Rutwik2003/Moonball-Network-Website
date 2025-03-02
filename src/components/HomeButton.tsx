import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HomeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link 
        to="/" 
        className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Return to homepage"
      >
        <Home className="w-6 h-6" />
      </Link>
    </motion.div>
  );
}