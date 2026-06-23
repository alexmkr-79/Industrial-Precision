import { Cpu, Maximize, Ruler, Zap, Database, Combine } from "lucide-react";

export default function About() {
  const specs = [
    { label: "Axis Milling", value: "3, 4 & 5-Axis CNC" },
    { label: "Laser Type", value: "Fiber & CO2 Lasers" },
    { label: "Max Bed Size", value: "3000mm x 1500mm" },
    { label: "Tolerance", value: "±0.05mm Precision" },
    { label: "Materials", value: "Metals, Wood, Polymers" },
    { label: "Software", value: "AutoCAD, SolidWorks, Rhino" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tight">
            Industrial <br/><span className="text-primary">Precision</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Rachnakar Design Studio operates at the intersection of heavy industrial machining and delicate architectural design. We don't just cut material; we engineer spatial experiences.
          </p>
        </div>

        {/* Narrative & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="glass-panel aspect-square relative overflow-hidden bg-zinc-900 border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Abstract mechanical graphic */}
              <div className="relative w-64 h-64 border border-white/10 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
                <div className="absolute w-full h-[1px] bg-white/10" />
                <div className="absolute h-full w-[1px] bg-white/10" />
                <div className="w-48 h-48 border border-white/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-32 h-32 border-2 border-primary/30 rounded-full" />
                <Cpu className="absolute text-primary/50 w-12 h-12" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Facility 01 / Operations
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-display text-white uppercase tracking-wide">The Atelier of the Future</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded on the belief that manufacturing capabilities should not limit architectural imagination, Rachnakar houses industrial-grade CNC routers, fiber lasers, and press brakes under one roof.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We collaborate directly with leading architects, interior designers, and luxury developers to translate complex parametric designs into physical, structural realities. Every screen, grille, and panel that leaves our facility has been subject to rigorous digital simulation and physical inspection.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <h3 className="font-display text-lg text-white mb-6 uppercase">Core Disciplines</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Zap className="text-primary w-4 h-4" /> Parametric & Algorithmic Design</li>
                <li className="flex items-center gap-3"><Combine className="text-primary w-4 h-4" /> Multi-material Fabrication</li>
                <li className="flex items-center gap-3"><Database className="text-primary w-4 h-4" /> Advanced Surface Finishing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Table */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-4">
            <h2 className="text-3xl font-display text-white uppercase">Technical Specifications</h2>
            <span className="font-mono text-secondary text-xs">V.2.04 SYSTEM DATA</span>
          </div>

          <div className="glass-panel overflow-hidden">
            <div className="grid grid-cols-2 border-b border-white/5 bg-black/50">
              <div className="p-4 font-mono text-xs text-muted-foreground">PARAMETER</div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-l border-white/5">CAPABILITY</div>
            </div>
            
            {specs.map((spec, idx) => (
              <div key={idx} className="grid grid-cols-2 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="p-4 font-mono text-sm text-white flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {spec.label}
                </div>
                <div className="p-4 font-mono text-sm text-secondary border-l border-white/5">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
