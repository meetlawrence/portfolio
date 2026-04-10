export default function Biodata() {
  const skills = [
    "HTML/CSS (Flexbox/Grid)", "JavaScript (ES6+)", "TypeScript", 
    "React / Next.js", "Node.js", "Express", 
    "PostgreSQL / MySQL", "Figma", "Git / GitHub"
  ];

  return (
    <div className="w-full bg-transparent font-sans">
      <div className="relative border-l border-slate-800 pl-8 py-4">
        
        {/* Decorative Dot - Changed to Indigo to match theme */}
        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

        <header className="mb-10">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-2 uppercase">
            Lawrence Okon
          </h2>
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Software Developer // Full-Stack Explorer
          </p>
        </header>

        <section className="space-y-8">
          {/* Professional Narrative */}
          <div className="max-w-xl">
            <p className="text-slate-400 text-lg leading-relaxed">
              I bridge the gap between <span className="text-white font-medium">complex backend logic</span> and <span className="text-indigo-400">intuitive user experiences</span>. 
              With a foundation in Biotechnology and a drive for Software Development, I build resilient, mobile-first tools designed to solve real-world problems.
            </p>
          </div>

          {/* Unified Skill Tags */}
          <div className="flex flex-wrap gap-3 py-4">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-1.5 text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-slate-300 rounded-full hover:border-indigo-500 hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="pt-8">
            <a 
              href="mailto:your-email@example.com" 
              className="inline-flex items-center group text-white font-bold tracking-wide border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors"
            >
              Let's build something together
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>

        {/* Decorative Bottom Dot */}
        <div className="absolute -left-[5px] bottom-0 h-2.5 w-2.5 rounded-full bg-slate-800" />
      </div>
    </div>
  );
}