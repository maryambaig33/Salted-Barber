import { ServiceItem, Barber, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    name: "The Salted Signature Cut",
    description: "Precision haircut, hot towel finish, and straight razor neck shave.",
    price: "$45",
    duration: "45 min"
  },
  {
    id: '2',
    name: "Beard Sculpt & Trim",
    description: "Detailed shaping, beard oil treatment, and hot towel relaxation.",
    price: "$30",
    duration: "30 min"
  },
  {
    id: '3',
    name: "Traditional Hot Shave",
    description: "Straight razor shave with pre-shave oils and soothing aftershave balm.",
    price: "$40",
    duration: "40 min"
  },
  {
    id: '4',
    name: "The Full Service",
    description: "Haircut, beard trim, wash, and style consultation.",
    price: "$70",
    duration: "75 min"
  },
  {
    id: '5',
    name: "Kids' Cut (Under 12)",
    description: "Patient styling for the young gentlemen.",
    price: "$30",
    duration: "30 min"
  },
  {
    id: '6',
    name: "Grey Blending",
    description: "Subtle color treatment to blend grey hair naturally.",
    price: "$35",
    duration: "30 min"
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: "James 'Salty' Miller",
    role: "Master Barber",
    image: "https://picsum.photos/id/1005/400/400"
  },
  {
    id: 'b2',
    name: "Elena 'Blade' Ross",
    role: "Stylist Specialist",
    image: "https://picsum.photos/id/338/400/400"
  },
  {
    id: 'b3',
    name: "Marcus Thorne",
    role: "Beard Expert",
    image: "https://picsum.photos/id/1012/400/400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Arthur D.",
    text: "Best fade in the city. The vibe is unmatched, pure classic barbershop energy.",
    rating: 5
  },
  {
    id: 't2',
    name: "Sam W.",
    text: "Love the hot towel service. James really knows how to handle a beard.",
    rating: 5
  },
  {
    id: 't3',
    name: "Michael P.",
    text: "Great experience. The AI style consultant actually gave me a haircut idea I stuck with!",
    rating: 4
  }
];