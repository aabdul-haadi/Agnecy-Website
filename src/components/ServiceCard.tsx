import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  category: Category;
  serviceId: string;
  index: number;
}

export const ServiceCard = ({ category, serviceId, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
      <div className="glass-card rounded-xl overflow-hidden relative">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={category.image} 
            alt={category.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <category.icon className="w-5 h-5 text-neon-blue" />
              <h3 className="text-xl font-semibold font-display text-white">{category.title}</h3>
            </div>
            <p className="text-gray-300 text-sm line-clamp-2">{category.description}</p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`/services/${serviceId}/${category.id}`}
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors font-medium group/link"
          >
            View Work
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};