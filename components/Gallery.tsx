import React from 'react';
import { BARBERS } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="barbers" className="py-24 bg-salt-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The Masters</h2>
            <p className="text-salt-400">Meet the artisans behind the chair.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BARBERS.map((barber) => (
              <div key={barber.id} className="group relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-salt-800">
                  <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-salt-950 to-transparent pt-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white font-serif">{barber.name}</h3>
                  <p className="text-bronze-400 text-sm uppercase tracking-widest mt-1">{barber.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Gallery Grid */}
        <div>
          <div className="flex justify-between items-end mb-8 border-b border-salt-800 pb-4">
             <h3 className="text-2xl font-serif font-bold text-white">The Cuts</h3>
             <a href="#" className="text-bronze-500 text-sm hover:text-white transition-colors">View Instagram</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            <div className="col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Haircut" />
            </div>
            <div className="overflow-hidden rounded-lg">
               <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Shave" />
            </div>
            <div className="overflow-hidden rounded-lg">
               <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Beard Trim" />
            </div>
            <div className="col-span-1 md:col-span-2 overflow-hidden rounded-lg">
               <img src="https://images.unsplash.com/photo-1593702295094-aea2028b3b68?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Tools" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};