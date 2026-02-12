
import React from 'react';
import { Award, Zap, Users } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold inline-block border-b-4 border-cyan-500 pb-2">
          Men haqimda
        </h2>
      </div>

      <div className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border border-slate-800/50">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full"></div>
        <div className="relative z-10 space-y-8">
          <p className="text-lg text-slate-300 leading-loose">
            Salom! Ismim <b>Navro'zbek</b>, men professional <b>Python dasturchiman</b>. Sohada 3 yillik tajribaga egaman va murakkab backend tizimlarni qurish, sun'iy intellekt integratsiyasi va telegram botlarni ishlab chiqish bo'yicha mutaxassisman. Mening asosiy maqsadim — texnologiyalar orqali odamlarning mushkulini oson qiladigan sifatli yechimlar yaratish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <Award className="text-cyan-500" size={32} />
              <h4 className="font-bold text-slate-100">Tajriba</h4>
              <p className="text-sm text-slate-400">3+ yil professional backend dasturlashda.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Zap className="text-blue-500" size={32} />
              <h4 className="font-bold text-slate-100">Tezkorlik</h4>
              <p className="text-sm text-slate-400">Optimal va yuqori yuklamalarga chidamli kod.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Users className="text-indigo-500" size={32} />
              <h4 className="font-bold text-slate-100">Muloqot</h4>
              <p className="text-sm text-slate-400">Jamoada ishlash va topshiriqlarni aniq bajarish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
