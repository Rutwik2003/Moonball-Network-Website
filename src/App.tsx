import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Users, Disc as Discord } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import { Navigation } from './components/Navigation';
import { RankSection } from './components/RankSection';
import { CommunitySection } from './components/CommunitySection';
import { AdminSection } from './components/AdminSection';
import { OnlinePlayersPanel } from './components/OnlinePlayersPanel';
import { plugins } from './data/plugins';
import type { ServerStatus } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const serverIP = 'mc.rutwikdev.com:6007';

  useEffect(() => {
    document.documentElement.classList.add('dark');

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
    const interval = setInterval(fetchServerStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Online Players Panel */}
      <OnlinePlayersPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        players={{
          online: serverStatus?.players.online ?? 0,
          max: serverStatus?.players.max ?? 0,
          list: serverStatus?.players.list
        }}
      />

      {/* Players Panel Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-l-lg shadow-lg z-40 hover:bg-primary/90 transition-colors"
      >
        <Users className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Moonball Network</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience Minecraft like never before with our unique gameplay features,
              active community, and dedicated staff team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                <Discord className="w-4 h-4 mr-2" />
                Join Discord
              </span>
            </a>
          </motion.div>

          {/* Server Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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

      {/* Plugin Wiki */}
      <section id="plugins" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Plugin Commands</h2>
          <div className="grid grid-cols-1 gap-8">
            {plugins.map((plugin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">{plugin.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{plugin.name}</h3>
                    <p className="text-muted-foreground">{plugin.description}</p>
                    <p className="text-sm text-muted-foreground">Category: {plugin.category}</p>
                  </div>
                </div>
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
      </section>

      <RankSection />
      <AdminSection />
      <CommunitySection />
    </div>
  );
}

export default App;