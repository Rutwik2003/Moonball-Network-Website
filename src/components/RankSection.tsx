import { motion } from 'framer-motion';
import { Crown, Star, ArrowRightSquare } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';

const ranks = [
  {
    name: 'VIP',
    icon: <Star className="w-8 h-8 text-primary" />,
    price: '$10M IGM',
    color: 'from-primary/80 to-primary',
    perks: [
      'Access to /fly command',
      '5 homes with /sethome',
      'VIP tag in chat',
      '1.5x Selling Price',
      'Access to /setwarp',
      'Show your angel chest location with /angelchest',
      'Auto-sort inventory with /chestsort',
      'Fun actions: /sit, /lay, /crawl'
    ]
  },
  {
    name: 'MVP',
    icon: <Crown className="w-8 h-8 text-primary" />,
    price: '$25M IGM',
    color: 'from-primary to-primary/80',
    perks: [
      'All VIP perks',
      '10 homes with /sethome',
      'Access to /echest command',
      'MVP tag in chat',
      'Access to /hat',
      'Portable crafting table with /workbench',
      'Use /sellwand to auto-sell items'
    ]
  }
];

export function RankSection() {
  return (
    <ParallaxSection 
      id="ranks" 
      className="py-20 bg-muted"
      bgColor="hsl(var(--muted))"
      direction="up"
      speed={0.15}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Server Ranks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ranks.map((rank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className={`bg-gradient-to-r ${rank.color} p-6 flex items-center justify-between`}>
                <div className="flex items-center space-x-4">
                  {rank.icon}
                  <h3 className="text-2xl font-bold text-white">{rank.name}</h3>
                </div>
                <span className="text-white font-bold">{rank.price}</span>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-4 text-lg">Perks & Benefits</h4>
                <ul className="space-y-2">
                  {rank.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-start space-x-2">
                      <ArrowRightSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}