
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-8 pt-12">
      {/* Logotip konteyneri - Rasmiy Python logotipi bilan */}
      <div className="relative group flex items-center justify-center">
        {/* Orqa fondagi dinamik nurli halqa - Ko'k va Sariq (Rasmiy ranglar) */}
        <div className="absolute -inset-6 bg-gradient-to-tr from-[#3776ab]/40 via-transparent to-[#ffd343]/30 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Asosiy logotip ramkasi */}
        <div className="relative p-1 bg-gradient-to-br from-[#3776ab] via-slate-700 to-[#ffd343] rounded-full shadow-[0_0_40px_rgba(55,118,171,0.3)] group-hover:shadow-[0_0_60px_rgba(255,211,67,0.4)] transition-all duration-500">
          <div className="bg-slate-900 rounded-full p-4 overflow-hidden flex items-center justify-center w-36 h-36 md:w-44 md:h-44">
            <img 
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" 
              alt="Official Python Logo" 
              className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Agar GitHub linki ishlamasa, muqobil link
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg";
              }}
            />
          </div>
        </div>

        {/* Nozik porlash effekti */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Ism va Sarlavha */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
          Professional Portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400 font-black">
            Danaboyev Navro'zbek
          </span>
        </h1>
        
        <div className="flex items-center justify-center space-x-3">
          <div className="h-[1px] w-8 bg-[#3776ab]/50"></div>
          <p className="text-xl md:text-3xl font-light text-slate-300 tracking-wide uppercase">
            Python <span className="text-[#3776ab] font-bold">Dasturchi</span>
          </p>
          <div className="h-[1px] w-8 bg-[#ffd343]/50"></div>
        </div>
      </div>

      {/* Tagline */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3776ab] to-[#ffd343] rounded-full"></div>
        <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed pl-6 py-2 bg-gradient-to-r from-blue-500/5 to-transparent rounded-r-2xl italic font-light">
          “Python bilan kuchli, samarali va xavfsiz tizimlar yaratish — mening oliy maqsadim.”
        </p>
      </div>

      {/* Pastga ishora (Scroll Indicator) */}
      <div className="pt-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#ffd343] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
