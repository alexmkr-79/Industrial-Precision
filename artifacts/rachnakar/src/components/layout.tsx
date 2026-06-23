import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Ensure dark mode is applied to html
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navLinks = [
    { href: "/", label: "Studio" },
    { href: "/products", label: "Catalog" },
    { href: "/about", label: "Capabilities" },
    { href: "/contact", label: "Inquire" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "glass-panel border-white/10 py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-3 group" data-testid="link-home">
            <img 
              src="/rachnakar-logo.png" 
              alt="Rachnakar Design Studio" 
              className="h-8 w-auto filter invert opacity-90 group-hover:opacity-100 transition-opacity" 
            />
            <span className="font-display font-bold text-lg tracking-widest uppercase hidden sm:block">
              Rachnakar
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden relative z-50 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-4 flex flex-col"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 text-2xl font-display uppercase tracking-widest border-b border-white/5 ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 bg-black/50 mt-auto">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/rachnakar-logo.png" 
                alt="Rachnakar" 
                className="h-10 w-auto filter invert opacity-50 mb-6" 
              />
              <p className="text-muted-foreground max-w-sm">
                Precision engineering and luxury craftsmanship. We transform raw materials into architectural masterpieces through advanced CNC machining and laser routing.
              </p>
            </div>
            
            <div>
              <h4 className="font-display tracking-widest text-sm text-foreground mb-6">Capabilities</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>CNC Metal Milling</li>
                <li>Architectural Grilles</li>
                <li>3D Jali Cuts</li>
                <li>Laser Art Installations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display tracking-widest text-sm text-foreground mb-6">Connect</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>Inquiries</li>
                <li>Technical Specs</li>
                <li>Material Library</li>
                <li>Studio Visit</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
            <p>&copy; {new Date().getFullYear()} Rachnakar Design Studio. All rights reserved.</p>
            <p>ISO 9001:2015 Certified Facility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
