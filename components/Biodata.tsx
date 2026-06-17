export default function Biodata() {
  const skills = [
    "HTML/CSS (Flexbox/Grid)", "JavaScript (ES6+)", "TypeScript", 
    "React / Next.js", "Node.js", "Express", 
    "PostgreSQL / MySQL", "Figma", "Git / GitHub"
  ];

  return (
    <div className="w-full bg-transparent font-sans selection:bg-indigo-500/30">
      <div className="relative border-l border-slate-800/60 pl-6 sm:pl-8 py-2 ml-1">
        
        {/* Animated accent timeline anchor */}
        <div className="absolute top-0 -left-px h-16 w-px bg-linear-to-b from-indigo-500 to-transparent" />

        <section className="space-y-12">
          {/* Availability Status */}
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase">Available for projects</span>
          </div>
          
          {/* Core Value Proposition Statement */}
          <div className="max-w-2xl">
            <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed font-light">
              I bridge the gap between <span className="text-white font-semibold">complex backend logic</span> and <span className="text-indigo-400 font-medium">intuitive user experiences</span>. 
              I build resilient, mobile-first tools engineered to scale and solve real-world problems.
            </p>
          </div>

          {/* Expertise Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-5">Expertise</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 sm:px-5 py-2 text-[10px] md:text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-900/40 backdrop-blur-sm border border-slate-800 text-slate-400 rounded-lg hover:border-indigo-500/50 hover:text-white hover:bg-slate-800/60 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Info & Certificates Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Education & Credentials</h3>
            
            {/* Primary Degree Track - Full Width */}
            <div className="max-w-2xl space-y-6">
              <div className="border-l-2 border-slate-800 hover:border-indigo-500/50 pl-4 py-1.5 transition-colors duration-300">
                <span className="text-indigo-400 font-mono text-[9px] sm:text-[10px] tracking-wider block mb-1">DEGREE PROGRAM</span>
                <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">B.S. in Software Development</h4>
                <p className="text-slate-400 text-xs mt-0.5">BYU-Pathway Worldwide</p>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-2 max-w-xl font-light leading-relaxed">
                  Focused on building scalable full-stack architectures, optimizing performance layer protocols, and engineering resilient solutions tailored for resource-constrained environments.
                </p>
              </div>

              {/* Sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
  
                {/* Certificate In Progress */}
                <div className="border-l-2 border-slate-800 hover:border-indigo-400/50 pl-4 py-1.5 transition-colors duration-300 bg-slate-900/10 rounded-r-lg pr-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-indigo-400 font-mono text-[9px] tracking-wider uppercase">In Progress</span>
                    <span className="text-slate-500 font-mono text-[10px]">Expected 2026</span>
                  </div>
                  <h4 className="text-white font-medium text-xs sm:text-sm tracking-tight leading-snug">Software Development Certificate</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">BYU-Pathway Worldwide</p>
                </div>

                {/* Milestone 1 Complete */}
                <div className="border-l-2 border-slate-800 hover:border-emerald-500/50 pl-4 py-1.5 transition-colors duration-300 bg-slate-900/10 rounded-r-lg pr-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase">Completed</span>
                      <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
                    </div>
                    <span className="text-slate-500 font-mono text-[10px]">2026</span>
                  </div>
                  <h4 className="text-slate-300 font-medium text-xs sm:text-sm tracking-tight leading-snug">Web &amp; Computer Programming</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">BYU-Pathway Worldwide</p>
                </div>

                {/* Milestone 2 Complete */}
                <div className="border-l-2 border-slate-800 hover:border-emerald-500/50 pl-4 py-1.5 transition-colors duration-300 bg-slate-900/10 rounded-r-lg pr-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase">Completed</span>
                      <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
                    </div>
                    <span className="text-slate-500 font-mono text-[10px]">2025</span>
                  </div>
                  <h4 className="text-slate-300 font-medium text-xs sm:text-sm tracking-tight leading-snug">Computer Programming Certificate</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">BYU-Pathway Worldwide</p>
                </div>

              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-4">
            <a 
              href="mailto:okonwhyte@gmail.com" 
              className="inline-flex items-center group text-white font-bold tracking-tight text-base sm:text-lg"
            >
              <span className="border-b-2 border-indigo-500/30 group-hover:border-indigo-500 pb-1 transition-all duration-300">
                Let&apos;s build something together
              </span>
              <span className="ml-3 p-2 rounded-full border border-slate-800 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300">
                <svg 
                  width="14" 
                  height="14" 
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

        {/* Bottom subtle timeline fade */}
        <div className="absolute bottom-0 -left-px h-32 w-px bg-linear-to-t from-black to-transparent" />
      </div>
    </div>
  );
}