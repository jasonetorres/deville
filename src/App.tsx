import RickCutout from '@/components/RickCutout';
import AnsiTerminal from '@/components/AnsiTerminal';
import LinkGrid from '@/components/LinkGrid';
import RubberDuck from '@/components/RubberDuck';
import { Copyright, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [connected, setConnected] = useState(false);
  const [showRick, setShowRick] = useState(false);

  const handleTerminalStart = useCallback(() => {
    setConnected(true);
  }, []);

  useEffect(() => {
    if (!connected) {
      setShowRick(false);
      return;
    }

    const timer = window.setTimeout(() => setShowRick(true), 450);
    return () => window.clearTimeout(timer);
  }, [connected]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center gap-12 sm:gap-16">
        {/* HEADER */}
        <header className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full">
          <div className="inline-flex items-center gap-2 bg-rust text-cream font-mono text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 border-[3px] border-ink rounded-full shadow-paper-sm rotate-[-1.5deg]">
            <Sparkles size={14} className="text-amber" />
            Devville Surprise Repository
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-wide max-w-3xl">
            Never Gonna Give Your{' '}
            <span className="text-forest text-stroke-ink">IDE</span>{' '}
            Up!
          </h1>
          <p className="font-body text-xl sm:text-2xl text-ink/80 max-w-xl">
            You've been vibe-coded.
          </p>
        </header>

        {/* HERO */}
        <section className="w-full flex flex-col items-center gap-8 sm:gap-10">
          <div
            className={
              'w-full grid grid-cols-1 items-center justify-items-center gap-8 transition-all duration-700 ease-out ' +
              (connected ? 'lg:grid-cols-2 lg:gap-10 lg:items-center' : '')
            }
          >
            <div
              className={
                'flex justify-center w-full transition-all duration-700 ease-out ' +
                (showRick
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 translate-y-4 scale-[0.9] pointer-events-none')
              }
              style={{ maxHeight: showRick ? 760 : 0, overflow: 'hidden' }}
            >
              <RickCutout />
            </div>

            <div
              className={
                'w-full flex justify-center transition-all duration-700 ease-out ' +
                (connected ? 'lg:justify-end' : '')
              }
            >
              <div className="w-full flex justify-center max-w-[640px] lg:max-w-[560px]">
                <AnsiTerminal onStart={handleTerminalStart} />
              </div>
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-display text-3xl sm:text-4xl text-slateblue text-stroke-ink tracking-wide">
            Find Me Around Devville
          </h2>
          <LinkGrid />
        </section>

        {/* FOOTER */}
        <footer className="relative w-full max-w-3xl paper-card cutout p-6 sm:p-8 mt-4">
          <p className="font-body text-lg sm:text-xl text-ink text-center leading-relaxed max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center gap-2">
              <Copyright size={18} strokeWidth={2.5} className="text-ink" aria-hidden="true" />
              Jason Torres 2026
            </span>
          </p>
          <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2">
            <RubberDuck />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
