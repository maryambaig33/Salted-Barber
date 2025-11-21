import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-salt-950 pt-24 border-t border-salt-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking & Newsletter */}
          <div id="book">
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Ready for the Chair?</h3>
            <p className="text-salt-400 mb-8">
              Walk-ins are welcome, but appointments are preferred. Secure your spot today.
            </p>
            <form className="space-y-4 bg-salt-900 p-8 rounded-2xl border border-salt-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-salt-500 uppercase tracking-wide mb-2">Name</label>
                  <input type="text" className="w-full bg-salt-950 border border-salt-700 rounded-lg p-3 text-white focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-salt-500 uppercase tracking-wide mb-2">Phone</label>
                  <input type="tel" className="w-full bg-salt-950 border border-salt-700 rounded-lg p-3 text-white focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none" />
                </div>
              </div>
              <div>
                 <label className="block text-xs text-salt-500 uppercase tracking-wide mb-2">Service</label>
                 <select className="w-full bg-salt-950 border border-salt-700 rounded-lg p-3 text-white focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none">
                   <option>Select a service...</option>
                   <option>Signature Cut</option>
                   <option>Beard Trim</option>
                   <option>Hot Shave</option>
                   <option>Full Service</option>
                 </select>
              </div>
              <Button fullWidth>Request Appointment</Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-salt-800 pb-2 inline-block">Location</h4>
                <ul className="space-y-4 text-salt-400">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-bronze-500 flex-shrink-0 mt-1" />
                    <span>
                      128 Grooming Blvd<br />
                      Salt Lake City, UT 84111
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-bronze-500 flex-shrink-0" />
                    <span>(555) 123-4567</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-salt-800 pb-2 inline-block">Hours</h4>
                <ul className="space-y-4 text-salt-400">
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-bronze-500 flex-shrink-0" />
                    <div>
                      <p className="flex justify-between w-32"><span className="text-salt-500">Tue - Fri</span> <span>10am - 7pm</span></p>
                      <p className="flex justify-between w-32"><span className="text-salt-500">Saturday</span> <span>9am - 5pm</span></p>
                      <p className="flex justify-between w-32"><span className="text-salt-500">Sun - Mon</span> <span>Closed</span></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-salt-900 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex space-x-6">
                <a href="#" className="text-salt-500 hover:text-bronze-500 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-salt-500 hover:text-bronze-500 transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-salt-500 hover:text-bronze-500 transition-colors"><Twitter className="w-6 h-6" /></a>
              </div>
              <p className="text-salt-600 text-sm">
                © 2024 The Salted Barber. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};