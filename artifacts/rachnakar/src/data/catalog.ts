export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  material: string;
  dimensions: string;
  categorySlug: string;
  categoryName: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { slug: "architectural-grilles", name: "Architectural Grilles", description: "Precision-machined ventilation and decorative grilles for luxury interiors" },
  { slug: "3d-jali-cuts", name: "3D Jali Cuts", description: "Intricate three-dimensional lattice screens for spatial design" },
  { slug: "metal-milling", name: "Metal Milling", description: "CNC-precision milled metal components and structural elements" },
  { slug: "wood-routing", name: "Wood Routing", description: "High-fidelity CNC routed wood panels and decorative elements" },
  { slug: "signage", name: "Precision Signage", description: "Laser-cut and routed signage for architectural and retail spaces" },
  { slug: "facade-panels", name: "Facade Panels", description: "Exterior cladding panels with geometric precision patterns" },
  { slug: "laser-art", name: "Laser Art Installations", description: "Large-scale bespoke laser-cut artistic installations" },
  { slug: "furniture-components", name: "Furniture Components", description: "Precision-machined furniture hardware and structural components" },
  { slug: "staircase-elements", name: "Staircase Elements", description: "Balustrades, treads, and decorative staircase metalwork" },
  { slug: "ceiling-panels", name: "Ceiling Panels", description: "Suspended and drop ceiling panels with precision-cut patterns" },
  { slug: "partition-screens", name: "Partition Screens", description: "Room dividers and spatial screens for commercial interiors" },
  { slug: "door-hardware", name: "Door Hardware", description: "Custom handles, hinges, and door architectural elements" },
  { slug: "garden-structures", name: "Garden Structures", description: "Outdoor CNC-fabricated pergolas, gates, and garden elements" },
  { slug: "industrial-components", name: "Industrial Components", description: "Heavy-duty machined parts for industrial and commercial applications" },
  { slug: "custom-fabrication", name: "Custom Fabrication", description: "Fully bespoke design-to-manufacture solutions" },
];

const MATERIALS = [
  "SS304 Stainless Steel", 
  "MS Mild Steel", 
  "Aluminum 6061", 
  "CNC-Routed MDF", 
  "Marine Plywood", 
  "Corten Steel", 
  "Brass", 
  "Bronze"
];

const DIMENSIONS = [
  "1200mm x 600mm x 2mm",
  "2400mm x 1200mm x 3mm",
  "600mm x 600mm x 5mm",
  "1000mm x 1000mm x 1.5mm",
  "800mm x 400mm x 12mm",
  "2000mm x 1000mm x 18mm",
  "Customizable based on structural requirements"
];

const PREFIXES = ["Hexagonal", "Arabesque", "Geometric", "Parametric", "Minimalist", "Acoustic", "Lattice", "Voronoi", "Fractal"];
const NOUNS = ["Grille", "Panel", "Screen", "Component", "Module", "Structure", "Matrix", "Mesh"];

export const PRODUCTS: Product[] = [];

let idCounter = 1;
for (const cat of CATEGORIES) {
  // Generate exactly 15 products per category (225 total)
  for (let i = 1; i <= 15; i++) {
    const prefix = PREFIXES[(idCounter + i) % PREFIXES.length];
    const noun = NOUNS[(idCounter * i) % NOUNS.length];
    const code = `${cat.name.substring(0, 2).toUpperCase()}-${idCounter.toString().padStart(3, '0')}`;
    const title = `${prefix} ${noun} ${code}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    PRODUCTS.push({
      id: idCounter.toString(),
      slug,
      title,
      description: `Premium grade ${title} manufactured using high-precision CNC machinery. Engineered for exact tolerances and superior finish. Ideal for luxury architectural and interior design applications requiring sophisticated aesthetics and durability.`,
      material: MATERIALS[idCounter % MATERIALS.length],
      dimensions: DIMENSIONS[i % DIMENSIONS.length],
      categorySlug: cat.slug,
      categoryName: cat.name
    });
    idCounter++;
  }
}
