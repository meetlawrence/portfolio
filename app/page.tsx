import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Edrealz Xtiches',
    description: 'A full-stack e-commerce platform for a fashion brand featuring Paystack integration and secure authentication.',
    technologies: ['Node.js', 'Express', 'EJS', 'SQL', 'Paystack'],
    link: '#' 
  },
  {
    title: 'AbegChop',
    description: 'A campus-focused food discovery application designed for students to browse local menus with a mobile-first approach.',
    technologies: ['JavaScript', 'JSON', 'CSS Flexbox', 'Mobile-First'],
    link: '#'
  },
  {
    title: 'CALCCIMA Portal',
    description: 'A responsive business directory developed for the Calabar Chamber of Commerce to manage local business data.',
    technologies: ['JavaScript', 'Responsive Design', 'Data Management'],
    link: '#'
  }
];

export default function Home() { 
  return (
    <main className="min-h-screen bg-black text-slate-300 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-2 px-6">
        {/* The "Spotlight" - an indigo glow that feels premium on black */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-900/20 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight mb-8">
            Web Designer <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              & Developer
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Crafting digital solutions for local challenges, one line of code at a time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-400 transition-all duration-300">
              View Projects
            </button>
            <button className="px-10 py-4 bg-transparent text-white font-bold rounded-full border border-slate-700 hover:border-white transition-all">
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Selected Works</h2>
          <div className="h-[1px] flex-grow bg-slate-800" />
        </div>
        
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}