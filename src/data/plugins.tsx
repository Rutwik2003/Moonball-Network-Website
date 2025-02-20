import { Shield, Terminal, Gamepad2 } from 'lucide-react';
import type { Plugin } from '../types';

export const plugins: Plugin[] = [
  {
    name: 'AuthMe',
    description: 'Secure authentication system',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />,
    commands: [
      { command: '/register <password> <confirmPassword>', description: 'Register an account' },
      { command: '/login <password>', description: 'Login to your account' },
      { command: '/changepassword <oldPassword> <newPassword>', description: 'Change your password' },
      { command: '/unregister <password>', description: 'Delete your account' },
      { command: '/logout', description: 'Log out of your account' }
    ]
  },
  {
    name: 'EssentialsX',
    description: 'Essential commands and features',
    category: 'Utility',
    icon: <Terminal className="w-6 h-6" />,
    commands: [
      { command: '/home', description: 'Teleport to your home', permission: 'essentials.home' },
      { command: '/tpa <player>', description: 'Request to teleport to a player', permission: 'essentials.tpa' },
      { command: '/spawn', description: 'Teleport to spawn', permission: 'essentials.spawn' },
      { command: '/pay <player> <amount>', description: 'Send money to a player', permission: 'essentials.pay' },
      { command: '/balance', description: 'Check your balance', permission: 'essentials.balance' },
      { command: '/warp <warpname>', description: 'Teleport to a warp location', permission: 'essentials.warp' }
    ]
  },
  {
    name: 'mcMMO',
    description: 'RPG-style skill system',
    category: 'Gameplay',
    icon: <Gamepad2 className="w-6 h-6" />,
    commands: [
      { command: '/mcstats', description: 'View your skill stats' },
      { command: '/mcrank', description: 'View server rankings' },
      { command: '/mctop', description: 'View top players' }
    ]
  },
  {
    name: 'TradeSystem',
    description: 'Player-to-player trading system',
    category: 'Economy',
    icon: <Shield className="w-6 h-6" />,
    commands: [
      { command: '/trade <player>', description: 'Request to trade with a player' },
      { command: '/trade accept', description: 'Accept a trade request' }]
  },
  {
    name: 'DeluxeSellWands',
    description: 'Quickly sell items using a wand',
    category: 'Economy',
    icon: <Terminal className="w-6 h-6" />,
    commands: [
      { command: '/sellwand', description: 'Sell items using a sell wand' }]
  }
];