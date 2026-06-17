import Image from 'next/image';
import Biodata from '@/components/Biodata';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-slate-300 relative overflow-hidden">
      {/* Background Accent - A subtle indigo glow in the corner */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* Two-Column Grid for Left (Image) and Right (Biodata) Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT PANEL - Identity Header & Clean, borderless image layer */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start group">
            
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-indigo-500" />
              <span className="text-indigo-400 font-mono text-xs uppercase tracking-[0.3em]">Biography</span>
            </div>
            <header className="mb-10 text-center lg:text-left w-full">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase wrap-break-word">
                Lawrence
                <span className="block sm:inline text-indigo-500 sm:ml-3">Itam</span>
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2">
                <p className="text-indigo-400 font-mono text-[11px] sm:text-xs tracking-[0.15em] uppercase leading-relaxed">
                  Software Developer <span className="text-slate-700 mx-1 sm:mx-2">//</span> Full-Stack Explorer
                </p>
              </div>
            </header>
            
            {/* Pure image frame with zero structural borders */}
            <div 
              className="relative w-full max-w-90 aspect-4/5 overflow-hidden rounded-2xl" 
              style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
            >
              {/* Soft vignette fade at the base of the raw image */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70 z-10 pointer-events-none" />

              <Image 
                src="/profile.png"
                alt="Lawrence Itam"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out z-0"
                style={{ border: 'none', outline: 'none' }}
                sizes="(max-w-768px) 100vw, 400px"
                priority
              />
            </div>
          </div>

          {/* RIGHT PANEL - Contains your full timeline bio */}
          <div className="lg:col-span-7">
            <Biodata />
          </div>

        </div>

        {/* Subtle Footer Note */}
        <p className="mt-24 text-sm text-slate-600 italic text-center">
          &quot;A lot in progress, more coming, one day at a time.&quot;
        </p>
      </div>
    </main>
  );
}