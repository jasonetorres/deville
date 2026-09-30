import BlogPost from '@/components/BlogPost';
import RickCutout from '@/components/RickCutout';
import AnsiTerminal from '@/components/AnsiTerminal';
import LinkGrid from '@/components/LinkGrid';
import { Heart, Home, MailOpen } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>(() => {
    return window.location.hash === '#blog' ? 'blog' : 'home';
  });
  const [connected, setConnected] = useState(false);
  const [showRick, setShowRick] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const isBlog = window.location.hash === '#blog';
      setCurrentPage(isBlog ? 'blog' : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToBlog = useCallback(() => {
    window.location.hash = '#blog';
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToHome = useCallback(() => {
    if (window.location.hash === '#blog') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleTerminalStart = useCallback(() => {
    setConnected(true);
  }, []);

  useEffect(() => {
    if (!connected) {
      setShowRick(false);
      return;
    }

    const timer = window.setTimeout(() => setShowRick(true), 500);
    return () => window.clearTimeout(timer);
  }, [connected]);

  if (currentPage === 'blog') {
    return <BlogPost onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 flex flex-col items-center gap-10 sm:gap-14">
        <header className="w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slateblue text-cream font-body text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase px-4 py-2 shadow-paper-sm">
            <Home size={14} aria-hidden="true" />
            Mister Torres&apos; Neighborhood · Episode 2
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] text-slateblue leading-[0.98] mt-5 tracking-[-0.03em]">
            Welcome, neighbor.
          </h1>

          <div className="w-24 h-1.5 rounded-full bg-rust mt-5" />

          <p className="font-body text-lg sm:text-xl text-ink/75 max-w-2xl mt-5 leading-relaxed">
            You found the little corner of the neighborhood from Episode 2.
            There&apos;s one more thing I wanted to show you before you go.
          </p>
        </header>

        <section className="w-full max-w-4xl">
          <div className="wood-frame rounded-[28px] p-3 sm:p-4 lg:p-5">
            <div className="tv-screen rounded-[20px] sm:rounded-[22px] px-4 py-6 sm:p-8 lg:p-10 min-h-[460px] flex flex-col justify-center">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-2 text-amber-light font-body text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em]">
                  <MailOpen size={16} aria-hidden="true" />
                  Picture Picture has a message
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-cream mt-2">
                  I brought you something.
                </h2>
                {!connected && (
                  <p className="text-cream/70 font-body text-sm sm:text-base max-w-lg mt-2">
                    Open today&apos;s delivery. No metrics. No dashboards. Definitely nothing suspicious.
                  </p>
                )}
              </div>

              <div
                className={
                  'w-full grid grid-cols-1 items-center justify-items-center gap-7 transition-all duration-700 ease-out ' +
                  (connected ? 'lg:grid-cols-[0.75fr_1.25fr] lg:gap-8' : '')
                }
              >
                <div
                  className={
                    'flex justify-center w-full transition-all duration-700 ease-out ' +
                    (showRick
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                      : 'opacity-0 translate-y-4 scale-[0.92] pointer-events-none')
                  }
                  style={{ maxHeight: showRick ? 680 : 0, overflow: 'hidden' }}
                >
                  <RickCutout />
                </div>

                <div className="w-full flex justify-center">
                  <div className="w-full max-w-[640px]">
                    <AnsiTerminal onStart={handleTerminalStart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {connected && (
          <section className="flex flex-col items-center gap-7 w-full">
            <div className="text-center">
              <p className="font-body font-extrabold uppercase tracking-[0.16em] text-rust text-xs">
                Stay awhile
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue mt-1">
                Around the Neighborhood
              </h2>
            </div>
            <LinkGrid onOpenBlog={navigateToBlog} />
          </section>
        )}

        <footer className="w-full max-w-3xl text-center pt-2 pb-6">
          <div className="h-[3px] w-full max-w-md mx-auto stitched-rule mb-6 opacity-70" />
          <p className="font-display text-2xl sm:text-3xl text-slateblue">
            Won&apos;t you be my neighbor?
          </p>
          <p className="font-body text-sm text-ink/60 mt-2 inline-flex items-center gap-1.5">
            Made with <Heart size={14} fill="currentColor" className="text-rust" aria-hidden="true" /> by Jason Torres · 2026
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
