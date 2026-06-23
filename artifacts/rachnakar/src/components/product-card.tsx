import { Link } from "wouter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Ruler } from "lucide-react";
import type { Product } from "@/data/catalog";
import { openWhatsAppInquiry } from "@/utils/whatsapp";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleInquiry = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product page when clicking the inquiry button
    openWhatsAppInquiry({
      productName: product.title,
      category: product.categoryName,
      material: product.material,
      dimensions: product.dimensions,
      productUrl: window.location.origin + `/products/${product.categorySlug}/${product.slug}`
    });
  };

  return (
    <Link href={`/products/${product.categorySlug}/${product.slug}`} data-testid={`link-product-${product.slug}`}>
      <motion.div
        style={{ perspective: 1000 }}
        className="h-full"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel glass-panel-hover h-full flex flex-col p-6 cursor-pointer group"
          data-testid={`card-product-${product.slug}`}
        >
          <div className="mb-4">
            <span className="inline-block px-2 py-1 border border-white/10 rounded-sm text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-white/5 mb-3">
              {product.categoryName}
            </span>
            <h3 className="font-display text-lg tracking-wide uppercase text-foreground group-hover:text-primary transition-colors">
              {product.title}
            </h3>
          </div>
          
          <div className="flex-grow">
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {product.description}
            </p>
          </div>

          <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
            <div className="flex items-center gap-2 text-xs font-mono text-secondary">
              <span className="opacity-50">MAT:</span>
              <span className="truncate">{product.material}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Ruler className="w-3 h-3 opacity-50" />
              <span className="truncate">{product.dimensions}</span>
            </div>
          </div>

          <div className="mt-auto">
            <button 
              onClick={handleInquiry}
              className="w-full py-2.5 px-4 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-sm font-medium transition-all flex items-center justify-center gap-2 text-foreground group-hover:text-primary"
              data-testid={`button-inquire-${product.slug}`}
            >
              Inquire on WhatsApp
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
