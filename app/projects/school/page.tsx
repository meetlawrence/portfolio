import ProjectList from '@/components/ProjectList';

const schoolProjects = [
  {
    title: 'AbegChop',
    description: 'A mobile-first food discovery platform optimized for low-bandwidth environments, enabling students to navigate campus-specific culinary options.',
    technologies: ['JavaScript', 'JSON', 'CSS Grid/Flexbox', 'Performance Optimization'],
    link: 'https://meetlawrence.github.io/wdd231/project/index.html'
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
    link: 'https://cse340-kl7q.onrender.com/'
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

export default function SchoolPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="border-l-2 border-indigo-500 pl-4 sm:pl-6">
        <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
          [ Track_02 // Labs ]
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase mb-3">
          Systems &amp; Architecture
        </h2>
        <p className="text-slate-400 max-w-xl text-sm leading-relaxed font-normal">
          Architectural milestones built during full-stack development tracks. Focus areas include 
          relational database normalization, asynchronous data streams, and secure local session states.
        </p>
      </section>

      {/* Projects Display Section */}
      <section>
        <ProjectList projects={schoolProjects} />
      </section>
    </div>
  );
}