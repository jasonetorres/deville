import type { LucideIcon } from 'lucide-react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

type LinkCard = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  bg: string;
  accent: string;
};

const LINKS: LinkCard[] = [
  {
    icon: Twitter,
    title: 'Follow on X / Twitter',
    subtitle: '@TasonJorres',
    url: 'https://x.com/TasonJorres',
    bg: 'bg-slateblue',
    accent: 'text-amber',
  },
  {
    icon: Github,
    title: 'GitHub Repositories',
    subtitle: 'github.com/jasonetorres',
    url: 'https://github.com/jasonetorres',
    bg: 'bg-rust',
    accent: 'text-cream',
  },
  {
    icon: Linkedin,
    title: 'Connect on LinkedIn',
    subtitle: 'linkedin.com/in/thejasontorres',
    url: 'https://www.linkedin.com/in/thejasontorres/',
    bg: 'bg-slateblue',
    accent: 'text-amber',
  },
  {
    icon: Code2,
    title: 'JetBrains WebStorm',
    subtitle: 'jetbrains.com/webstorm',
    url: 'https://www.jetbrains.com/webstorm/',
    bg: 'bg-amber',
    accent: 'text-ink',
  },
];

function LinkGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 w-full max-w-3xl">
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="paper-card cutout group flex items-center gap-4 p-4 sm:p-5 no-underline"
          >
            <div
              className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 ${link.bg} border-[3px] border-ink rounded-[10px] flex items-center justify-center ${link.accent} transition-transform duration-200 group-hover:rotate-[-6deg] group-hover:scale-110`}
            >
              <Icon size={26} strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-tight tracking-wide">
                {link.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-ink/70 truncate">{link.subtitle}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default LinkGrid;
