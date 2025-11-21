export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}