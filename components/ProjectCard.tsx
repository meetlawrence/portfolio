interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
    link?: string;
    status?: string; // Optional status badge (e.g., "In Progress", "Completed")
}

export default function ProjectCard({ title, description, technologies, link, status }: ProjectCardProps) {
  return (
    <article className="group relative p-8 rounded-2xl transition-all duration-500 bg-slate-950/40 hover:bg-slate-900/60 overflow-hidden">
      
      {/* 1. Animated Gradient Glow (Invisible until hover) */}
      <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        
        {/* 2. Number/Index Hint (Optional aesthetic touch) */}
        <span className="text-indigo-500/30 font-mono text-xs mb-4 group-hover:text-indigo-400 transition-colors">
          // FEATURED_PROJECT
        </span>

        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h3>
        
        {status && (
            <span className="
                w-fit whitespace-nowrap
                text-[10px] font-bold tracking-widest uppercase 
                px-2.5 py-1 rounded-full 
                bg-indigo-500/10 text-indigo-400 
                border border-indigo-500/20 
                shadow-[0_0_10px_rgba(99,102,241,0.1)]
                animate-pulse-slow
            ">
                {status}
            </span>
            )}
              
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="space-y-6">
          {/* 3. Technology "Dots" style */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="flex items-center text-[11px] font-medium text-slate-500 group-hover:text-slate-300 transition-colors"
              >
                <span className="h-1 w-1 rounded-full bg-indigo-500 mr-2" />
                {tech}
              </span>
            ))}
          </div>

          {link && (
            <div className="pt-4 border-t border-slate-900 group-hover:border-indigo-500/20 transition-colors">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between text-sm font-bold text-white group-hover:text-indigo-400"
              >
                <span>View Source</span>
                <div className="h-8 w-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                    <path 
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" 
                        fill="currentColor" 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                    />
                    </svg>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}