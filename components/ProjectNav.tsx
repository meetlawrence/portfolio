'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const projectLinks = [
  { name: 'Overview', href: '/projects' },
  { name: 'Professional Work', href: '/projects/professional' },
  { name: 'School Projects', href: '/projects/school' },
];

export default function ProjectNav() {
  const pathname = usePathname();

  return (
    <nav className="flex md:flex-col gap-6">
      {projectLinks.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-bold transition-all duration-300 flex items-center gap-2 group ${
              isActive ? 'text-white' : 'text-slate-500 hover:text-indigo-400'
            }`}
          >
            {/* Active Indicator Dot */}
            <span className={`h-1 w-1 rounded-full bg-indigo-500 transition-all duration-300 ${
              isActive ? 'opacity-100 scale-125 shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'opacity-0 scale-0'
            }`} />
            
            <span className={isActive ? 'translate-x-1 transition-transform' : ''}>
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}