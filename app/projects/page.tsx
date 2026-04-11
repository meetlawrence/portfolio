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
    description: 'A full-stack e-commerce engine for a premier fashion house, featuring automated inventory state management and secure Paystack payment orchestration.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Paystack API'],
    link: '#' 
  },
  {
    title: 'DreamNigeria',
    description: 'A high-fidelity tourism gateway focused on fluid UI/UX transitions and responsive asset delivery to showcase national landmarks.',
    technologies: ['JavaScript', 'JSON', 'CSS Grid', 'Performance Optimization'],
    link: 'https://meetlawrence.github.io/wdd131/project/index.html' 
  },
  {
    title: 'AbegChop',
    description: 'A mobile-first food discovery platform engineered for low-bandwidth campus environments, utilizing optimized JSON data structures for rapid indexing.',
    technologies: ['JavaScript', 'JSON', 'CSS Grid', 'Performance Optimization'],
    link: 'https://meetlawrence.github.io/wdd231/project/index.html'
  },
  {
    title: 'CineVibe',
    description: 'A cinematic exploration tool utilizing asynchronous logic and third-party REST APIs to deliver high-performance movie data visualization.',
    technologies: ['JavaScript', 'REST APIs', 'Asynchronous Programming', 'CSS3'],
    link: 'https://meetlawrence.github.io/wdd330/cinevibe/index.html'
  },
  {
    title: 'Chamber Portal',
    description: 'A digitized business directory for the Calabar Chamber of Commerce, focusing on responsive architecture and member data management.',
    technologies: ['JavaScript', 'JSON', 'Responsive Design', 'Local Storage'],
    link: 'https://meetlawrence.github.io/wdd231/chamber/index.html'
  }
];

export default function ProjectsOverview() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-black text-white tracking-tighter mb-6">
          The Portfolio <br />
          <span className="text-indigo-500">Log.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          A log of technical executions. Each entry represents a specific challenge in 
          performance optimization, database architecture, or user experience engineering.
        </p>
      </section>

      <ProjectList projects={allProjects} />
    </div>
  );
}