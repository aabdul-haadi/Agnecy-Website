import { Project, Service } from './types';
import { Palette, Code, PenTool, WholeWord as WordPress } from 'lucide-react';

export const services: Service[] = [
  {
    title: 'SEO Content Writing',
    description: 'Engaging, SEO-optimized content that ranks and converts.',
    icon: 'Pen',
  },
  {
    title: 'Graphic Design',
    description: 'Creative visual solutions for your brand identity.',
    icon: 'Palette',
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions tailored to your needs.',
    icon: 'WordPress',
  },
  {
    title: 'Front-end Development',
    description: 'Modern, responsive web applications with React.',
    icon: 'Code',
  },
];

export const graphicProjects: Project[] = [
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity including logo, color palette, and guidelines.',
    tools: ['Photoshop', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  },
  // Add more projects as needed
];

export const wordpressProjects: Project[] = [
  {
    title: 'E-commerce Website',
    description: 'Custom WooCommerce solution with advanced features.',
    tools: ['WordPress', 'WooCommerce', 'Custom Theme'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    link: 'https://example.com',
  },
  // Add more projects as needed
];

export const reactProjects: Project[] = [
  {
    title: 'SaaS Dashboard',
    description: 'Modern dashboard with real-time analytics.',
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/example',
    link: 'https://example.com',
  },
  // Add more projects as needed
];