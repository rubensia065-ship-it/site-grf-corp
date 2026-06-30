export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  difficulty: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  deliveryTime: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}
