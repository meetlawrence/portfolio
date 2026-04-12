import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-slate-300 relative overflow-hidden flex items-center">
      
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10 w-full">
        
        {/* Header Section */}
        <section className="mb-16 border-l-4 border-indigo-600 pl-6">
          <span className="text-indigo-500/50 font-mono text-xs mb-4 block uppercase tracking-widest">
            // CONTACT_ENTRY
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Let's <br /> Connect
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-md leading-relaxed">
            Currently open to new projects, full-stack opportunities, and collaborations in the tech space.
          </p>
        </section>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Card */}
          <article className="
            group relative p-8 rounded-2xl transition-all duration-500 
            bg-slate-950/40 hover:bg-slate-900/60 overflow-hidden 
            /* Mobile-First Glow & Border */
             shadow-[0_0_20px_rgba(99,102,241,0.05)]
            md:border-slate-900 md:shadow-none
          ">
            {/* 1. Animated Gradient Glow (Always visible on mobile) */}
            <div className="
              absolute -inset-px bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/10 
              opacity-100 md:opacity-0 md:group-hover:opacity-100 
              transition-opacity duration-500
            " />
            
            <div className="relative z-10 flex flex-col h-full">
               <span className="text-indigo-500/30 font-mono text-[10px] mb-4 md:group-hover:text-indigo-400 transition-colors uppercase tracking-widest">
                Direct_Mail
              </span>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Email</h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Send a message for inquiries or just to say hello.</p>
              
              <div className="pt-4 border-t border-slate-900 md:group-hover:border-indigo-500/20 transition-colors">
                <a 
                  href="mailto:meetlawrence@outlook.com" 
                  className="flex items-center justify-between text-sm font-bold text-white md:group-hover:text-indigo-400"
                >
                  <span>meetlawrence@outlook.com</span>
                  <div className="h-8 w-8 rounded-full border border-slate-800 flex items-center justify-center md:group-hover:border-indigo-500/50 md:group-hover:bg-indigo-500/10 transition-all">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transform -rotate-45 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </article>

          {/* Location/Availability Card */}
          <article className="
            group relative p-8 rounded-2xl transition-all duration-500 
            bg-slate-950/40 hover:bg-slate-900/60 overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.05)]
            md:border-slate-900 md:shadow-none
          ">
            <div className="
              absolute -inset-px bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/20 
              opacity-100 md:opacity-0 md:group-hover:opacity-100 
              transition-opacity duration-500
            " />
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-indigo-500/30 font-mono text-[10px] mb-4 md:group-hover:text-indigo-400 transition-colors uppercase tracking-widest">
                Current_Status
              </span>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Location</h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Primarily operating out of Nigeria, available for remote work worldwide.</p>
              
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Lagos & Port Harcourt, NG</span>
                <span className="
                  flex items-center text-[10px] font-bold tracking-widest uppercase 
                  px-2.5 py-1 rounded-full 
                  bg-indigo-500/10 text-indigo-400 
                  border border-indigo-500/20 
                  shadow-[0_0_10px_rgba(99,102,241,0.1)]
                  /* Pulse is constant on mobile for status visibility */
                  animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]
                ">
                   Available
                </span>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </main>
  );
}