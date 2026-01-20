export interface Article {
  id: string;
  category: string;
  color: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  link?: string;
}

export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
  theme: 'light' | 'dark' | 'glass';
}

export interface PortfolioStat {
  value: string;
  label: string;
  sub?: string;
}
