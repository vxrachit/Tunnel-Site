import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Lock,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">vxRachit's Deployment Portal</h1>
                <p className="text-sm text-gray-400">Secured by Cloudflare Tunnel</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/vxRachit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/vxRachit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/vxRachit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium text-lg">TUNNEL ACTIVE</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Deployment Secured
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This application is protected by Cloudflare Tunnel with zero-trust network access and enterprise-grade security.
          </p>
        </div>

        {/* Main Status Card */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 mb-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-500/20 p-6 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-400" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Connection Established
            </h3>
            <p className="text-gray-400">
              Your deployment is live and accessible through Cloudflare's secure tunnel
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    End-to-End Encryption
                  </h4>
                  <p className="text-gray-400 text-sm">
                    256-bit AES encryption with TLS 1.3
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    DDoS Protection
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Enterprise-grade threat mitigation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full border border-blue-500/30">
            <Shield className="h-4 w-4 text-blue-400" />
            <span className="text-blue-100 text-sm">
              Powered by Cloudflare Global Network
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Built with ❤️ by vxRachit
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;