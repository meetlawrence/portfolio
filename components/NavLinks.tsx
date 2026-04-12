'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5 sm:gap-8">
      {navItems.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative group flex flex-col items-center transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {/* Mono-style label */}
            {/* <span className="font-mono text-[10px] tracking-widest uppercase mb-1">
              {isActive ? '// ACTIVE' : link.name}
            </span> */}
            
            {/* The Link Text */}
            <span className="text-sm font-bold uppercase tracking-tighter">
              {isActive ? link.name : link.name}
            </span>

            {/* Indigo Glow Underline (Visible when active or on hover) */}
            <span 
              className={`absolute -bottom-2 h-[2px] transition-all duration-500 rounded-full ${
                isActive 
                  ? 'w-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]' 
                  : 'w-0 bg-slate-800 group-hover:w-full'
              }`} 
            />
          </Link>
        );
      })}
    </nav>
  );
}