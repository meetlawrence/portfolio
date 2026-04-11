export default function Footer() {  
  return (
    <footer className="bg-black text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-white font-bold mb-1">
            meet<span className="text-indigo-500">Lawrence</span>
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social / Quick Links */}
        <div className="flex gap-8 text-sm font-medium">
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:lokon4@byupathway.edu" 
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}