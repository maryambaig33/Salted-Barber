import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-salt-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-bronze-600 mx-auto"></div>
          <p className="mt-4 text-salt-400">Precision cuts, classic shaves, and premium treatments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 border border-salt-800 bg-gradient-to-br from-salt-900 to-salt-950 hover:border-bronze-700 transition-all duration-300 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-bronze-600/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-white font-serif tracking-wide">{service.name}</h3>
                <span className="text-bronze-500 font-bold text-lg">{service.price}</span>
              </div>
              
              <p className="text-salt-400 text-sm mb-6 leading-relaxed h-12">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-salt-800 pt-4 mt-auto">
                <span className="text-xs text-salt-500 uppercase tracking-wider">Duration</span>
                <span className="text-sm text-salt-300 flex items-center gap-1">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};