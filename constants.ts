import { ServiceItem, WorkItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'SaaS Development',
    description: 'Scalable, robust, and secure cloud-based software solutions tailored for enterprise growth.',
    icon: 'CloudLightning'
  },
  {
    id: 2,
    title: 'Web Experiences',
    description: 'Award-winning website design and development with immersive interactions and performance.',
    icon: 'Monitor'
  },
  {
    id: 3,
    title: 'Product Design',
    description: 'UI/UX strategy that transforms complex logic into intuitive and beautiful user journeys.',
    icon: 'PenTool'
  },
  {
    id: 4,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that keep users engaged on the go.',
    icon: 'Smartphone'
  }
];

export const WORKS: WorkItem[] = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'SaaS Product',
    image: 'https://picsum.photos/800/600?random=1',
    year: '2023'
  },
  {
    id: 2,
    title: 'Lumina Fashion',
    category: 'E-Commerce',
    image: 'https://picsum.photos/800/600?random=2',
    year: '2024'
  },
  {
    id: 3,
    title: 'Apex Architecture',
    category: 'Portfolio Website',
    image: 'https://picsum.photos/800/600?random=3',
    year: '2023'
  },
  {
    id: 4,
    title: 'HealthPulse',
    category: 'Mobile App',
    image: 'https://picsum.photos/800/600?random=4',
    year: '2024'
  }
];