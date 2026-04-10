import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-indigo-400 transition-colors">
          meet<span className="text-indigo-500">Lawrence</span>
        </Link>
        <nav>
          <ul className="flex gap-10 text-sm font-medium tracking-wide">
            <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">HOME</Link></li>
            <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">ABOUT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}