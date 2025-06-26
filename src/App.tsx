import {
  Shield,
  Lock,
  Github,
  Twitter,
  Linkedin,
  TerminalSquare,
  Info,
} from 'lucide-react';

function App() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden flex flex-col justify-between">
      
      {/* ✨ Glowing Background Animations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-ping top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse top-1/3 right-16"></div>
        <div className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-bounce bottom-10 left-1/3"></div>
        <div className="absolute w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-spin-slow bottom-4 right-4"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/80">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg shadow">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">vxRachit Tunnel</h1>
            <p className="text-xs text-gray-400">For Deployment Purposes</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="https://github.com/vxRachit" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://twitter.com/vxRachit" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4 text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/vxRachit" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4 text-gray-400 hover:text-white transition" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-green-500/40 bg-green-500/10 rounded-full mb-4">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
          <span className="text-green-300 text-sm font-medium">Tunnel Active</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">Deployment Secured</h2>
        <p className="text-gray-400 text-sm max-w-sm mb-6">
          Your service is routed through a secure Cloudflare Tunnel with zero-trust encryption.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="border border-blue-500/30 bg-blue-500/10 px-5 py-3 rounded-xl flex items-center space-x-3">
            <Lock className="h-5 w-5 text-blue-400" />
            <span className="text-sm">Encrypted Access</span>
          </div>
          <div className="border border-purple-500/30 bg-purple-500/10 px-5 py-3 rounded-xl flex items-center space-x-3">
            <Shield className="h-5 w-5 text-purple-400" />
            <span className="text-sm">DDoS Protected</span>
          </div>
          <div className="border border-green-500/30 bg-green-500/10 px-5 py-3 rounded-xl flex items-center space-x-3">
            <TerminalSquare className="h-5 w-5 text-green-300" />
            <span className="text-sm">Live Preview</span>
          </div>
          <div className="border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 rounded-xl flex items-center space-x-3">
            <Info className="h-5 w-5 text-yellow-300" />
            <span className="text-sm">Auto Refresh</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-3 text-xs text-gray-500 border-t border-gray-800 bg-black/80">
        <div className="flex justify-center items-center gap-2 text-blue-400">
          <Shield className="h-3 w-3" />
          <span>Powered by Cloudflare Global Network</span>
        </div>
        <p className="mt-1">Built with 🔐 by <span className="text-white font-semibold">vxRachit</span></p>
      </footer>
    </div>
  );
}

export default App;
