interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
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
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">↗</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}