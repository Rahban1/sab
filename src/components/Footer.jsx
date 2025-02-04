import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/aurajewel', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/aurajewel', label: 'Facebook' },
    { icon: FaPinterest, href: 'https://pinterest.com/aurajewel', label: 'Pinterest' },
    { icon: FaTwitter, href: 'https://twitter.com/aurajewel', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light mb-4">AURA JEWEL</h3>
            <p className="text-gray-400">Embrace Your Unique Brilliance</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-light mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Jewel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;