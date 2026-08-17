import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Terminal, Volume2, VolumeX } from 'lucide-react';
import { ansiToHtml } from '@/lib/ansiToHtml';

const ART_LINES = [
  '\x1b[1;36mJSON ASCII\x1b[0m \x1b[1;90m— embedded on the site\x1b[0m',
  '',
  '\x1b[1;33m  _ ____   ____  _  _ \x1b[0m',
  '\x1b[1;33m | / ___| / __ \\| \\| |\x1b[0m',
  '\x1b[1;33m | \\___ \\| |  | || . ` |\x1b[0m',
  '\x1b[1;32m_| |___) | |__| || |\\  |\x1b[0m',
  '\x1b[1;32m\\__/|____/ \\____/ |_| \\_|\x1b[0m',
  '',
  '\x1b[1;32m▶\x1b[0m \x1b[1;33mNOW PLAYING:\x1b[0m Never Gonna Give You Up — Rick Astley',
  '\x1b[1;90m  (press PLAY if your browser blocks autoplay)\x1b[0m',
  '',
];
const LYRICS = [
  '  ♪ Never gonna give you up',
  '  ♪ Never gonna let you down',
  '  ♪ Never gonna run around and desert you',
  '  ♪ Never gonna make you cry',
  '  ♪ Never gonna say goodbye',
  '  ♪ Never gonna tell a lie and hurt you',
];

const LYRIC_COLORS = [36, 33, 32, 31, 35, 34];
const STATUS_LINE = '\x1b[1;90m  > status: Complete ✓\x1b[0m';
const PROMPT = '\x1b[1;36m$\x1b[0m ./Contact --play';
const TOTAL_LINES = ART_LINES.length + LYRICS.length + 2;

const YT_ID = 'dQw4w9WgXcQ';

function buildYouTubeEmbedUrl({ autoplay, muted }: { autoplay: boolean; muted: boolean }) {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: '0',
    disablekb: '1',
    fs: '0',
    modestbranding: '1',
    playsinline: '1',
    rel: '0',
    loop: '1',
    playlist: YT_ID,
    mute: muted ? '1' : '0',
  });
  return `https://www.youtube-nocookie.com/embed/${YT_ID}?${params.toString()}`;
}

function getLine(index: number, colorCycle: number): string {
  if (index < ART_LINES.length) return ART_LINES[index];
  const lyricIdx = index - ART_LINES.length;
  if (lyricIdx < LYRICS.length) {
    const colorCode = LYRIC_COLORS[(colorCycle + lyricIdx) % LYRIC_COLORS.length];
    return `\x1b[1;${colorCode}m${LYRICS[lyricIdx]}\x1b[0m`;
  }
  if (lyricIdx === LYRICS.length) return '';
  return STATUS_LINE;
}

