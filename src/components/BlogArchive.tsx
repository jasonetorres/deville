import { ArrowLeft, BookOpen, Clapperboard, Home, Sparkles } from 'lucide-react';

interface BlogArchiveProps {
  onBack: () => void;
  onOpenEpisode1: () => void;
  onOpenEpisode2: () => void;
}

function BlogArchive({ onBack, onOpenEpisode1, onOpenEpisode2 }: BlogArchiveProps) {
  const cards = [
    {
      episode: 'Episode 2',
      title: 'I Accidentally Produced a 30-Minute TV Show for a Conference Talk',
      subtitle:
        '72 slides, ElevenLabs voices, audio cueing, character states, live performance, and the moment Canva told me 50 audio clips was enough.',
      meta: 'Mister Torres’ Neighborhood · Do You Know Your Neighbor?',
      icon: Clapperboard,
      action: onOpenEpisode2,
      tone: 'bg-rust text-cream',
      featured: true,
    },
    {
      episode: 'Episode 1',
      title: 'I Built a 26-Slide Conference Deck with AI',
      subtitle:
        'How Devville started, what repeatedly broke, and the rules I learned for keeping AI from redesigning the entire world.',
      meta: 'The Death and Resurrection of the IDE',
      icon: BookOpen,
      action: onOpenEpisode1,
      tone: 'bg-forest text-cream',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-16">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center gap-10">
        <div className="w-full flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-slateblue hover:bg-slateblue/90 text-cream font-body text-sm font-extrabold rounded-full shadow-paper-sm transition-all active:scale-95"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to the Neighborhood
          </button>

          <div className="hidden sm:inline-flex items-center gap-2 text-rust font-body text-xs font-extrabold uppercase tracking-[0.16em]">
            <Sparkles size={14} />
            Neighborhood Archive
          </div>
        </div>

        <header className="w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-slateblue text-cream font-body text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] px-4 py-2 rounded-full shadow-paper-sm">
            <Home size={14} />
            Mister Torres&apos; Neighborhood
          </div>

          <h1 className="font-display text-5xl sm:text-7xl text-slateblue leading-[0.98] tracking-[-0.03em] mt-5">
            The Neighborhood Archive
          </h1>

          <div className="w-24 h-1.5 rounded-full bg-rust mt-5" />

          <p className="font-body text-lg sm:text-xl text-ink/75 leading-relaxed max-w-2xl mt-5">
            The talks keep getting weirder. This is where I keep the stories behind making them.
          </p>
        </header>

        <section className="w-full grid grid-cols-1 gap-6">
          {cards.map(({ episode, title, subtitle, meta, icon: Icon, action, tone, featured }) => (
            <button
              key={episode}
              onClick={action}
              className={
                'paper-card text-left p-6 sm:p-8 group overflow-hidden ' +
                (featured ? 'sm:p-10' : '')
              }
            >
              <div className="absolute inset-y-0 left-0 w-2 bg-rust/80" />
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className={'w-14 h-14 rounded-full flex items-center justify-center shadow-paper-sm shrink-0 ' + tone}>
                  <Icon size={25} />
                </div>

                <div className="min-w-0">
                  <p className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-rust">
                    {episode}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-slateblue leading-tight mt-1 group-hover:text-rust transition-colors">
                    {title}
                  </h2>
                  <p className="font-body text-lg text-ink/75 leading-relaxed mt-3 max-w-3xl">
                    {subtitle}
                  </p>
                  <p className="font-mono text-xs text-ink/55 mt-4">{meta}</p>
                </div>
              </div>
            </button>
          ))}
        </section>

        <footer className="w-full max-w-3xl text-center pt-4">
          <div className="h-[3px] w-full max-w-md mx-auto stitched-rule mb-6 opacity-70" />
          <p className="font-display text-2xl sm:text-3xl text-slateblue">
            Every episode leaves something behind.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default BlogArchive;
