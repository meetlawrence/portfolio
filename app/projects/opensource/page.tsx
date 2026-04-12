import ProjectList from '@/components/ProjectList';

const openSource = [
  {
    title: 'Edrealz Xtiches',
    status: 'Production',
    description: 'Contributing to the digital fashion landscape with an automated inventory and payment engine.',
    technologies: ['Next.js', 'PostgreSQL', 'Paystack'],
    link: '#'
  }
];

export default function OpenSourcePage() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
          Open Source
        </h2>
        <p className="text-slate-400 max-w-xl">
          Code built for the public. I believe in transparent logic and modular 
          architecture that others can build upon.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-black text-white tracking-tighter mb-4">Coming Soon!</h3>
      </section>

      {/* <ProjectList projects={openSource} /> */}
    </div>
  );
}