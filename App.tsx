import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiConsultant } from './components/AiConsultant';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-salt-950 text-salt-100 min-h-screen selection:bg-bronze-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AiConsultant />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;