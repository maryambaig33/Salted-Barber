import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-befbb64918d3?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Shop Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-salt-950/70 via-salt-950/50 to-salt-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-bronze-500/50 text-bronze-400 text-xs uppercase tracking-[0.3em] mb-6 bg-salt-950/30 backdrop-blur-sm">
          Est. 2024 • Premium Grooming
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Refining the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-salt-400 italic">Modern Gentleman</span>
        </h1>
        <p className="text-lg md:text-xl text-salt-300 mb-10 max-w-2xl mx-auto font-light">
          Experience the art of traditional barbering fused with contemporary style. 
          Sharp cuts, hot towels, and an atmosphere worth savoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#book">Book Appointment</Button>
          <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            View Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-salt-400">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};