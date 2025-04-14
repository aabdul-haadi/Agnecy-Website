import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences that inspire, innovate, and leave a lasting impression.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:ahaadi1001@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <ExternalLink size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Nova Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};