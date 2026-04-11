import Biodata from '@/components/Biodata';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-slate-300 relative overflow-hidden">
      {/* Background Accent - A subtle indigo glow in the corner */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        {/* Page Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-[0.3em]">Biography</span>
          </div>
          <h1 className="text-5xl font-black text-white tracking-tight">
            The Journey So Far.
          </h1>
        </header>

        {/* Your Biodata Component */}
        <section className="bg-slate-950/50 border border-slate-800 p-1 rounded-3xl backdrop-blur-sm">
           <Biodata />
        </section>

        {/* Subtle Footer Note */}
        <p className="mt-12 text-sm text-slate-500 italic text-center">
          "A lot in progress, more coming, one day at a time."
        </p>
      </div>
    </main>
  );
}