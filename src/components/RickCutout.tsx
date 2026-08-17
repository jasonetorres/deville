function RickCutout() {
  return (
    <div className="relative w-full max-w-[360px]">
      <img
        src="/devville-rick-character.webp"
        alt="Rick Astley-inspired paper-cutout singer holding a microphone"
        className="w-full h-auto drop-shadow-[6px_8px_0_rgba(26,23,20,0.35)] animate-sway relative z-10"
      />
      <span
        className="absolute top-2 -right-2 z-20 text-amber animate-float select-none"
        style={{ fontSize: '2.5rem', textShadow: '2px 2px 0 #1A1714' }}
        aria-hidden="true"
      >
        ♪
      </span>
      <span
        className="absolute top-10 -left-3 z-20 text-forest animate-bob select-none"
        style={{ fontSize: '2rem', textShadow: '2px 2px 0 #1A1714' }}
        aria-hidden="true"
      >
        ♫
      </span>
      <span
        className="absolute bottom-16 -right-3 z-20 text-rust animate-float select-none"
        style={{ fontSize: '1.75rem', textShadow: '2px 2px 0 #1A1714', animationDelay: '1s' }}
        aria-hidden="true"
      >
        ♬
      </span>
      <span
        className="absolute bottom-6 -left-2 z-20 text-slateblue animate-bob select-none"
        style={{ fontSize: '2.25rem', textShadow: '2px 2px 0 #1A1714', animationDelay: '0.5s' }}
        aria-hidden="true"
      >
        ♪
      </span>
    </div>
  );
}

export default RickCutout;
