import React from 'react';
import { Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Player {
  uuid: string;
  name_raw: string;
  name_clean: string;
  name_html: string;
}

interface OnlinePlayersPanelProps {
  isOpen: boolean;
  onClose: () => void;
  players: {
    online: number;
    max: number;
    list?: Player[];
  };
}

export function OnlinePlayersPanel({ isOpen, onClose, players }: OnlinePlayersPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed right-0 top-0 h-full w-80 bg-card shadow-xl z-50"
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold">Online Players</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Players Online: {players.online}/{players.max}
              </p>
            </div>
            <div className="space-y-2">
              {players.list && players.list.length > 0 ? (
                players.list.map((player) => (
                  <div
                    key={player.uuid}
                    className="flex items-center space-x-2 p-2 bg-muted rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: player.name_html || player.name_clean }} />
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No players online</p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}