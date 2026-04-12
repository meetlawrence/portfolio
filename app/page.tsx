import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Edrealz Xtiches',
    status: 'In Development',
    description: 'A full-stack e-commerce solution for a premier fashion house, featuring automated inventory management and secure Paystack payment processing.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Paystack API'],
    link: '#' 
  },
  {
    title: 'CineVibe',
    description: 'A high-performance cinematic exploration tool utilizing third-party REST APIs to deliver real-time movie insights and immersive user interfaces.',
    technologies: ['JavaScript', 'REST APIs', 'Asynchronous Programming', 'CSS3'],
    link: 'https://meetlawrence.github.io/wdd330/cinevibe/index.html'
  },
  {
    title: 'Chamber Portal',
    description: 'A digitized business directory engineered for the Calabar Chamber of Commerce to streamline member data management and local business visibility.',
    technologies: ['JavaScript', 'Responsive Architecture', 'JSON Data Structures'],
    link: 'https://meetlawrence.github.io/wdd231/chamber/index.html'
  }
];

export default function Home() { 
  return (
    <main className="min-h-screen bg-black text-slate-300 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-2 px-6">
        {/* The "Spotlight" - an indigo glow that feels premium on black */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-900/20 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight mb-8">
            Hard Logic. <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-cyan-400">
              Fluid Design.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Crafting digital solutions for local challenges, one line of code at a time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="/projects">
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-400 transition-all duration-300">
                View Projects
              </button>
            </a>
            <a href="/meetLawrenceResume.pdf" target='-blank' rel='noopener noreferrer'>
              <button className="px-10 py-4 bg-transparent text-white font-bold rounded-full border border-slate-700 hover:border-white transition-all">
                Resume
              </button>
            </a>  
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Selected Works</h2>
          <div className="h-px grow bg-slate-800" />
        </div>
        
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}