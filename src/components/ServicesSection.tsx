import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background-dark to-background-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-neon-blue/10 text-neon-blue mb-4 inline-block">
              Our Services
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text"
          >
            Digital Excellence, Delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From concept to execution, we bring your digital vision to life with cutting-edge solutions and creative expertise.
          </motion.p>
        </div>

        {services.map((service, serviceIndex) => (
          <div key={service.id} className="mb-24 last:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <service.icon className="w-10 h-10 text-neon-blue" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-display gradient-text">
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-1">
                  {service.description}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.categories.map((category, index) => (
                <ServiceCard 
                  key={category.id} 
                  category={category}
                  serviceId={service.id}
                  index={index + serviceIndex * 3}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};