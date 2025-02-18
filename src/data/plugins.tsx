import { Shield, Terminal, Gamepad2 } from 'lucide-react';
import type { Plugin } from '../types';

export const plugins: Plugin[] = [
  {
    name: 'AuthMe',
    description: 'Secure authentication system',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />,
    commands: [
      { 
        command: '/register <password> <confirmPassword>', 
        description: 'Register an account'
      },
      { 
        command: '/login <password>', 
        description: 'Login to your account'
      },
      { 
        command: '/changepassword <oldPassword> <newPassword>', 
        description: 'Change your password'
      }
    ]
  },
  {
    name: 'EssentialsX',
    description: 'Essential commands and features',
    category: 'Utility',
    icon: <Terminal className="w-6 h-6" />,
    commands: [
      { 
        command: '/home', 
        description: 'Teleport to your home', 
        permission: 'essentials.home'
      },
      { 
        command: '/tpa <player>', 
        description: 'Request to teleport to a player', 
        permission: 'essentials.tpa'
      },
      { 
        command: '/spawn', 
        description: 'Teleport to spawn', 
        permission: 'essentials.spawn'
      }
    ]
  },
  {
    name: 'mcMMO',
    description: 'RPG-style skill system',
    category: 'Gameplay',
    icon: <Gamepad2 className="w-6 h-6" />,
    commands: [
      { 
        command: '/mcstats', 
        description: 'View your skill stats'
      },
      { 
        command: '/mcrank', 
        description: 'View server rankings'
      },
      { 
        command: '/mctop', 
        description: 'View top players'
      }
    ]
  }
];