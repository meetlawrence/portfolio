// components/Header.tsx
import Link from 'next/link';
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu"; // Import the new component

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-xl font-bold text-white">
            meet<span className="text-indigo-500">Lawrence</span>
          </span>
          <span className="text-[10px] font-mono italic uppercase tracking-[0.2em] text-slate-300 mt-1">
            Another Nigerian
          </span>
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        {/* Mobile Nav (Hidden on Desktop) */}
        <MobileMenu />

      </div>
    </header>
  );
}