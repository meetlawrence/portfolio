import ProjectNav from '@/components/ProjectNav';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-slate-300">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          <aside className="w-full md:w-48 shrink-0">
            <h2 className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-[0.3em] mb-8">
              // CATEGORIES
            </h2>
            
            {/* The Wayfinding Component */}
            <ProjectNav />
          </aside>

          <main className="flex-1 pb-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}