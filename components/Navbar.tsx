import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Barbers', href: '#barbers' },
    { name: 'Consultant', href: '#ai-consultant' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-salt-950/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <Scissors className="h-8 w-8 text-bronze-500 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-2xl font-serif font-bold text-white tracking-wider">
                SALTED<span className="text-bronze-500">BARBER</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-salt-300 hover:text-bronze-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="px-5 py-2 bg-bronze-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-bronze-500 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-salt-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-salt-900 absolute w-full border-t border-salt-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-salt-300 hover:text-white hover:bg-salt-800 text-center uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 bg-bronze-600 text-white text-base font-bold uppercase hover:bg-bronze-500 mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};