import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'Join Us', to: '/join' },
    { name: 'Events', to: '/' },
    { name: 'Contact', to: '/contact' },
    { name: 'Donate', to: '/donate' }
  ];

  return (
    <footer className="bg-section-bg text-white border-t border-accent-pink/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f993c44b-d4fd-4f34-bca0-651a08316ee6.png" 
                alt="Rotaract Club of BMS Yelahanka" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering youth to create positive change in the community through service, leadership, and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-pink">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-300 hover:text-accent-pink transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-pink">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-300">
                📧 rcbmsy@bmsit.in
              </p>
              <p className="text-gray-300">
                📍 BMS Institute of Technology, Yelahanka, Bangalore
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/rota_bms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-accent-pink to-bright-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/rotaract-club-bms-yelahanka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-accent-pink to-bright-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-pink/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Rotaract Club of BMS Institute of Technology, Yelahanka. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Made with ❤️ by the Web Team of Rotaract BMSY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
