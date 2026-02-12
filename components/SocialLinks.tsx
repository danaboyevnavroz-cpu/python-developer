
import React from 'react';
import { Github, Linkedin, Briefcase, Send, Mail } from 'lucide-react';

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<LinkProps> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center space-x-3 w-full max-w-sm py-4 rounded-2xl glass transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group border border-slate-800/50 hover:border-cyan-500/50`}
  >
    <span className={`transition-transform duration-300 group-hover:scale-110 text-cyan-400`}>
      {icon}
    </span>
    <span className="font-semibold text-slate-200">{label}</span>
  </a>
);

const SocialLinks: React.FC = () => {
  const links = [
    { label: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/danaboyev-navroz-cpu' },
    { label: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { label: 'Portfolio', icon: <Briefcase size={20} />, href: '#' },
    { label: 'Telegram', icon: <Send size={20} />, href: '#' },
    { label: 'Email', icon: <Mail size={20} />, href: 'mailto:navrozbek@example.com' },
  ];

  return (
    <section className="flex flex-col items-center space-y-4 px-4">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </section>
  );
};

export default SocialLinks;
