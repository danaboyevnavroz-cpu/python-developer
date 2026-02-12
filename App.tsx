
import React from 'react';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import LearningPython from './components/LearningPython';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Background gradients for visual depth - switched to cyan/blue palette */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <Hero />
        <SocialLinks />
        <AboutMe />
        <LearningPython />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
