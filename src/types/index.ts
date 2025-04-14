import { DivideIcon as LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
  github?: string;
  category: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  categories: Category[];
};