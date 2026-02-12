
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

const projects: Project[] = [
  {
    title: "E-Bozor Backend",
    desc: "Django Rest Framework yordamida yirik savdo tizimi uchun ishlab chiqilgan API xizmati.",
    tags: ["Django", "PostgreSQL", "Redis"],
    img: "https://picsum.photos/seed/backend/400/250"
  },
  {
    title: "AI Image Classifier",
    desc: "Rasmlarni taniy oladigan sun'iy intellekt modeli va uning veb interfeysi.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    img: "https://picsum.photos/seed/ai/400/250"
  },
  {
    title: "Task Management Bot",
    desc: "Jamoa ichida vazifalarni boshqarish va nazorat qilish uchun mukammal Telegram bot.",
    tags: ["Aiogram", "Docker", "MongoDB"],
    img: "https://picsum.photos/seed/bot/400/250"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold inline-block border-b-4 border-cyan-500 pb-2">
          Loyihalarim
        </h2>
        <p className="text-slate-400 mt-4">Men tomonidan amalga oshirilgan eng so'nggi ishlar.</p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="glass rounded-[2rem] overflow-hidden group flex flex-col md:flex-row border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500">
            <div className="md:w-1/3 overflow-hidden">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-cyan-100">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <button className="flex items-center space-x-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                  <Github size={18} />
                  <span>Kod</span>
                </button>
                <button className="flex items-center space-x-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={18} />
                  <span>Ko'rish</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
