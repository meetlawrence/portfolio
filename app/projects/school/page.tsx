import ProjectList from '@/components/ProjectList';

const schoolProjects = [
  {
    title: 'AbegChop',
    description: 'Optimized for the Calabar campus environment. Focused on data-fetching efficiency and mobile responsiveness.',
    technologies: ['JavaScript', 'JSON', 'Performance'],
    link: 'https://meetlawrence.github.io/wdd231/project/index.html'
  },
  {
    title: 'CineVibe',
    description: 'Academic exploration of Asynchronous JavaScript and REST API integration.',
    technologies: ['API', 'Asynchronous JS', 'CSS3'],
    link: 'https://meetlawrence.github.io/wdd330/cinevibe/index.html'
  }
];

export default function SchoolPage() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
          Academic Labs
        </h2>
        <p className="text-slate-400 max-w-xl">
          Where theory meets execution. These projects represent deep dives into 
          data structures, API management, and responsive architecture.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-black text-white tracking-tighter mb-4">Coming Soon!</h3>
      </section>


      <div className="opacity-80">
        {/* <ProjectList projects={schoolProjects} /> */}
      </div>
    </div>
  );
}