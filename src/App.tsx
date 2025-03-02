import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Copy, Users, Disc, ArrowRight } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import { Navigation } from './components/Navigation';
import { RankSection } from './components/RankSection';
import { CommunitySection } from './components/CommunitySection';
import { AdminSection } from './components/AdminSection';
import { OnlinePlayersPanel } from './components/OnlinePlayersPanel';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { GalleryPage } from './pages/GalleryPage';
import { PluginsPage } from './pages/PluginsPage';
import { CommunityPage } from './pages/CommunityPage';
import { HomeButton } from './components/HomeButton';
import { ParallaxHero } from './components/ParallaxHero';

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
    list: any[]; // Adjust this type based on the exact structure from mcstatus.io
  };
}

function HomePage() {
  const [isCopied, setIsCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const serverIP = 'mc.rutwikdev.com:6007';

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(`https://api.mcstatus.io/v2/status/java/${serverIP}`);
        setServerStatus({
          online: response.data.online,
          players: {
            online: response.data.players.online,
            max: response.data.players.max,
            list: response.data.players.list || []
          }
        });
      } catch (error) {
        console.error('Failed to fetch server status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Server Info Section */}
      <section id="server-info" className="py-16 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Server Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience Minecraft like never before with our unique gameplay features,
              active community, and dedicated staff team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <CopyToClipboard text={serverIP} onCopy={handleCopy}>
              <button className="minecraft-btn w-full sm:w-auto">
                <span className="minecraft-btn-inner"></span>
                <span className="minecraft-btn-text flex items-center justify-center">
                  {isCopied ? 'Copied!' : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      {serverIP}
                    </>
                  )}
                </span>
              </button>
            </CopyToClipboard>
            
            <a
              href="https://discord.com/invite/krdHGQsne4"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-btn w-full sm:w-auto"
            >
              <span className="minecraft-btn-inner"></span>
              <span className="minecraft-btn-text flex items-center justify-center">
                <Disc className="w-4 h-4 mr-2" />
                Join Discord
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 max-w-md mx-auto shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Server Status</h2>
              <div className="flex items-center">
                {!isLoading && (
                  <>
                    <div className={`w-3 h-3 rounded-full ${serverStatus?.online ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <span className="text-sm">{serverStatus?.online ? 'Online' : 'Offline'}</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Players Online:</span>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{isLoading ? 'Loading...' : `${serverStatus?.players.online ?? 0}/${serverStatus?.players.max ?? 0}`}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GallerySection />
      <RankSection />
      <AdminSection />
      <CommunitySection />

      {/* Plugin Info Link */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Server Plugins & Commands</h2>
          <p className="text-muted-foreground mb-6">
            Discover all the amazing features and commands available on our server.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/plugins"
              className="inline-flex items-center minecraft-btn"
            >
              <span className="minecraft-btn-inner"></span>
              <span className="minecraft-btn-text flex items-center justify-center">
                View All Plugins
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center minecraft-btn"
            >
              <span className="minecraft-btn-inner"></span>
              <span className="minecraft-btn-text flex items-center justify-center">
                Community Page
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Fetch server status (this can be moved to a context if needed for global access)
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(`https://api.mcstatus.io/v2/status/java/mc.rutwikdev.com:6007`);
        setServerStatus({
          online: response.data.online,
          players: {
            online: response.data.players.online,
            max: response.data.players.max,
            list: response.data.players.list || []
          }
        });
      } catch (error) {
        console.error('Failed to fetch server status:', error);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <OnlinePlayersPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        players={{
          online: serverStatus?.players.online ?? 0,
          max: serverStatus?.players.max ?? 0,
          list: serverStatus?.players.list?.map((player: any) => ({
            uuid: player.uuid,
            name_raw: player.name_clean,
            name_clean: player.name_clean,
            name_html: player.name_html || player.name_clean,
          })) || []
        }}
      />

      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-l-lg shadow-lg z-40 hover:bg-primary/90 transition-colors"
      >
        <Users className="w-6 h-6" />
      </button>

      {!isHomePage && <HomeButton />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plugins" element={<PluginsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;