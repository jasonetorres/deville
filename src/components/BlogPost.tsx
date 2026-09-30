import {
  AlertTriangle,
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Eye,
  FileCode2,
  Flame,
  HandMetal,
  Mail,
  Palette,
  ShieldAlert,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

function BlogPost({ onBack }: BlogPostProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center gap-8 sm:gap-12">
        {/* TOP NAVIGATION / EARLY ACCESS BANNER */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-slateblue hover:bg-slateblue/90 text-cream font-body text-sm font-extrabold rounded-full shadow-paper-sm transition-all duration-150 active:scale-95 cursor-pointer"
          >
            <ArrowLeft
              size={18}
              strokeWidth={2.5}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to the Neighborhood</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-forest text-cream font-body text-[11px] sm:text-xs font-extrabold tracking-[0.14em] uppercase px-4 py-2 rounded-full shadow-paper-sm">
            <Sparkles size={14} className="text-amber animate-pulse" />
            <span>Neighborhood Archive • Episode 1</span>
          </div>
        </div>

        {/* HEADER */}
        <header className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full">
          <div className="inline-flex items-center gap-2 bg-rust text-cream font-body text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-paper-sm">
            <BookOpen size={15} className="text-amber" />
            From Mister Torres’ Notebook
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-slateblue leading-[1.03] tracking-[-0.025em] max-w-3xl">
            I Built a 26-Slide Conference Deck with{' '}
            <span className="text-rust">AI</span>
          </h1>

          <p className="font-body text-xl sm:text-2xl text-ink/80 max-w-2xl">
            How I went from a vague idea to an illustrated storybook deck, what repeatedly broke,
            and the rules for keeping AI from redesigning your world.
          </p>

          {/* META INFO */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-ink/80 font-mono text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-rust" />
              August 2026
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} className="text-slateblue" />
              12 min read
            </span>
            <span>•</span>
            <span className="font-bold text-ink">By Jason Torres</span>
          </div>
        </header>

        <div className="w-full max-w-3xl wood-frame rounded-[22px] p-2.5 sm:p-3">
          <div className="bg-cream rounded-[16px] px-5 py-6 sm:px-8 sm:py-7 text-center">
            <p className="font-body text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-rust">
              Before there was a neighborhood
            </p>
            <p className="font-display text-2xl sm:text-3xl text-slateblue mt-1">
              There was Devville.
            </p>
            <p className="font-body text-base sm:text-lg text-ink/70 max-w-xl mx-auto mt-2 leading-relaxed">
              This is the story behind Episode 1 — the strange little world that eventually became
              the foundation for Mister Torres’ Neighborhood.
            </p>
          </div>
        </div>

        {/* MAIN ARTICLE BODY */}
        <article className="w-full flex flex-col gap-10 sm:gap-14">
          {/* OPENING HOOK CARD */}
          <div className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="bg-amber/25 border-l-4 border-amber p-4 sm:p-5 rounded-r-[6px]">
              <p className="font-body text-2xl sm:text-3xl text-ink leading-snug font-bold">
                “I wasn't kidding! I have spent an unreasonable amount of time arguing with an AI
                about the radius of a fucking rectangle.”
              </p>
            </div>

            <p className="font-body text-xl sm:text-2xl text-ink leading-relaxed">
              Not the content inside the rectangle. Not whether the slide made sense. The corner
              radius.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That probably tells you more about this project than anything else I could put in the
              opening paragraph.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              I wanted to build a conference talk that didn’t look like a conference talk. The subject
              is the supposed death of the IDE in an age of coding agents, and I did not want to stand
              on stage clicking through gradients, screenshots, and bullet points while explaining why
              the way developers work is changing.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              So I turned the whole thing into a children’s storybook. Because, why not.
            </p>

            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 shadow-paper-sm flex flex-col gap-3">
              <h3 className="font-display text-2xl text-slateblue text-stroke-ink tracking-wide">
                The Birth of Devville
              </h3>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                The talk became{' '}
                <em className="font-bold text-forest">The Death and Resurrection of the IDE</em>, and
                the setting became a fictional developer town called <strong>Devville</strong>. The
                IDE became a character. The terminal became a monster. Agents became little autonomous
                workers. Real developers became members of the cast. Technical concepts like ASTs,
                semantic understanding, diffs, breakpoints, protocols, and agentic adoption became
                things that could actually exist inside the world.
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              It worked. I feel pretty damn good about where it landed.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed font-bold text-rust">
              I also built it in almost exactly the wrong order.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              So rather than write another “look what AI made!” post, this is the useful version: how
              I went from a vague idea to a 26-slide illustrated conference deck, what repeatedly
              broke, what I had to redo, and what I’d change if I started over tomorrow.
            </p>
          </div>

          {/* SECTION 1: THE IDEA WAS NEVER MAKE ME SOME SLIDES */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <span className="w-9 h-9 rounded-[12px] bg-slateblue border border-wood-dark/25 flex items-center justify-center text-amber font-mono font-bold text-lg">
                1
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                The Idea Was Never “Make Me Some Slides”
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That distinction mattered more than I realized at the beginning.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              The story I wanted to tell was fairly simple. Developers are increasingly doing less
              line-by-line typing while agents do more of the execution. The terminal has become
              incredibly powerful. Agents can generate huge amounts of code quickly. But the more
              autonomous the work becomes, the more valuable system understanding, semantic context,
              diffs, traces, type information, state verification, and human oversight become.
            </p>

            {/* VERSE CARD: THE CORE ARGUMENT */}
            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-6 sm:p-8 shadow-paper relative">
              <div className="absolute -top-3.5 left-6 bg-forest text-cream font-mono text-xs uppercase font-bold px-3 py-1 border border-wood-dark/25 rounded-full">
                The Core Argument
              </div>
              <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed tracking-wide pt-2">
                “The IDE isn’t dying. It’s becoming the tool that we’ve needed to see
                <br />
                Where agents build features and set code free,
                <br />
                But the human in the loop holds the supervisory key.”
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That is an argument about changing roles, not winners and losers. The Terminal Beast
              isn’t the villain because terminals are bad. The IDE isn’t the hero because editors are
              sacred. The point is that each tool has different strengths, and the role of the IDE
              changes as agents take over more of the mechanical work.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed italic text-rust font-bold">
              Once I had that structure, I made my first mistake: I immediately started generating
              scenes.
            </p>
          </section>

          {/* SECTION 2: ANGIE JONES WORKFLOW */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <span className="w-9 h-9 rounded-[12px] bg-forest border border-wood-dark/25 flex items-center justify-center text-cream font-mono font-bold text-lg">
                2
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                Then Angie Jones Gave Me the Workflow I Needed
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              There was an important moment during this process that changed how I approached the
              rest of the deck.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              I saw my friend Angie Jones speak at RenderATL (Render Atlanta), and her slides
              immediately caught my attention. She had built this fantastic pop-art/comic-book visual
              language for her presentation. It wasn’t the exact aesthetic I wanted — I was already
              leaning more toward a weird children’s storybook — but her deck felt like one cohesive
              visual world instead of a collection of slides.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              That was very much an inspiration for what I wanted this deck to become. After her talk,
              I spoke with her and asked how she had designed it.
            </p>

            <div className="bg-amber/30 border-2 border-ink rounded-[14px] p-5 sm:p-6 shadow-paper-sm">
              <p className="font-body text-xl sm:text-2xl text-ink font-bold leading-relaxed">
                Her answer was deceptively simple:
                <br />
                <span className="text-forest text-2xl sm:text-3xl font-display tracking-wide block mt-2">
                  “Build the world first. Build the characters separately. Then plug those pieces into
                  the slides.”
                </span>
              </p>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              In other words, don’t try to smash the entire problem into a single generation. Don’t ask
              AI to invent the world, design the characters, maintain their identities, compose the
              scene, establish the visual hierarchy, place the typography, and tell the story all at
              the same time. Which, naturally, was pretty much exactly what I had been doing.
            </p>

            {/* FLOW DIAGRAM */}
            <div className="bg-terminal-bg border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 text-terminal-green font-mono">
              <div className="text-terminal-cyan text-xs sm:text-sm font-bold uppercase mb-3 flex items-center gap-2">
                <Workflow size={16} />
                The Angie Jones Framework
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold">
                <span className="bg-terminal-dim px-3 py-1.5 rounded-[14px] text-cream border border-terminal-cyan/40">
                  1. World
                </span>
                <span className="text-amber">→</span>
                <span className="bg-terminal-dim px-3 py-1.5 rounded-[14px] text-cream border border-terminal-cyan/40">
                  2. Characters
                </span>
                <span className="text-amber">→</span>
                <span className="bg-terminal-dim px-3 py-1.5 rounded-[14px] text-cream border border-terminal-cyan/40">
                  3. Scenes
                </span>
                <span className="text-amber">→</span>
                <span className="bg-terminal-dim px-3 py-1.5 rounded-[14px] text-cream border border-terminal-cyan/40">
                  4. Slides
                </span>
              </div>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Establish what Devville looks like first. Figure out the workshop, the mountains, the
              streets, the colors, the textures, the lighting. Then build the people who inhabit it
              separately. Lock their faces, clothes, proportions, and defining features. Build the
              Beast. Build the Agents. Build the recurring props. Only then start staging those pieces
              into scenes and turning those scenes into slides.
            </p>

            <div className="bg-cream border border-wood-dark/25 p-4 rounded-[12px] font-mono text-sm">
              <span className="text-rust font-bold block mb-1">Old Prompt Mindset:</span>
              <p className="text-ink/80 italic">“Make me Slide 12.”</p>
              <span className="text-forest font-bold block mt-3 mb-1">New Directed System:</span>
              <p className="text-ink font-bold">
                “Here is the world. Here are the characters. Here is the established visual system.
                Now stage this particular moment inside it.”
              </p>
            </div>
          </section>

          {/* SECTION 3: MISTAKE 1 - CAST */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #1
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Built Scenes Before I Built the Cast
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              AI image generation is great at creating a developer with glasses. It is considerably
              worse at understanding the exact same developer with glasses from seventeen images ago.
            </p>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              If Kent C. Dodds appears on Slide 4, disappears for fifteen slides, and returns later
              with a different haircut, face shape, shirt, and body type, the audience may not
              consciously think continuity error, but the illusion that these people inhabit the same
              world starts falling apart. So I stopped generating slides and built{' '}
              <strong>THE CAST</strong>.
            </p>

            {/* THE CAST CARDS */}
            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 flex flex-col gap-4 shadow-paper-sm">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-slateblue" />
                <h3 className="font-display text-2xl text-ink tracking-wide">
                  The Canonical Character Bible
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs sm:text-sm">
                <div className="p-3 bg-amber/20 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">The IDE (Jason):</strong>
                  Black OUT OF OFFICE hat, mustache, reddish-brown jacket, red gloves, blue pants.
                </div>
                <div className="p-3 bg-slate-100 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">Kent C. Dodds:</strong>
                  Dark hair and signature black JUST SHIP IT shirt.
                </div>
                <div className="p-3 bg-emerald-50 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">Aaron Francis:</strong>
                  Lighter brown hair and rectangular glasses.
                </div>
                <div className="p-3 bg-rose-50 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">Heather Downing:</strong>
                  Long dark hair and dark green top.
                </div>
                <div className="p-3 bg-indigo-50 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">Chris Dabatos:</strong>
                  Black hair, glasses, and cozy gray sweater.
                </div>
                <div className="p-3 bg-amber-50 border border-ink/30 rounded-[14px]">
                  <strong className="text-ink block font-bold text-sm">Lawrence & Dennis:</strong>
                  Lawrence (bald + beard, collared shirt), Dennis (brown hair, hoodie).
                </div>
              </div>
            </div>

            {/* SUBSECTION: NAME NOT REFERENCE */}
            <div className="bg-slateblue/15 border-l-4 border-slateblue p-4 sm:p-5 rounded-r-[6px] flex flex-col gap-2">
              <h4 className="font-display text-xl text-slateblue tracking-wide">
                A Name is Not a Character Reference
              </h4>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                I could tell the model: <em>“Put Lawrence Lockhart and Dennis Ivy on the slide.”</em>{' '}
                That did not reliably mean reproduce these two specific approved characters; it meant
                make two plausible cartoon developers representing those people.
              </p>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                When we brought two friends from a real photograph into the Beast scene, we first
                created their illustrated models as locked assets before staging them.
              </p>
              <p className="font-mono text-sm font-bold text-slateblue mt-1">
                A name is metadata. A reference image is identity.
              </p>
            </div>
          </section>

          {/* SECTION 4: MISTAKE 2 - DEVILLE DESIGN SYSTEM */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #2
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Didn’t Build Devville Before Using Devville
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Characters weren’t the only things drifting. The town itself drifted. One slide had the
              correct snowy mountains and colorful storefronts; another suddenly looked like a
              different city. One workshop felt like a cozy wooden cabin; another looked like a
              corporate startup office.
            </p>

            {/* PALETTE BOX */}
            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 flex flex-col gap-4 shadow-paper-sm">
              <div className="flex items-center gap-2">
                <Palette size={20} className="text-forest" />
                <h3 className="font-display text-2xl text-ink tracking-wide">
                  The Devville Visual DNA & Color Palette
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 font-mono text-xs">
                <div className="flex flex-col items-center gap-1 p-2 bg-[#F2EDE3] border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold text-ink">Cream</span>
                  <span className="text-ink/70">#F2EDE3</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#4B5E7A] text-cream border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Slate Blue</span>
                  <span className="text-cream/80">#4B5E7A</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#2E5A3C] text-cream border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Forest</span>
                  <span className="text-cream/80">#2E5A3C</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#E6A33A] text-ink border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Gold</span>
                  <span className="text-ink/80">#E6A33A</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#C24A3A] text-cream border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Red</span>
                  <span className="text-cream/80">#C24A3A</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#3BA39C] text-ink border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Teal</span>
                  <span className="text-ink/80">#3BA39C</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#6C5A8E] text-cream border border-wood-dark/25 rounded-[14px]">
                  <span className="font-bold">Purple</span>
                  <span className="text-cream/80">#6C5A8E</span>
                </div>
              </div>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              <strong>Build locations like sets, not disposable backgrounds.</strong> Devville
              eventually developed several recurring sets: the town square, the original IDE workshop,
              the workshop at night, the evolved command-center workshop, the semantic blackboard
              environment, the Tower of Tongues, the autumn street, and the restored town.
            </p>
          </section>

          {/* SECTION 5: MISTAKE 3 - INDEPENDENT POSTERS & ROUNDED RECTANGLE */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #3
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Treated Every Slide Like an Independent Poster
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              A presentation isn’t a folder of illustrations. It’s a sequence. Slide 16 has to make
              visual sense immediately after Slide 15. Slide 20 has to feel like it happened in the
              same Devville as Slide 18. Instead of asking: <em>“Do I like this image?”</em> I started
              asking: <em>“Does this image belong between the images around it?”</em>
            </p>

            {/* THE FAMOUS RECTANGLE CALLOUT */}
            <div className="bg-[#F2EDE3] border-[4px] border-ink rounded-[18px] p-6 sm:p-8 shadow-paper relative">
              <div className="inline-flex items-center gap-2 bg-rust text-cream font-mono text-xs uppercase font-bold px-3 py-1 border border-wood-dark/25 rounded-full mb-3">
                <Flame size={14} className="text-amber" />
                The Infamous Rounded Rectangle
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-wide mb-2">
                The Battle of the Left-Third Story Card
              </h3>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                The story slides needed somewhere for the verse to live: a tall cream storybook card
                occupying roughly the entire left third of the composition. The audience learns:
                <strong className="text-forest block mt-1">
                  Cream rounded card on the left = narrator speaking.
                </strong>
              </p>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed mt-2">
                The model kept redesigning the fucking thing: making it dark, square, tiny, floating,
                too narrow, too wide. I kept writing 300 words describing it. Eventually I attached the
                correct version and said: <em>“Copy this. That’s it. Leave the rest alone.”</em> And
                that worked dramatically better.
              </p>
            </div>

            <p className="font-mono text-sm sm:text-base font-bold text-forest bg-forest/10 p-4 border border-forest/30 rounded-[12px]">
              Rule: If I correct the same visual element twice, I stop rewriting the prompt and turn
              the correct version into a reference asset.
            </p>
          </section>

          {/* SECTION 6: MISTAKE 4 - AI DECORATION & BEAST SLIDE */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #4
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Let the AI Decorate
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              Image generation systems seem to hate leaving empty space alone. If there’s room, they
              want to put something there: a sign, slogan, logo, title, decorative plaque, or random
              micro-copy. At one point, a background character held a sign that read:{' '}
              <code className="font-mono text-rust font-bold bg-rust/10 px-2 py-0.5 rounded">
                PROMPTS NOT PRIDE
              </code>
              . Gone! Another put names on hats. Gone!
            </p>

            <div className="bg-amber/25 border-l-4 border-amber p-4 sm:p-5 rounded-r-[6px]">
              <p className="font-display text-2xl text-ink tracking-wide">
                “Generation adds. Art direction subtracts.”
              </p>
              <p className="font-body text-lg text-ink/80 mt-1">
                The first AI pass often contains too many ideas. Your job isn’t to generate more. Your
                job is deciding what survives.
              </p>
            </div>

            {/* THE BEAST SLIDE CASE STUDY */}
            <div className="bg-terminal-bg border border-wood-dark/25 rounded-[12px] p-6 text-terminal-green font-mono shadow-paper flex flex-col gap-4">
              <div className="flex items-center justify-between text-terminal-cyan text-xs font-bold uppercase border-b border-terminal-dim pb-2">
                <span className="flex items-center gap-2">
                  <Terminal size={16} />
                  Slide 3: The Terminal Beast Wakes Up
                </span>
                <span className="text-terminal-green">BEAST v1.0.0</span>
              </div>
              <p className="font-mono text-sm sm:text-base leading-relaxed text-terminal-green">
                From out of the darkness a creature arose,
                <br />
                It spat out whole features in plain English prose.
                <br />
                It lived in the terminal, prompt at its jaw,
                <br />
                It wrote twenty classes without a single flaw.
                <br />
                Eighty lines out of every hundred, first pass—
                <br />
                A magical, frightening, whispering mass.
              </p>
              <p className="text-xs text-terminal-cyan/80 border-t border-terminal-dim/60 pt-2 font-mono">
                The image came from AI. The continuity, composition, hierarchy, references,
                subtraction, and judgment came from iteration.
              </p>
            </div>
          </section>

          {/* SECTION 7: MISTAKE 5 - BAD RHYMES, REAL PEOPLE & ARTIFACTS */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #5
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Let Rhyme Excuse Bad Writing
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              The deck is partly written in rhyme, which was fun until the rhyme began bullying the
              English language. An early version included:{' '}
              <em>“Then the IDE smiled, and put on its glass”</em>. Nobody says that! It only existed
              because “glass” rhymed with “class.”
            </p>

            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 flex flex-col gap-3 shadow-paper-sm">
              <span className="font-mono text-xs font-bold uppercase text-forest">
                The Rewritten Semantic Passage (Slides 7 & 8)
              </span>
              <p className="font-display text-lg sm:text-xl text-ink leading-relaxed tracking-wide">
                “Then the IDE smiled and put on its glasses,
                <br />
                Reading the code not as text, but as classes.
                <br />
                It mapped the AST, the semantic tree,
                <br />
                Tracing every path back to variable B.
                <br />
                It knew every call site and interface type,
                <br />
                Cutting right through probabilistic hype.
                <br />
                It tracked every route where a value could go,
                <br />
                Mapping the ultimate truth of the flow.”
              </p>
            </div>

            {/* SLIDE FAMILIES */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="font-display text-2xl text-slateblue text-stroke-ink tracking-wide">
                Some Slides Should Just Explain the Damn Thing
              </h3>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                The ~7% terminal-activity slide didn’t need a cast of Devville characters. The
                benchmark slide didn’t need a monster. The deck developed distinct slide families:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-forest block font-bold mb-1">Story Slides</strong>
                  Characters and environments moving the narrative.
                </div>
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-slateblue block font-bold mb-1">Data & Receipts</strong>
                  Clean numbers, terminal stats, and benchmarks.
                </div>
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-rust block font-bold mb-1">Testimonials</strong>
                  Real developer quotes with locked character portraits.
                </div>
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-amber block font-bold mb-1">Architectural Framework</strong>
                  Levels of agentic adoption and IDE responsibility.
                </div>
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-purple-700 block font-bold mb-1">Document Artifacts</strong>
                  Real customer letters presented as physical paper.
                </div>
                <div className="p-3 bg-cream border border-wood-dark/25 rounded-[14px]">
                  <strong className="text-ink block font-bold mb-1">Interactive Code</strong>
                  Code editors and terminal command-and-control.
                </div>
              </div>
            </div>

            {/* 4 STATES OF THE IDE */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="font-display text-2xl text-slateblue text-stroke-ink tracking-wide">
                Intentional Character Evolution (The 4 IDE States)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs sm:text-sm">
                <div className="p-3.5 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <strong className="text-forest block font-bold">State 1: Traditional IDE</strong>
                  Working in the cozy wooden workshop.
                </div>
                <div className="p-3.5 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <strong className="text-slateblue block font-bold">State 2: Semantic Glasses</strong>
                  ASTs, dependency graphs, variable flow.
                </div>
                <div className="p-3.5 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <strong className="text-rust block font-bold">State 3: Command & Control</strong>
                  Diffs, breakpoints, call stacks, logs.
                </div>
                <div className="p-3.5 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <strong className="text-amber block font-bold">State 4: The Cockpit</strong>
                  Confident supervisory cockpit for agent swarms.
                </div>
              </div>
            </div>

            {/* THE GOODBYE LETTER */}
            <div className="bg-amber/20 border-l-4 border-amber p-4 sm:p-5 rounded-r-[6px] flex flex-col gap-2">
              <div className="flex items-center gap-2 font-display text-xl text-ink">
                <Mail size={18} className="text-rust" />
                The 20-Year Customer Goodbye Letter: Layout Carries Meaning
              </div>
              <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
                A letter arrived from a 20-year JetBrains user saying he was leaving for a flat $20/mo
                fee. But the emotional ending was: <em>“I am rooting for you.”</em> Putting those
                exact words physically on the paper artifact was essential to the emotional arc.
              </p>
            </div>
          </section>

          {/* SECTION 8: MISTAKE 6 - SANE VERSION CONTROL & NEGATIVE CONSTRAINTS */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <div className="inline-flex items-center gap-1.5 bg-rust text-cream font-body text-xs font-extrabold px-3 py-1.5 rounded-full">
                <AlertTriangle size={14} />
                Mistake #6
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                I Assembled the PowerPoint Without Sane Version Control
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              We had generated so many revisions that filenames had become meaningless. There were
              originals, fixes, final versions, corrected finals, and auto-generated strings. I
              successfully created a 26-slide deck containing some of the wrong 26 slides.
            </p>

            <div className="bg-forest/15 border-l-4 border-forest p-4 sm:p-5 rounded-r-[6px]">
              <h4 className="font-display text-xl text-forest tracking-wide">
                Approval Should Be a State, Not a Feeling
              </h4>
              <p className="font-mono text-xs sm:text-sm text-ink/90 mt-1">
                <code>Draft</code> → <code>Review</code> → <code>Revision</code> →{' '}
                <code>Approved</code> → <code>Assembly</code>
              </p>
              <p className="font-body text-base sm:text-lg text-ink/90 mt-2">
                The PowerPoint build process reads <strong>only from /approved</strong>. Nothing else.
                No searching. No guessing.
              </p>
            </div>

            {/* NEGATIVE CONSTRAINTS LIST */}
            <div className="bg-cream border border-wood-dark/25 rounded-[14px] p-5 sm:p-6 flex flex-col gap-3 shadow-paper-sm">
              <div className="flex items-center gap-2">
                <ShieldAlert size={20} className="text-rust" />
                <h3 className="font-display text-xl sm:text-2xl text-ink tracking-wide">
                  The Essential “Don’t Do This” List (Negative Constraints)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {[
                  'No unsolicited title banners',
                  'No chapter numbers',
                  'No names on hats',
                  'No random slogans',
                  'No dark verse cards',
                  'No glossy 3D rendering',
                  'No photorealism',
                  'No generated QR codes',
                  'No tiny hallucinated URLs',
                  'No prop clutter',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-rust/15 text-rust border border-rust/40 rounded-full font-bold"
                  >
                    ✕ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* EPILOGUE & HIGH FIVE */}
            <div className="bg-cream border border-wood-dark/25 rounded-[12px] p-4 sm:p-5 flex flex-col gap-3 font-body text-lg sm:text-xl text-ink/90">
              <div className="flex items-center gap-2 font-display text-2xl text-slateblue">
                <HandMetal size={20} />
                The Ending: IDE & Terminal Beast High-Five
              </div>
              <p>
                The last few slides got stronger when we stopped introducing new things and brought
                back the familiar world. The relationship between the IDE and Terminal Beast is no
                longer adversarial—they literally high-five. These tools were never required to kill
                each other. Their jobs changed.
              </p>
            </div>
          </section>

          {/* SECTION 9: WHAT I WOULD DO TOMORROW & SUMMARY */}
          <section className="paper-card cutout p-6 sm:p-10 flex flex-col gap-6 bg-gradient-to-b from-cream to-amber/10">
            <div className="flex items-center gap-3 border-b-2 border-ink/15 pb-3">
              <Award size={24} className="text-amber" />
              <h2 className="font-display text-2xl sm:text-4xl text-slateblue tracking-[-0.015em]">
                What I Learned & What I'd Do Tomorrow
              </h2>
            </div>

            <div className="space-y-4 font-body text-lg sm:text-xl text-ink/90 leading-relaxed">
              <div className="bg-amber/30 border-2 border-ink rounded-[14px] p-5 sm:p-6 font-bold text-xl sm:text-2xl text-ink">
                Don’t smash everything into one prompt. Build the story. Build the world. Build the
                cast. Lock the things that should not change. Then use those pieces to create the
                scenes.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <div className="flex items-center gap-2 font-display text-xl text-forest mb-1">
                    <FileCode2 size={18} />
                    What AI Actually Did
                  </div>
                  <p className="font-body text-base text-ink/90">
                    AI generated the pictures. The continuity, hierarchy, rhyme rewriting, asset
                    management, and judgment came from iteration. The generation step is dramatically
                    faster; the judgment isn’t.
                  </p>
                </div>
                <div className="p-4 bg-cream border border-wood-dark/25 rounded-[12px]">
                  <div className="flex items-center gap-2 font-display text-xl text-slateblue mb-1">
                    <Eye size={18} />
                    The Golden Rules
                  </div>
                  <p className="font-body text-base text-ink/90">
                    Establish layouts before producing. Turn approved visuals into locked assets. Add
                    deterministic items (QR codes, links) afterward. Review slides in sequence.
                  </p>
                </div>
              </div>
            </div>

            {/* CLOSING TAKEAWAY */}
            <div className="bg-forest text-cream border border-wood-dark/25 rounded-[12px] p-6 sm:p-8 shadow-paper mt-4">
              <h3 className="font-display text-2xl sm:text-3xl text-amber text-stroke-ink tracking-wide mb-3">
                The Result
              </h3>
              <p className="font-body text-xl sm:text-2xl leading-relaxed">
                Maybe the IDE doesn’t die. Maybe it molts. Maybe the editor becomes something bigger
                than the thing we used to type into. Maybe it becomes a cockpit.
              </p>
              <p className="font-mono text-sm sm:text-base text-cream/90 mt-4 font-bold border-t border-cream/20 pt-3">
                “Build the world first. Build the characters separately. Lock the rules. Then make the
                slides. And FOR THE LOVE OF GOD, save the fckin approved files.”
              </p>
            </div>

            {/* LINKEDIN NEWSLETTER CTA */}
            <div className="pt-6 border-t-2 border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-display text-xl text-ink">Musings of an Idiot</span>
                <span className="font-mono text-xs text-ink/70">
                  Catch the full post on LinkedIn after the talk
                </span>
              </div>
              <a
                href="https://www.linkedin.com/newsletters/musings-of-an-idiot-7414020052481413120"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slateblue text-cream hover:bg-slateblue/90 font-body text-xs sm:text-sm font-extrabold rounded-full shadow-paper-sm transition-transform active:scale-95 no-underline cursor-pointer"
              >
                <span>Read Newsletter on LinkedIn</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </section>
        </article>

        {/* FOOTER */}
        <footer className="w-full max-w-4xl text-center pt-2 pb-4">
          <div className="h-[3px] w-full max-w-md mx-auto stitched-rule mb-6 opacity-70" />
          <p className="font-display text-2xl sm:text-3xl text-slateblue">
            Every neighborhood has a beginning.
          </p>
          <p className="font-body text-sm text-ink/60 mt-2">
            Jason Torres · Neighborhood Archive · Episode 1 · 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

export default BlogPost;
