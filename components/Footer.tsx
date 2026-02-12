
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Python LinkHub
          </span>
          <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Danaboyev Navro'zbek. Barcha huquqlar himoyalangan.
        </p>
        
        <div className="flex justify-center space-x-6 text-sm text-slate-400">
          <a href="#" className="hover:text-cyan-500 transition-colors">Asosiy</a>
          <a href="#about" className="hover:text-cyan-500 transition-colors">Biz haqimizda</a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors">Loyihalar</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
