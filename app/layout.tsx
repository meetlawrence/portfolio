import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden"> {/* Add this */}
      <body className="bg-black text-slate-300 overflow-x-hidden relative"> {/* And this */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}