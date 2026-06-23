import { useParams, Link } from "wouter";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { ProductCard } from "@/components/product-card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Catalog() {
  const params = useParams();
  const activeCategorySlug = params.categorySlug;

  const activeCategory = activeCategorySlug 
    ? CATEGORIES.find(c => c.slug === activeCategorySlug)
    : null;

  const displayProducts = activeCategorySlug
    ? PRODUCTS.filter(p => p.categorySlug === activeCategorySlug)
    : PRODUCTS;

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row gap-12 min-h-screen">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-32">
          <h2 className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-6 pb-2 border-b border-white/10">
            Categories
          </h2>
          <nav className="flex flex-col gap-2">
            <Link 
              href="/products"
              className={`py-2 px-3 text-sm font-medium border-l-2 transition-colors ${
                !activeCategorySlug 
                  ? "border-primary text-primary bg-primary/5" 
                  : "border-transparent text-foreground hover:border-white/20 hover:bg-white/5"
              }`}
            >
              All Products
            </Link>
            {CATEGORIES.map(category => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className={`py-2 px-3 text-sm font-medium border-l-2 transition-colors ${
                  activeCategorySlug === category.slug
                    ? "border-primary text-primary bg-primary/5" 
                    : "border-transparent text-muted-foreground hover:border-white/20 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary">CATALOG</Link>
            {activeCategory && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">{activeCategory.name.toUpperCase()}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4 uppercase">
            {activeCategory ? activeCategory.name : "Complete Catalog"}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {activeCategory 
              ? activeCategory.description 
              : "Browse our complete collection of precision-machined industrial and architectural components."}
          </p>
          <div className="mt-4 text-xs font-mono text-secondary">
            SHOWING {displayProducts.length} PRODUCTS
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          key={activeCategorySlug || 'all'}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {displayProducts.map(product => (
            <motion.div key={product.id} variants={itemVariant}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
