import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="group flex flex-col leading-none hover:text-indigo-400 transition-colors">
          {/* Main Brand */}
          <span className="text-xl font-bold text-white">
            meet<span className="text-indigo-500 group-hover:text-indigo-400">Lawrence</span>
          </span>

          {/* Sub-text */}
          <span className="text-[10px] font-mono italic uppercase tracking-[0.2em] text-slate-300 mt-1">
            Another Nigerian
          </span>
        </Link>
        <nav>
          <ul className="flex gap-2 text-sm font-medium tracking-wide sm:gap-10">
            <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">HOME</Link></li>
            <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">ABOUT</Link></li>
            <li><Link href="/projects" className="text-slate-400 hover:text-white transition-colors">PROJECTS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}