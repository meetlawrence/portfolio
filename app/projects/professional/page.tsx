import ProjectList from '@/components/ProjectList';

const professionalWork = [
  {
    title: 'Edrealz Xtiches',
    status: 'In Development',
    description: 'Contributing to the digital fashion landscape with an automated inventory and payment engine.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Paystack', 'Tailwind CSS']
  },
  {
    title: 'TheEliteGlam',
    status: 'In Development',
    description: 'A high-performance fashion commerce architecture featuring a custom-built content management engine, fluid asset optimization layers, and an optimized, mobile-first design built to minimize latency.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Paystack', 'Tailwind CSS']
  }
];

export default function ProfessionalPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="border-l-2 border-indigo-500 pl-4 sm:pl-6">
  <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
    [ Track_01 // Production ]
  </div>
  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase mb-3">
    Enterprise &amp; Deployment
  </h2>
  <p className="text-slate-400 max-w-xl text-sm leading-relaxed font-normal">
    Live production systems built to handle real user traffic. Specializing in secure financial 
    gateways, custom server-side inventory logic, and modular API design.
  </p>
</section>

      {/* Projects Display Section */}
      <section>
        <ProjectList projects={professionalWork} />
      </section>
    </div>
  );
}