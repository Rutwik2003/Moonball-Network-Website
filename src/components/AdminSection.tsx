import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface Admin {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

const admins: Admin[] = [
  {
    name: 'Nice_Creator',
    role: 'Host',
    avatar: './Nice_Creator.png',
    description: 'Server owner and main administrator. Responsible for server Hosting.'
  },
  {
    name: 'Rutwik',
    role: 'Owner',
    avatar: './Rocky_Rutwik.png',
    description: 'Server owner. Responsible for server management and development.'
  },

  // Add more admins as needed
];

export function AdminSection() {
  return (
    <section id="admins" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Server Administration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated team of administrators who keep the server running smoothly and ensure a great experience for all players.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {admins.map((admin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={admin.avatar}
                    alt={`${admin.name}'s Minecraft Avatar`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">{admin.name}</h3>
                  </div>
                  <p className="text-primary font-semibold mb-2">{admin.role}</p>
                  <p className="text-muted-foreground text-sm">{admin.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}