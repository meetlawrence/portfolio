export default function Biodata() {
  const skills = [
    "HTML/CSS (Flexbox/Grid)", "JavaScript (ES6+)", "TypeScript", 
    "React / Next.js", "Node.js", "Express", 
    "PostgreSQL / MySQL", "Figma", "Git / GitHub"
  ];

  return (
    <div className="w-full bg-transparent font-sans selection:bg-indigo-500/30">
      <div className="relative border-l border-slate-800/60 pl-8 py-2 ml-1">
        
        <div className="absolute top-0 left-[-1px] h-16 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent" />

        <header className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase">Available for projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3 uppercase">
            Lawrence Okon
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-indigo-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
              Software Developer // Full-Stack Explorer
            </p>
          </div>
        </header>

        <section className="space-y-12">
          
          <div className="max-w-2xl">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              I bridge the gap between <span className="text-white font-semibold">complex backend logic</span> and <span className="text-indigo-400 font-medium">intuitive user experiences</span>. 
              With a foundation in <span className="italic text-slate-300">Biotechnology</span> and a drive for engineering, I build resilient, mobile-first tools designed to solve real-world problems.
            </p>
          </div>

          
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-5 py-2 text-[10px] md:text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-900/40 backdrop-blur-sm border border-slate-800 text-slate-400 rounded-lg hover:border-indigo-500/50 hover:text-white hover:bg-slate-800/60 transition-all duration-500 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA with animated arrow */}
          <div className="pt-4">
            <a 
              href="mailto:okonwhyte@gmail.com" 
              className="inline-flex items-center group text-white font-bold tracking-tight text-lg"
            >
              <span className="border-b-2 border-indigo-500/50 group-hover:border-indigo-500 pb-1 transition-all duration-300">
                Let's build something together
              </span>
              <span className="ml-3 p-2 rounded-full border border-slate-800 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300">
                <svg 
                  width="15" 
                  height="15" 
                  viewBox="0 0 15 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </span>
            </a>
          </div>
        </section>

        {/* Subtle Gradient Fade at the bottom of the border line */}
        <div className="absolute bottom-0 left-[-1px] h-32 w-[2px] bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </div>
  );
}