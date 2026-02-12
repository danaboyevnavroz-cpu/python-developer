
import React from 'react';
import { BookOpen, Code, Layers, FastForward, Repeat, FunctionSquare, Cpu, Terminal } from 'lucide-react';

interface Topic {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topics: Topic[] = [
  {
    title: 'Python nima?',
    description: 'Python — bu o‘qish oson va ko‘p qirrali, yuqori darajali dasturlash tili.',
    icon: <BookOpen className="text-cyan-500" size={24} />
  },
  {
    title: 'Sintaksis asoslari',
    description: 'Indentatsiya (bo‘sh joylar) orqali kod bloklarini aniqlash uning asosiy xususiyatidir.',
    icon: <Code className="text-blue-500" size={24} />
  },
  {
    title: 'O‘zgaruvchilar',
    description: 'Ma’lumot turlari: int, float, str, list, dict, set va boshqalar.',
    icon: <Layers className="text-indigo-500" size={24} />
  },
  {
    title: 'Shart operatorlari',
    description: 'if, elif va else yordamida mantiqiy qarorlar qabul qilish.',
    icon: <FastForward className="text-cyan-400" size={24} />
  },
  {
    title: 'Sikllar',
    description: 'for va while sikllari orqali qayta ishlanadigan jarayonlarni boshqarish.',
    icon: <Repeat className="text-blue-400" size={24} />
  },
  {
    title: 'Funksiyalar',
    description: 'def kalit so‘zi yordamida kodni modullarga bo‘lish va qayta ishlatish.',
    icon: <FunctionSquare className="text-indigo-400" size={24} />
  },
  {
    title: 'OOP asoslari',
    description: 'Klasslar va obyektlar yordamida real dunyo modellarini yaratish.',
    icon: <Cpu className="text-cyan-600" size={24} />
  },
  {
    title: 'Django / FastAPI',
    description: 'Veb-tizimlar yaratish uchun eng kuchli va tezkor freymvorklar.',
    icon: <Terminal className="text-blue-600" size={24} />
  }
];

const LearningPython: React.FC = () => {
  return (
    <section id="learning" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold inline-block border-b-4 border-cyan-500 pb-2">
          Python O‘rganish
        </h2>
        <p className="text-slate-400 mt-4">Python dunyosiga ilk qadamni biz bilan qo'ying.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="glass p-6 rounded-3xl group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-900/50 rounded-2xl border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">{topic.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPython;
