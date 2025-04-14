import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';

export const ProjectsPage = () => {
  const { serviceId, categoryId } = useParams();
  
  const service = services.find(s => s.id === serviceId);
  const category = service?.categories.find(c => c.id === categoryId);
  
  const categoryProjects = projects.filter(project => project.category === categoryId);

  if (!service || !category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-8">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              {category.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              {category.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};