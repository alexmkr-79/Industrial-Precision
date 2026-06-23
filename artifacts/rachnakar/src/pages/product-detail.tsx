import { useParams, Link } from "wouter";
import { PRODUCTS } from "@/data/catalog";
import { ProductCard } from "@/components/product-card";
import { openWhatsAppInquiry } from "@/utils/whatsapp";
import { ChevronRight, Ruler, Layers, Box, Settings, ArrowLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ProductDetail() {
  const params = useParams();
  const { productSlug } = params;

  const product = PRODUCTS.find(p => p.slug === productSlug);

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = PRODUCTS
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  const handleInquiry = () => {
    openWhatsAppInquiry({
      productName: product.title,
      category: product.categoryName,
      material: product.material,
      dimensions: product.dimensions,
      productUrl: window.location.href
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/products" className="hover:text-primary transition-colors">CATALOG</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/products/${product.categorySlug}`} className="hover:text-primary transition-colors">
          {product.categoryName.toUpperCase()}
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white truncate max-w-[200px]">{product.title.toUpperCase()}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        
        {/* Placeholder for Product Image / Diagram */}
        <div className="lg:col-span-7 aspect-square md:aspect-[4/3] glass-panel flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
          <Box className="w-32 h-32 text-white/10 mb-6" strokeWidth={1} />
          <div className="font-mono text-secondary/50 text-sm tracking-widest uppercase mb-2">CAD Model Preview</div>
          <div className="font-mono text-muted-foreground/50 text-xs max-w-sm">
            Component visualization rendering engine offline. Physical product exact to specifications listed.
          </div>
          
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="px-3 py-1 bg-black/50 border border-white/10 text-xs font-mono text-muted-foreground">TOP VIEW</span>
            <span className="px-3 py-1 bg-black/50 border border-white/10 text-xs font-mono text-muted-foreground">ISO VIEW</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 border border-primary/30 text-xs font-mono tracking-wider text-primary uppercase bg-primary/5">
              {product.categoryName}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase tracking-tight">
            {product.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="glass-panel p-4 flex items-start gap-4">
              <Layers className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-muted-foreground mb-1">MATERIAL SPEC</div>
                <div className="text-sm font-medium text-white">{product.material}</div>
              </div>
            </div>
            <div className="glass-panel p-4 flex items-start gap-4">
              <Ruler className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-muted-foreground mb-1">DIMENSIONS</div>
                <div className="text-sm font-medium text-white">{product.dimensions}</div>
              </div>
            </div>
            <div className="glass-panel p-4 flex items-start gap-4 sm:col-span-2">
              <Settings className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-muted-foreground mb-1">MANUFACTURING TOLERANCE</div>
                <div className="text-sm font-medium text-white">±0.05mm precision via Multi-axis CNC</div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleInquiry}
            className="w-full py-5 bg-primary text-primary-foreground font-display tracking-widest uppercase font-bold hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] flex justify-center items-center gap-3"
            data-testid="button-inquire-detail"
          >
            Inquire on WhatsApp
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display text-white uppercase">Related Components</h2>
            <Link href={`/products/${product.categorySlug}`} className="text-sm font-mono text-primary flex items-center gap-2 hover:underline">
              View All <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
