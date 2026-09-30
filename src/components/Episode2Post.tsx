import {
  ArrowLeft,
  AudioLines,
  Calendar,
  Clapperboard,
  Clock,
  Film,
  Mic2,
  MonitorPlay,
  Play,
  Sparkles,
  TimerReset,
  Users,
  WandSparkles,
} from 'lucide-react';

interface Episode2PostProps {
  onBack: () => void;
}

function Episode2Post({ onBack }: Episode2PostProps) {
  const productionStack = [
    ['72 slides', 'Not really slides anymore — scenes, reactions, transitions, cue points, and visual beats.'],
    ['ElevenLabs', 'Character voices for King KPI, Dev, the Mail Carrier, Picture Picture, and the rest of the neighborhood.'],
    ['Canva', 'The live show deck — right up until the audio architecture started fighting back.'],
    ['Video assets', 'Pre-rendered sequences for moments that were too fragile to build as separate live elements.'],
    ['Live performance', 'Me walking, talking, reacting, waiting, and trying not to step on a prerecorded character.'],
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center gap-8 sm:gap-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-slateblue hover:bg-slateblue/90 text-cream font-body text-sm font-extrabold rounded-full shadow-paper-sm transition-all active:scale-95"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to the Archive
          </button>

          <div className="inline-flex items-center gap-2 bg-forest text-cream font-body text-[11px] sm:text-xs font-extrabold tracking-[0.14em] uppercase px-4 py-2 rounded-full shadow-paper-sm">
            <Sparkles size={14} className="text-amber" />
            Neighborhood Archive • Episode 2
          </div>
        </div>

        <header className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full">
          <div className="inline-flex items-center gap-2 bg-rust text-cream font-body text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-paper-sm">
            <Clapperboard size={15} className="text-amber" />
            From Mister Torres’ Notebook
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-slateblue leading-[1.02] tracking-[-0.03em] max-w-3xl">
            I Accidentally Produced a 30-Minute TV Show for a Conference Talk
          </h1>

          <p className="font-body text-xl sm:text-2xl text-ink/80 max-w-2xl leading-relaxed">
            72 slides, ElevenLabs voices, audio cueing, character states, live performance, and one
            very annoying Canva limit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-ink/70 font-mono text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-rust" />
              September 2026
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} className="text-slateblue" />
              Making of Episode 2
            </span>
            <span>•</span>
            <span className="font-bold text-ink">By Jason Torres</span>
          </div>
        </header>

        <div className="w-full max-w-3xl wood-frame rounded-[22px] p-2.5 sm:p-3">
          <div className="bg-cream rounded-[16px] px-5 py-6 sm:px-8 sm:py-8 text-center">
            <p className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-rust">
              The moment the project changed
            </p>
            <p className="font-display text-3xl sm:text-4xl text-slateblue mt-1">
              At some point, this stopped being a slide deck problem.
            </p>
          </div>
        </div>

        <article className="w-full flex flex-col gap-10 sm:gap-14">
          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <p className="font-body text-2xl sm:text-3xl text-ink leading-snug font-bold">
              I started with a pretty simple idea: what if I gave a conference talk that felt like
              Mister Rogers&apos; Neighborhood?
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Not a parody slide. Not a five-minute bit. I wanted the whole thing to feel like an
              episode. Walk into the room. Greet the audience. Visit another place. Meet characters.
              Come home. End somewhere quieter than where we started.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That sounds adorable when you say it quickly.
            </p>

            <div className="bg-rust/10 border-l-4 border-rust p-5 rounded-r-[12px]">
              <p className="font-display text-2xl sm:text-3xl text-slateblue">
                Then the cute little idea turned into 72 slides.
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Except calling them slides is misleading. Some were backgrounds. Some were a single
              reaction from King KPI. Some existed so Picture Picture could look sullen for exactly
              one beat. Some were transition frames. Some were audio cue points. Some were there only
              because a character needed to finish a sentence before I walked to the other side of
              the stage.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed font-bold text-rust">
              I had not made a presentation. I had made a show file.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <Film size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                The Deck Became a Production System
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Episode 1 taught me to build the world first, lock the characters, and stop asking AI
              to invent everything on every slide. Episode 2 took that lesson and made it much more
              annoying: now the characters had to perform.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {productionStack.map(([title, body]) => (
                <div key={title} className="bg-cream border border-wood-dark/20 rounded-[14px] p-5">
                  <h3 className="font-display text-2xl text-slateblue">{title}</h3>
                  <p className="font-body text-base sm:text-lg text-ink/75 mt-1 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Once I had Mister Torres, King KPI, Dev, the Mail Carrier, Picture Picture, the Trolley,
              the house, and the Neighborhood of Make-Believe, every change started touching more than
              one thing. A rewritten line could mean a new voice generation. A longer audio clip
              could change the cue timing. A new reaction could require another visual state. A
              transition could suddenly need another slide just so the pacing did not feel rushed.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <Mic2 size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                Then Everyone Needed a Voice
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              A visual character can be a little wrong and you can sometimes get away with it. A voice
              cannot. If King KPI sounds regal in one scene and like a children's cereal mascot in
              the next, the character falls apart immediately.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              So I used ElevenLabs to build voices for the cast, and that introduced a whole new type
              of continuity problem. I was no longer just keeping a face and costume consistent. I was
              keeping cadence, tone, energy, pronunciation, pauses, and emotional state consistent.
            </p>

            <div className="bg-slateblue text-cream rounded-[16px] p-6 sm:p-8 shadow-paper">
              <div className="flex items-center gap-2 text-amber-light font-body text-xs font-extrabold uppercase tracking-[0.16em]">
                <AudioLines size={17} />
                Audio direction became character direction
              </div>
              <p className="font-body text-xl sm:text-2xl leading-relaxed mt-3">
                “Thoughtful” is not the same as “slow.” “Confused” is not the same as “stupid.”
                “Cheerful mail carrier” is not the same as “children’s cartoon announcer.”
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              The voice prompts had to become as specific as the image prompts. And once I had a read
              I liked, I treated it as canon. Regenerating a line was no longer harmless because now
              I had to ask whether the new take still belonged to the same person.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <TimerReset size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                Audio Is Not Decoration. Audio Is the Timeline.
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              This was probably the biggest change in how I had to think about the deck. In a normal
              presentation, I control the pace. I talk. I click. I talk some more. If I take an extra
              second, nobody cares.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              In Episode 2, prerecorded characters are talking back to me. That means the deck has
              timing. I cannot casually click through King KPI because I know what he is going to say
              next and the audience does not. I need to give him room. I need to react. I need to let
              the laugh happen if there is one. Then I need to move before the energy dies.
            </p>

            <div className="bg-amber/20 border-l-4 border-amber p-5 rounded-r-[12px]">
              <p className="font-display text-2xl text-slateblue">The cue was not:</p>
              <p className="font-mono text-base sm:text-lg text-ink mt-2">NEXT SLIDE</p>
              <p className="font-display text-2xl text-slateblue mt-4">The cue became:</p>
              <p className="font-mono text-base sm:text-lg text-ink mt-2">
                KING FINISHES → HOLD → REACT → AUDIENCE BEAT → ADVANCE
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That sounds obvious after the fact. It was not obvious while building it. I had to stop
              thinking like someone making slides and start thinking like someone calling cues.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <MonitorPlay size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                Did You Know Canva Only Allows 50 Audio Clips?
              </h2>
            </div>

            <p className="font-body text-2xl sm:text-3xl text-ink leading-snug font-bold">
              Because I do now.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Somewhere in the middle of assembling a 72-slide show full of dialogue, chimes, music,
              transitions, and character moments, Canva decided I had enough audio.
            </p>

            <div className="bg-rust text-cream rounded-[16px] p-6 sm:p-8 shadow-paper">
              <p className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-amber-light">
                Production math
              </p>
              <p className="font-display text-5xl sm:text-6xl mt-2">72 slides</p>
              <p className="font-display text-3xl sm:text-4xl mt-1">50 audio clips</p>
              <p className="font-body text-lg sm:text-xl mt-4 text-cream/85">
                This is where the presentation software politely informs you that you are not making
                a presentation anymore.
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That forced an architectural decision. Not every beat could remain a separate live audio
              element. Some sequences needed to become self-contained assets. If a visual and a voice
              had to stay perfectly married anyway, baking them together into video made the show more
              reliable and freed up the deck from having to orchestrate every tiny piece independently.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              This is the kind of constraint that sounds stupid until it improves the system. It made
              me identify which moments genuinely needed live control and which moments were better as
              deterministic playback.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <Users size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                Picture Picture Became an Actor
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              This happened to almost every recurring element in the show. Picture Picture started as
              a screen. Then Picture Picture needed an idle state. Then a loading state. Then a sullen
              state when he could answer Kubernetes questions but could not tell me anything about
              the people in the room. Then, because apparently I have no self-control, a sleepy state.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              King KPI needed the same treatment. Delighted. Celebrating. Confused. Uncomfortable.
              Thoughtful. Dev needed shy, sincere, and excited. The moment characters react instead of
              simply appearing, you need a state library.
            </p>

            <div className="bg-forest/15 border-l-4 border-forest p-5 rounded-r-[12px]">
              <p className="font-display text-2xl text-forest">Lesson:</p>
              <p className="font-body text-lg sm:text-xl text-ink/85 mt-1">
                Build reaction states before rehearsal exposes the one expression you forgot.
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That is also why the 72-slide number is funny. A lot of those slides exist because a
              character&apos;s face changed for three seconds. In a normal deck that is wasteful. In a show,
              that is acting.
            </p>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <Play size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                The Hardest Part Was the Human in the Loop
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              The funniest part of all this is that the talk was about knowing your neighbor, and the
              hardest thing to automate was me.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              I had an opening entrance, movement around the stage, audience questions, conversations
              with prerecorded characters, pauses, transitions to Make-Believe, a return home, and an
              ending that needed to land quietly. The media could be perfect and the show could still
              feel terrible if I stepped on a line or rushed a pause.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              So rehearsal became less about memorizing words and more about memorizing relationships
              between moments. Where am I standing when the Mail Carrier speaks? How long do I let
              King KPI sit with the question “What are their names?” When do I look at the screen?
              When do I look at the audience? When do I do absolutely nothing?
            </p>

            <div className="tv-screen text-cream rounded-[18px] p-6 sm:p-8 shadow-paper">
              <div className="flex items-center gap-2 text-amber-light text-xs font-body font-extrabold uppercase tracking-[0.16em]">
                <Clapperboard size={17} />
                The show only works if the room stays alive
              </div>
              <p className="font-body text-xl sm:text-2xl leading-relaxed mt-3">
                The audience is not watching a video. They are in the episode.
              </p>
            </div>
          </section>

          <section className="paper-card p-6 sm:p-10 flex flex-col gap-6 bg-gradient-to-b from-cream to-amber/10">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4">
              <WandSparkles size={24} className="text-rust" />
              <h2 className="font-display text-3xl sm:text-4xl text-slateblue">
                What I&apos;d Build Differently Next Time
              </h2>
            </div>

            <div className="space-y-4 font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              <p>
                I would still do the ridiculous version. That part is non-negotiable. But I would
                design the production system before producing all the assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  ['Lock voices early', 'Treat a good voice read like a canonical character asset.'],
                  ['Design the cue sheet first', 'Know what is live, triggered, baked, and flexible before assembly.'],
                  ['Build reaction libraries', 'Idle, happy, confused, thoughtful, uncomfortable — before you need them.'],
                  ['Budget audio slots', 'Apparently this is a sentence I have to write now.'],
                  ['Pre-render fragile sequences', 'If five moving pieces always travel together, stop making five things fail independently.'],
                  ['Rehearse against media', 'The real timing is the relationship between you, the room, and the playback.'],
                ].map(([title, body]) => (
                  <div key={title} className="bg-cream border border-wood-dark/20 rounded-[14px] p-5">
                    <h3 className="font-display text-xl text-slateblue">{title}</h3>
                    <p className="font-body text-base text-ink/75 mt-1">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-forest text-cream rounded-[16px] p-6 sm:p-8 shadow-paper mt-2">
              <p className="font-display text-3xl sm:text-4xl text-amber-light">
                The real lesson
              </p>
              <p className="font-body text-xl sm:text-2xl leading-relaxed mt-3">
                Episode 1 taught me how to build a world. Episode 2 taught me that once the world can
                talk back, you are producing a show.
              </p>
            </div>
          </section>
        </article>

        <footer className="w-full max-w-4xl text-center pt-2 pb-4">
          <div className="h-[3px] w-full max-w-md mx-auto stitched-rule mb-6 opacity-70" />
          <p className="font-display text-2xl sm:text-3xl text-slateblue">
            See you in the next episode, neighbor.
          </p>
          <p className="font-body text-sm text-ink/60 mt-2">
            Jason Torres · Neighborhood Archive · Episode 2 · 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Episode2Post;
