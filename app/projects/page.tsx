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
    title: 'TheEliteGlam',
    status: 'In Development',
    description: 'A high-performance fashion commerce architecture featuring a custom-built content management engine, fluid asset optimization layers, and an optimized, mobile-first design built to minimize latency.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
    link: '#'
  },
  {
    title: 'CSE Service Network',
    status: 'Temporary Server',
    description: 'A full-stack community platform connecting volunteers with local service opportunities, featuring secure user authentication and a relational database.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'Render'],
    link: 'https://cse340-kl7q.onrender.com/'
  },
  {
    title: 'CineVibe',
    description: 'A high-performance cinematic exploration tool utilizing third-party REST APIs to deliver real-time movie insights and immersive user interfaces.',
    technologies: ['JavaScript', 'REST APIs', 'Asynchronous Programming', 'CSS3'],
    link: 'https://meetlawrence.github.io/wdd330/cinevibe/index.html'
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
  // 1. Digital Commerce & API Gateways
  const commerceSystems = allProjects.filter(p => 
    ['Edrealz Xtiches', 'TheEliteGlam'].includes(p.title)
  );

  // 2. Core Full-Stack Platforms & Network Apps
  const fullStackApps = allProjects.filter(p => 
    ['CSE Service Network'].includes(p.title)
  );

  // 3. Client-Side Engineering, Optimization & Data Directories
  const performanceUI = allProjects.filter(p => 
    ['CineVibe', 'AbegChop', 'Chamber Portal', 'Dream Nigeria'].includes(p.title)
  );

  return (
    <div className="space-y-24">
      {/* Header Block */}
      <section>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-6 uppercase">
          The Portfolio <br />
          <span className="text-indigo-500">Log.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-light">
          A three-tiered catalog tracking full-stack execution, web system integration, and lightweight client interfaces optimized for fluid user experiences.
        </p>
      </section>

      {/* Tier 01 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs sm:text-sm font-bold text-white tracking-[0.25em] uppercase">01. Commerce &amp; Financial Integration</h2>
           <div className="h-px grow bg-slate-800/80" />
        </div>
        <ProjectList projects={commerceSystems} />
      </section>

      {/* Tier 02 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs sm:text-sm font-bold text-white tracking-[0.25em] uppercase">02. Distributed Full-Stack Applications</h2>
           <div className="h-px grow bg-slate-800/80" />
        </div>
        <ProjectList projects={fullStackApps} />
      </section>

      {/* Tier 03 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs sm:text-sm font-bold text-white tracking-[0.25em] uppercase">03. Performance UI &amp; Data Directories</h2>
           <div className="h-px grow bg-slate-800/80" />
        </div>
        <ProjectList projects={performanceUI} />
      </section>
    </div>
  );
}