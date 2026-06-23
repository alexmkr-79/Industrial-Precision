import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Target, Maximize, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredCategories = CATEGORIES.slice(0, 8);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)]" />
        
        {/* SVG CNC Path Animation */}
        <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full max-w-[1200px] h-auto stroke-primary fill-none stroke-[2px]">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              d="M100,100 L900,100 L900,900 L100,900 Z M200,200 L800,200 M800,200 L800,800 M800,800 L200,800 M200,800 L200,200 M300,300 L700,300 L700,700 L300,700 Z M400,400 L600,400 M600,400 L600,600 M600,600 L400,600 M400,600 L400,400"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
              d="M500,100 L500,900 M100,500 L900,500 M250,250 L750,750 M750,250 L250,750"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-full text-primary font-mono text-xs tracking-widest uppercase">
              <Target className="w-3 h-3" />
              <span>Absolute Precision</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Industrial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Craftsmanship
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
              High-end CNC machining, laser routing, and bespoke metal fabrication for luxury architecture and interior design. Engineered with millimeter precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display tracking-widest uppercase font-semibold hover:bg-orange-600 transition-colors text-sm flex items-center justify-center gap-2" data-testid="link-hero-catalog">
                Explore Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 glass-panel hover:border-primary/50 text-foreground font-display tracking-widest uppercase font-semibold transition-all text-sm" data-testid="link-hero-contact">
                Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/10 bg-black/40 py-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4">
              <div className="text-3xl font-display font-bold text-primary mb-1">{PRODUCTS.length}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Precision Products</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-display font-bold text-white mb-1">{CATEGORIES.length}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Master Categories</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-display font-bold text-white mb-1">10+</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Years Expertise</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Luxury Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 relative z-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Engineering Domains</h2>
              <p className="text-muted-foreground font-mono text-sm max-w-xl">Select a category to explore our precision-machined components and structural elements.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-mono text-sm hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredCategories.map((category) => (
              <motion.div key={category.slug} variants={itemVariant}>
                <Link href={`/products/${category.slug}`}>
                  <div className="glass-panel glass-panel-hover p-8 h-full flex flex-col group cursor-pointer">
                    <h3 className="text-xl font-display text-white mb-3 group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-6">{category.description}</p>
                    <div className="mt-auto flex items-center justify-between text-xs font-mono text-secondary opacity-50 group-hover:opacity-100 transition-opacity">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/products" className="inline-flex items-center gap-2 text-primary font-mono text-sm border border-primary/30 px-6 py-3 rounded hover:bg-primary/10">
              View All Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">The Rachnakar Process</h2>
            <p className="text-muted-foreground font-mono text-sm">From concept to molecular precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />
            
            {[
              { icon: <Target className="w-6 h-6" />, title: "Consultation", desc: "Analyzing spatial requirements and material constraints." },
              { icon: <Cpu className="w-6 h-6" />, title: "CAD Design", desc: "Generating toolpaths and parametric 3D models." },
              { icon: <Layers className="w-6 h-6" />, title: "CNC Machining", desc: "Subtractive manufacturing with sub-millimeter tolerances." },
              { icon: <Maximize className="w-6 h-6" />, title: "Finishing", desc: "Surface treatment, polishing, and quality assurance." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 text-primary border-primary/20 shadow-[0_0_15px_rgba(255,107,0,0.1)]">
                  {step.icon}
                </div>
                <h4 className="text-lg font-display text-white mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Initiate a Project
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/70 mb-10">
            Connect with our engineering team to discuss material selection, structural feasibility, and production timelines for your bespoke requirements.
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary rounded animate-ping opacity-20" />
            <Link 
              href="/contact" 
              className="relative px-10 py-5 bg-primary text-primary-foreground font-display tracking-widest uppercase font-bold hover:bg-orange-500 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(255,107,0,0.4)]"
            >
              Start WhatsApp Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
