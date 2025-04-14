import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsPage } from './pages/ProjectsPage';
import { Footer } from './components/Footer';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background-dark to-gray-900 opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-neon-purple/10 to-transparent" />
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 gradient-text animate-gradient-text">
                      Crafting Digital Excellence
                    </h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-xl md:text-2xl mb-8 text-gray-300"
                    >
                      Where Vision Meets Innovation in Every Pixel
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-neon-blue/25 hover:scale-105"
                      >
                        Let's Create Together
                      </a>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-neon-blue/20 to-transparent rounded-full blur-3xl" />
                  <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-neon-purple/20 to-transparent rounded-full blur-3xl" />
                </div>
              </section>

              <ServicesSection />

              {/* Contact Section */}
              <section id="contact" className="py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-gray-900" />
                <div className="max-w-3xl mx-auto relative">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold font-display text-center mb-12 gradient-text"
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-xl p-8"
                  >
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-neon-blue/25"
                      >
                        Send Message
                      </motion.button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-700">
                      <div className="flex justify-center space-x-6">
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
                  </motion.div>
                </div>
              </section>
              <Footer />
            </>
          } />
          <Route path="/services/:serviceId/:categoryId" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;