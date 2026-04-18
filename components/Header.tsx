// components/Header.tsx
import Link from 'next/link';
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu"; // Import the new component

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-slate-800 text-white">
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
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Nav (Hidden on Desktop) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}