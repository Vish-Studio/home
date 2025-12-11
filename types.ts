export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface NavLink {
  label: string;
  href: string;
}