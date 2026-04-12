export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  status?: string; // Optional field
}


import ProjectList from '@/components/ProjectList';

export const allProjects: Project[] = [
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
    title: 'CSE Service Network',
    status: 'Temporary Server',
    description: 'A full-stack community platform connecting volunteers with local service opportunities, featuring secure user authentication and a relational database.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'Render'],
    link: 'https://cse340-kl7q.onrender.com/' // Replace with your actual Render deployment URL
  },
  {
    title: 'AbegChop',
    description: 'A mobile-first food discovery platform optimized for low-bandwidth environments, enabling students to navigate campus-specific culinary options.',
    technologies: ['JavaScript', 'JSON', 'CSS Grid/Flexbox', 'Performance Optimization'],
    link: 'https://meetlawrence.github.io/wdd231/project/index.html'
  },
  {
    title: 'Chamber Portal',
    description: 'A digitized business directory engineered for the Calabar Chamber of Commerce to streamline member data management and local business visibility.',
    technologies: ['JavaScript', 'Responsive Architecture', 'JSON Data Structures'],
    link: 'https://meetlawrence.github.io/wdd231/chamber/index.html'
  },
  {
    title: 'Dream Nigeria',
    description: 'A vibrant tourism platform highlighting cultural attractions in Cross River State, featuring a dynamic gallery and optimized responsive layouts.',
    technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://meetlawrence.github.io/wdd131/project/index.html'
  }
];

export default function ProjectsOverview() {
  // 1. Filter the projects into your specific categories
  const engineeredSystems = allProjects.filter(p => 
    ['CSE Service Network', 'Edrealz Xtiches'].includes(p.title)
  );

  const interactiveExps = allProjects.filter(p => 
    ['CineVibe', 'Chamber Portal'].includes(p.title)
  );

  const strategicDesigns = allProjects.filter(p => 
    ['AbegChop', 'Dream Nigeria'].includes(p.title)
  );

  return (
    <div className="space-y-24">
      {/* Header */}
      <section>
        <h1 className="text-5xl font-black text-white tracking-tighter mb-6">
          The Portfolio <br />
          <span className="text-indigo-500">Log.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          A curated collection of projects that exemplify my journey through the realms of engineered systems, interactive experiences, and strategic design. Each project is a testament to my commitment to innovation, problem-solving, and creative expression in the digital landscape.
        </p>
      </section>

      {/* 01. Engineered Systems Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xl font-bold text-white tracking-widest uppercase">01. Engineered Systems</h2>
           <div className="h-px grow bg-slate-800" />
        </div>
        {/* Pass the filtered array to existing ProjectList component */}
        <ProjectList projects={engineeredSystems} />
      </section>

      {/* 02. Interactive Experiences Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xl font-bold text-white tracking-widest uppercase">02. Interactive Experiences</h2>
           <div className="h-px grow bg-slate-800" />
        </div>
        <ProjectList projects={interactiveExps} />
      </section>

      {/* 03. Strategic Design Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xl font-bold text-white tracking-widest uppercase">03. Strategic Design</h2>
           <div className="h-px grow bg-slate-800" />
        </div>
        <ProjectList projects={strategicDesigns} />
      </section>
    </div>
  );
}