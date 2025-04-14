import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden neon-glow"
    >
      <div className="relative aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold font-display mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map(tool => (
            <span 
              key={tool}
              className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.link && (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
            >
              <Github size={16} />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};