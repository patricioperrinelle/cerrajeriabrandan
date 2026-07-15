export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  color: 'red' | 'yellow';
  icon: string;
  features: string[];
  priceEst: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}
