import type { LucideIcon } from 'lucide-react';
import { BookOpen, Code2, Github, Linkedin, Twitter } from 'lucide-react';

type LinkCard = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  tone: string;
  onClick?: (e: React.MouseEvent, onOpenBlog?: () => void) => void;
};

const LINKS: LinkCard[] = [
  {
    icon: BookOpen,
    title: 'Neighborhood Archive',
    subtitle: 'The stories behind Episodes 1 and 2',
    url: '#archive',
    tone: 'bg-forest text-cream',
    onClick: (e, onOpenBlog) => {
      e.preventDefault();
      if (onOpenBlog) {
        onOpenBlog();
      } else {
        window.location.hash = '#archive';
      }
    },
  },
  {
    icon: Twitter,
    title: 'Say hello on X',
    subtitle: '@TasonJorres',
    url: 'https://x.com/TasonJorres',
    tone: 'bg-slateblue text-cream',
  },
  {
    icon: Github,
    title: 'Visit GitHub',
    subtitle: 'github.com/jasonetorres',
    url: 'https://github.com/jasonetorres',
    tone: 'bg-rust text-cream',
  },
  {
    icon: Linkedin,
    title: 'Connect on LinkedIn',
    subtitle: 'linkedin.com/in/thejasontorres',
    url: 'https://www.linkedin.com/in/thejasontorres/',
    tone: 'bg-slateblue text-cream',
  },
  {
    icon: Code2,
    title: 'WebStorm',
    subtitle: 'jetbrains.com/webstorm',
    url: 'https://www.jetbrains.com/webstorm/',
    tone: 'bg-amber text-ink',
  },
];

interface LinkGridProps {
  onOpenBlog?: () => void;
}

function LinkGrid({ onOpenBlog }: LinkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-4xl">
      {LINKS.map((link, index) => {
        const Icon = link.icon;
        const isInternal = Boolean(link.onClick);
        const lastIsOdd = index === LINKS.length - 1 && LINKS.length % 2 === 1;

        return (
          <a
            key={link.title}
            href={link.url}
            target={isInternal ? undefined : '_blank'}
            rel={isInternal ? undefined : 'noopener noreferrer'}
            onClick={link.onClick ? (e) => link.onClick?.(e, onOpenBlog) : undefined}
            className={
              'paper-card group flex items-center gap-4 p-4 sm:p-5 no-underline cursor-pointer overflow-hidden ' +
              (lastIsOdd ? 'sm:col-span-2 sm:max-w-[calc(50%-0.625rem)] sm:w-full sm:justify-self-center' : '')
            }
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-rust/75" aria-hidden="true" />

            <div
              className={'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-paper-sm transition-transform duration-200 group-hover:scale-105 ' + link.tone}
            >
              <Icon size={23} strokeWidth={2.2} />
            </div>

            <div className="min-w-0 pr-2">
              <h3 className="font-display text-xl sm:text-2xl text-slateblue leading-tight">
                {link.title}
              </h3>
              <p className="font-body text-sm text-ink/65 truncate mt-0.5">{link.subtitle}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default LinkGrid;
