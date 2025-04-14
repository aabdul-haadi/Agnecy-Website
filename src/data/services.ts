import { Service, Category } from '../types';
import { Code, PenTool, Palette, ShoppingCart, LayoutDashboard, Globe, BookOpen, Megaphone, FileText } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern web solutions built with cutting-edge technology.',
    icon: Code,
    categories: [
      {
        id: 'ecommerce',
        title: 'E-commerce Solutions',
        description: 'Custom online stores that drive sales.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        icon: ShoppingCart
      },
      {
        id: 'saas',
        title: 'SaaS Dashboards',
        description: 'Intuitive interfaces for complex applications.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        icon: LayoutDashboard
      },
      {
        id: 'platform',
        title: 'Web Platforms',
        description: 'Scalable web platforms and applications.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        icon: Globe
      }
    ]
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    description: 'Engaging content that tells your story and drives results.',
    icon: PenTool,
    categories: [
      {
        id: 'blog-writing',
        title: 'Blog Writing',
        description: 'SEO-optimized blog content that ranks.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
        icon: BookOpen
      },
      {
        id: 'marketing-copy',
        title: 'Marketing Copy',
        description: 'Persuasive copy that converts.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        icon: Megaphone
      },
      {
        id: 'technical-writing',
        title: 'Technical Writing',
        description: 'Clear documentation and guides.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        icon: FileText
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visual solutions that capture your brand essence.',
    icon: Palette,
    categories: [
      {
        id: 'brand-identity',
        title: 'Brand Identity',
        description: 'Complete brand identity systems.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
        icon: Palette
      },
      {
        id: 'social-media',
        title: 'Social Media Design',
        description: 'Eye-catching social media content.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
        icon: Palette
      },
      {
        id: 'print-design',
        title: 'Print Design',
        description: 'Professional print materials.',
        image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800',
        icon: Palette
      }
    ]
  }
];