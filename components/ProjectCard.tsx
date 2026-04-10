interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}


export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="group relative p-6 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]">
      {/* Decorative accent bar that expands on hover */}
      <div className="absolute top-0 left-0 h-full w-1 bg-indigo-500/20 group-hover:bg-indigo-500 transition-all rounded-l-xl" />

      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="space-y-4">
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 group-hover:border-indigo-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {link && (
            <div className="pt-2">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Launch Project 
                <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}