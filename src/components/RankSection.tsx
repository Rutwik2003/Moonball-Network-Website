import { motion } from 'framer-motion';
import { Crown, Star, Shield } from 'lucide-react';

const ranks = [
  {
    name: 'VIP',
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    price: '$10M IGM',
    color: 'from-yellow-400 to-yellow-600',
    perks: [
      'Access to /fly command',
      '5 homes with /sethome',
      'VIP tag in chat',
      'Keep Experience',
      '1.5x Selling Price',
    ]
  },
  {
    name: 'MVP',
    icon: <Crown className="w-8 h-8 text-purple-400" />,
    price: '$25M IGM',
    color: 'from-purple-400 to-purple-600',
    perks: [
      'All VIP perks',
      '10 homes with /sethome',
      'Access to /echest command',
      'MVP tag in chat',
      'Access to /repair command',
      'Access /top command',
      'See other inventory',
    ]
  }
];

export function RankSection() {
  return (
    <section id="ranks" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Server Ranks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ranks.map((rank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}