import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (serviceId: string) => {
    setActiveDropdown(activeDropdown === serviceId ? null : serviceId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              {services.map((service, index) => (
                <div key={service.id} className="relative">
                  <button
                    onClick={() => handleDropdownClick(service.id)}
                    className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    {service.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === service.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === service.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {service.categories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/services/${service.id}/${category.id}`}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-neon-blue transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href="#contact"
                className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
              
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-blue transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              {services.map((service) => (
                <div key={service.id}>
                  <button
                    onClick={() => handleDropdownClick(service.id)}
                    className="w-full text-left text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
                  >
                    {service.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === service.id ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6"
                      >
                        {service.categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/services/${service.id}/${category.id}`}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href="#contact"
                className="block text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};