function AnsiTerminal() {
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [revealedLines, setRevealedLines] = useState(0);
  const [colorCycle, setColorCycle] = useState(0);
  const [audioOn, setAudioOn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeNonce, setIframeNonce] = useState(0);

  const embedUrl = useMemo(() => {
    if (!playing) return '';
    return buildYouTubeEmbedUrl({ autoplay: true, muted: !audioOn });
  }, [playing, audioOn, iframeNonce]);

  useEffect(() => {
    setIframeLoaded(false);
  }, [embedUrl]);

  useEffect(() => {
    const storedAudioOn = localStorage.getItem('devville-audio-on');
    if (storedAudioOn === '1') setAudioOn(true);

    setPlaying(true);
    setHasStarted(true);
    setIframeNonce((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!playing || revealedLines >= TOTAL_LINES) return;
    const isArt = revealedLines < ART_LINES.length;
    const isLyric = revealedLines >= ART_LINES.length && revealedLines < ART_LINES.length + LYRICS.length;
    const delay = isArt ? 80 : isLyric ? 400 : 200;
    const timer = setTimeout(() => setRevealedLines((r) => r + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, revealedLines]);

  useEffect(() => {
    if (!playing || revealedLines < TOTAL_LINES) return;
    const interval = setInterval(() => setColorCycle((c) => c + 1), 500);
    return () => clearInterval(interval);
  }, [playing, revealedLines]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [revealedLines, colorCycle]);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    setHasStarted(true);
    setIframeNonce((n) => n + 1);
  }, []);

  const handlePause = useCallback(() => {
    setPlaying(false);
  }, []);

  const handleReplay = useCallback(() => {
    setRevealedLines(0);
    setColorCycle(0);
    setPlaying(true);
    setHasStarted(true);
    setIframeNonce((n) => n + 1);
  }, []);

  const toggleAudio = useCallback(() => {
    setAudioOn((prev) => !prev);
    if (playing) setIframeNonce((n) => n + 1);
  }, [playing]);

  useEffect(() => {
    localStorage.setItem('devville-audio-on', audioOn ? '1' : '0');
  }, [audioOn]);

  const lines: string[] = [PROMPT];
  if (hasStarted) {
    for (let i = 0; i < revealedLines && i < TOTAL_LINES; i++) {
      lines.push(getLine(i, colorCycle));
    }
  } else {
    lines.push('\x1b[1;90m  [press PLAY to begin the rick roll]\x1b[0m');
  }
  if (hasStarted && playing && !audioOn) {
    lines.push('\x1b[1;90m  [autoplaying muted — click the speaker to unmute]\x1b[0m');
  }
  const content = lines.join('\n');
  const isFinished = hasStarted && revealedLines >= TOTAL_LINES;
  const showOverlay = !playing;

  return (
    <div className="paper-card cutout overflow-hidden w-full max-w-[640px] relative">
      <div className="flex items-center justify-between bg-terminal-bg px-4 py-2.5 border-b-[3px] border-ink">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rust border border-ink" />
            <span className="w-3 h-3 rounded-full bg-amber border border-ink" />
            <span className="w-3 h-3 rounded-full bg-forest border border-ink" />
          </div>
          <span className="flex items-center gap-1.5 text-terminal-cyan font-mono text-xs sm:text-sm font-bold ml-1">
            <Terminal size={14} />
            howto: ~/contactme
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleAudio}
            className="flex items-center justify-center w-7 h-7 rounded border border-terminal-dim hover:border-amber text-terminal-green hover:text-amber transition-colors"
            aria-label={audioOn ? 'Mute audio' : 'Unmute audio'}
            title={audioOn ? 'Mute audio' : 'Unmute audio'}
          >
            {audioOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
          {playing ? (
            <button
              onClick={handlePause}
              className="flex items-center gap-1 font-mono text-xs font-bold text-terminal-green hover:text-amber transition-colors px-2 py-1 rounded border border-terminal-dim hover:border-amber"
            >
              <Pause size={12} /> PAUSE
            </button>
          ) : (
            <button
              onClick={isFinished ? handleReplay : handlePlay}
              className="flex items-center gap-1 font-mono text-xs font-bold text-terminal-green hover:text-amber transition-colors px-2 py-1 rounded border border-terminal-dim hover:border-amber"
            >
              {isFinished ? <RotateCcw size={12} /> : <Play size={12} />} {isFinished ? 'REPLAY' : 'PLAY'}
            </button>
          )}
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="bg-terminal-bg p-4 sm:p-5 font-mono text-[8px] sm:text-xs leading-tight overflow-x-auto overflow-y-hidden ansi-terminal-body"
          style={{ minHeight: '340px', maxHeight: '340px' }}
        >
          <pre className="whitespace-pre m-0" dangerouslySetInnerHTML={{ __html: ansiToHtml(content) }} />
          <span className="cursor-blink">▌</span>
        </div>

        {showOverlay && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-terminal-bg/70 backdrop-blur-[2px]">
            <button
              onClick={isFinished ? handleReplay : handlePlay}
              className="flex items-center gap-2 bg-forest text-amber font-display text-lg tracking-wide px-6 py-3 border-[3px] border-ink rounded-[6px] shadow-paper hover:shadow-paper-lift transition-all hover:-translate-x-1 hover:-translate-y-1"
            >
              {isFinished ? (
                <>
                  <RotateCcw size={20} /> REPLAY
                </>
              ) : (
                <>
                  <Play size={20} fill="currentColor" /> {hasStarted ? 'RESUME' : 'PLAY RICK ROLL'}
                </>
              )}
            </button>
            {playing && !iframeLoaded && (
              <span className="font-mono text-[10px] text-terminal-dim animate-pulse">loading audio...</span>
            )}
          </div>
        )}
      </div>

      <div className="h-1.5 bg-terminal-bg border-t-[3px] border-ink">
        <div
          className="h-full bg-terminal-green transition-all duration-200"
          style={{ width: `${(revealedLines / TOTAL_LINES) * 100}%` }}
        />
      </div>

      <div
        className="absolute opacity-0 pointer-events-none overflow-hidden"
        style={{ width: 1, height: 1, left: -9999, top: -9999 }}
        aria-hidden="true"
      >
        {embedUrl ? (
          <iframe
            key={embedUrl}
            src={embedUrl}
            title="rickroll-audio"
            width="200"
            height="100"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setIframeLoaded(true)}
          />
        ) : null}
      </div>
    </div>
  );
}

export default AnsiTerminal;
