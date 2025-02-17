import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Copy, Users, Server, Disc as Discord, ChevronRight, Terminal, Shield, Gamepad2 } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
}

interface Plugin {
  name: string;
  description: string;
  commands: {
    command: string;
    description: string;
    syntax: string;
    example: string;
    permission?: string;
  }[];
  category: string;
  icon: React.ReactNode;
}

const plugins: Plugin[] = [
  {
    name: 'AuthMe',
    description: 'Secure authentication system',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />, 
    commands: [
      { command: '/register <password> <password>', syntax: '/register <password> <password>', example: '/register MySecurePass123 MySecurePass123', description: 'Registers a new account on the server. You must type your password twice.' },
      { command: '/login <password>', syntax: '/login <password>', example: '/login MySecurePass123', description: 'Logs you into your account using your previously registered password.' }
    ]
  },
  {
    name: 'EssentialsX',
    description: 'Essential commands and features',
    category: 'Utility',
    icon: <Terminal className="w-6 h-6" />, 
    commands: [
      { command: '/sethome <name>', syntax: '/sethome <name>', example: '/sethome home1', description: 'Allows you to set a personal home location.' },
      { command: '/home <name>', syntax: '/home <name>', example: '/home home1', description: 'Teleports you to a previously set home.' },
      { command: '/tpa {playername}', syntax: '/tpa {playername}', example: '/tpa Steve', description: 'Request to teleport to a player.' },
      { command: '/tpaccept', syntax: '/tpaccept', example: '/tpaccept', description: 'Accept a teleport request.' }
    ]
  },
  {
    name: 'EconomyShopGUI',
    description: 'In-game economy shop',
    category: 'Economy',
    icon: <Gamepad2 className="w-6 h-6" />, 
    commands: [
      { command: '/shop', syntax: '/shop', example: '/shop', description: 'Opens the shop where you can buy and sell items.' },
      { command: '/sellhand', syntax: '/sellhand', example: '/sellhand', description: 'Sells the item you are currently holding.' },
      { command: '/sellgui', syntax: '/sellgui', example: '/sellgui', description: 'Sell multiple items at once.' }
    ]
  },
  {
    name: 'GriefPrevention',
    description: 'Claim land and prevent griefing',
    category: 'Protection',
    icon: <Shield className="w-6 h-6" />, 
    commands: [
      { command: '/claim', syntax: '/claim', example: '/claim', description: 'Creates a land claim where you are standing using your available claim blocks.' },
      { command: '/trust <player>', syntax: '/trust <player>', example: '/trust Steve', description: 'Grants a player full building rights inside your claim.' },
      { command: '/untrust <player>', syntax: '/untrust <player>', example: '/untrust Steve', description: 'Revokes building rights from a player inside your claim.' },

    ]
  },
  {
    name: 'InvisibleItemFrames',
    description: 'Toggle item frame visibility',
    category: 'Utility',
    icon: <Gamepad2 className="w-6 h-6" />, 
    commands: [
      { command: '/ITF Toggle Visibility', syntax: '/ITF Toggle Visibility', example: '/ITF Toggle Visibility', description: 'Toggles item frame visibility.' },
      { command: '/ITF Toggle Glow', syntax: '/ITF Toggle Glow', example: '/ITF Toggle Glow', description: 'Toggles item frame Glow.' }
    ]
  },
  {
    name: 'TradeSystem',
    description: 'Enables player trading',
    category: 'Economy',
    icon: <Gamepad2 className="w-6 h-6" />, 
    commands: [
      { command: '/trade <player>', syntax: '/trade <player>', example: '/trade Alex', description: 'Send a trade request.' },
      { command: '/trade accept', syntax: '/trade accept', example: '/trade accept', description: 'Accept a trade request.' },
      { command: '/trade deny', syntax: '/trade deny', example: '/trade deny', description: 'Deny a trade request.' }
    ]
  },
  {
    name: 'mcMMO',
    description: 'RPG-style skill system',
    category: 'Gameplay',
    icon: <Gamepad2 className="w-6 h-6" />, 
    commands: [
      { command: '/mcstats', syntax: '/mcstats', example: '/mcstats', description: 'Shows your mcMMO stats.' },
      { command: '/mctop', syntax: '/mctop', example: '/mctop', description: 'Displays top mcMMO players.' },
      { command: '/party <name>', syntax: '/party <name>', example: '/party create Warriors', description: 'Create or join an mcMMO party.' },
      { command: '/repair', syntax: '/repair', example: '/repair', description: 'Repairs items if you have enough levels.' },
      { command: '/inspect <player>', syntax: '/inspect <player>', example: '/inspect Steve', description: 'Inspect another player’s mcMMO stats.' },

    ]
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const serverIP = 'mc.rutwikdev.com:6007';

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    // Fetch server status
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(`https://api.mcstatus.io/v2/status/java/${serverIP}`);
        setServerStatus({
          online: response.data.online,
          players: {
            online: response.data.players.online,
            max: response.data.players.max
          }
        });
      } catch (error) {
        console.error('Failed to fetch server status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Update every minute

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
      {/* Navigation */}
      <nav className="fixed w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Server className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Moonball Network</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#plugins" className="hover:text-primary transition-colors">Plugins</a>
              <a href="#community" className="hover:text-primary transition-colors">Community</a>
              <a href="#staff" className="hover:text-primary transition-colors">Staff</a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">Welcome to Moonball Network</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
              <button className="minecraft-btn">
                <span className="minecraft-btn-inner"></span>
                <span className="minecraft-btn-text flex items-center">
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
              className="minecraft-btn"
            >
              <span className="minecraft-btn-inner"></span>
              <span className="minecraft-btn-text flex items-center">
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
                    <p className="text-muted-foreground">Category: {plugin.category}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {plugin.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="bg-muted p-4 rounded-md">
                      <code className="text-primary font-mono">{cmd.command}</code>
                      <p className="text-sm text-muted-foreground mt-2">Syntax: <code className="text-primary">{cmd.syntax}</code></p>
                      <p className="text-sm text-muted-foreground mt-2">{cmd.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">Example: <code className="text-primary">{cmd.example}</code></p>
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

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
              <div className="flex-1">
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
    </div>
  );
}

export default App;