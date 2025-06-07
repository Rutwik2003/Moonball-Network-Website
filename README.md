# Moonball Network Website

A modern, responsive website for the Moonball Network Minecraft server, built with React, TypeScript, and Tailwind CSS. This website serves as the central hub for the Moonball Network community, providing real-time server information, community features, and comprehensive documentation.

## 🚀 Features

### Core Features
- Real-time server status monitoring with automatic refresh
- Live player count and online players display
- Interactive UI with smooth animations powered by Framer Motion
- Dark mode support with persistent theme preference
- Fully responsive design optimized for all devices
- Server information and community sections
- Comprehensive plugin documentation
- Interactive gallery section
- Detailed FAQ section

### Technical Features
- Server status API integration with mcstatus.io
- Discord server integration
- Copy-to-clipboard functionality for server IP
- Dynamic routing with React Router
- Optimized build process with Vite
- TypeScript for enhanced type safety
- Tailwind CSS for utility-first styling
- Component-based architecture

## 🛠️ Tech Stack

### Frontend Framework
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2

### Styling & UI
- Tailwind CSS 3.4.1
- Framer Motion 11.0.8
- Lucide React Icons 0.344.0
- clsx & tailwind-merge for dynamic class management

### Routing & State Management
- React Router DOM 6.22.2
- React Hooks for state management

### API & Data Fetching
- Axios 1.6.7
- React Copy to Clipboard 5.1.0

### Development Tools
- ESLint 9.9.1
- PostCSS 8.4.35
- Autoprefixer 10.4.18

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd moonball-network
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The development server will start at `http://localhost:5173`

4. Build for production:
```bash
npm run build
```
This will create an optimized production build in the `dist` directory.

5. Preview the production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation/     # Navigation components
│   ├── Sections/       # Page sections
│   └── UI/            # Common UI elements
├── pages/              # Page components
│   ├── Gallery/       # Gallery page
│   ├── Community/     # Community page
│   └── Plugins/       # Plugins documentation
├── data/               # Static data and configurations
├── types/             # TypeScript type definitions
├── styles/            # Global styles and Tailwind config
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Detailed Features

### Server Status System
- Real-time monitoring of server status
- Automatic refresh every 60 seconds
- Display of online player count
- List of currently online players
- Server status indicator (online/offline)

### Community Features
- Discord server integration
- Community guidelines
- Server rules and policies
- Staff team information
- Community events calendar

### UI/UX Features
- Smooth page transitions
- Responsive navigation
- Interactive buttons with hover effects
- Loading states and animations
- Error handling and fallbacks
- Accessibility features

### Plugin Documentation
- Comprehensive plugin list
- Command documentation
- Feature explanations
- Usage examples
- Configuration guides

### Gallery System
- Image showcase
- Category filtering
- Responsive image grid
- Lazy loading
- Image optimization

## 🚀 Deployment

The project is configured for deployment on Vercel with the following features:
- Automatic deployments from Git
- Preview deployments for pull requests
- Production environment configuration
- Custom domain support
- SSL/TLS encryption

### Deployment Process
1. Push to main branch triggers production deployment
2. Pull requests get preview deployments
3. Environment variables are managed through Vercel dashboard
4. Build optimization for production

## 📝 License

This project is licensed under the terms included in the LICENSE file. All rights reserved.

## 🤝 Contributing

We welcome contributions to the Moonball Network website! Here's how you can help:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code style
- Write meaningful commit messages
- Update documentation as needed
- Test changes thoroughly

## 📞 Support

For support, you can:
- Join our Discord server [https://discord.rutwikdev.com/](https://discord.rutwikdev.com/)
- Open an issue in the repository
- Contact the development team via discord.

### Issue Reporting
When reporting issues, please include:
- Detailed description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information 
