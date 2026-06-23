import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This form is for demonstration. Please use the WhatsApp inquiry button for real communications.");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Consultation <span className="text-primary">&</span> Inquiries
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Direct access to our engineering and estimation teams. We review architectural plans, CAD files, and provide comprehensive manufacturing feasibility reports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 h-full flex flex-col justify-center">
              
              <div className="mb-12">
                <h3 className="font-display text-xl text-white uppercase mb-6">Primary Channel</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  For the fastest response regarding product pricing, custom manufacturing, or sending CAD files.
                </p>
                
                <div className="relative inline-block w-full">
                  <div className="absolute -inset-1 bg-primary rounded animate-pulse opacity-20" />
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-full py-4 bg-primary text-primary-foreground font-display tracking-widest uppercase font-bold hover:bg-orange-500 transition-colors flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                  >
                    Connect on WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded glass-panel flex items-center justify-center shrink-0 border-white/5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">FACILITY</div>
                    <div className="text-sm text-white">Plot 42, Industrial Estate Phase II<br/>Sector 5, Advanced Mfg Zone<br/>New Delhi, India 110020</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded glass-panel flex items-center justify-center shrink-0 border-white/5">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">VOICE</div>
                    <div className="text-sm text-white">+91 98765 43210<br/>Mon-Fri, 09:00 - 18:00 IST</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded glass-panel flex items-center justify-center shrink-0 border-white/5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">DATA TRANSMISSION</div>
                    <div className="text-sm text-white font-mono">cad@rachnakardesign.com</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12">
              <h2 className="text-2xl font-display text-white uppercase mb-2">Project Specification</h2>
              <p className="text-sm text-muted-foreground mb-8">Submit details for structured evaluation.</p>

              <form onSubmit={handleFakeSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground">CLIENT / FIRM NAME</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                      placeholder="Acme Architecture"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                      placeholder="design@acme.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">PROJECT TYPE / CATEGORY</label>
                  <select className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm appearance-none cursor-pointer">
                    <option>Architectural Grilles</option>
                    <option>Facade Panels</option>
                    <option>Custom Fabrication</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">TECHNICAL REQUIREMENTS</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm resize-none"
                    placeholder="Provide material preferences, dimensions, and approximate quantities..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="px-8 py-4 glass-panel border-white/10 hover:border-primary/50 text-white font-display tracking-widest uppercase text-sm transition-all"
                >
                  Transmit Data
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
