import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-slate-300">
      {/* Subtle Indigo Glow - consistent with your Hero section */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Sidebar: Minimal & High-Contrast */}
          <aside className="w-full md:w-40 shrink-0">
            <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 opacity-50">
              Navigation
            </h2>
            <nav className="flex md:flex-col gap-6">
              <Link 
                href="/projects" 
                className="text-sm font-bold text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Overview
              </Link>
              <Link 
                href="/projects/opensource" 
                className="text-sm font-bold text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Open Source
              </Link>
              <Link 
                href="/projects/school" 
                className="text-sm font-bold text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                School Projects
              </Link>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 pb-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}