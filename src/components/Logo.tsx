import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sparkles className="w-8 h-8 text-neon-blue animate-pulse-slow" />
      <span className="text-2xl font-bold font-display gradient-text animate-gradient-text">
        Nova
      </span>
    </motion.div>
  );
};