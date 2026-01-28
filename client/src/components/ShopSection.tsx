import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* ECDLI Shop Section - Estilo exacto del original
   - Fondo claro/blanco
   - Título con tracking-tighter
   - Cards de productos con imagen
   - Botones de navegación circulares
*/

const categories = ["All", "Books", "Digital", "Journals", "Supplements"];

const products = [
  {
    id: 1,
    category: "Digital",
    name: "Money Masters ®",
    price: "$249",
    image: "/images/hero-speaker.jpg",
  },
  {
    id: 2,
    category: "Digital",
    name: "Mastering Influence ®",
    price: "$249",
    image: "/images/business-meeting.jpg",
  },
  {
    id: 3,
    category: "Digital",
    name: "Creating Lasting Change ™",
    price: "$249",
    image: "/images/coaching-mountain.jpg",
  },
  {
    id: 4,
    category: "Digital",
    name: "Ultimate Edge ®",
    price: "$249",
    image: "/images/event-crowd.jpg",
  },
  {
    id: 5,
    category: "Books",
    name: "Awaken the Giant Within",
    price: "$19.95",
    image: "/images/couple-sunset.jpg",
  },
  {
    id: 6,
    category: "Books",
    name: "Unlimited Power",
    price: "$17.95",
    image: "/images/hero-speaker.jpg",
  },
];

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(filteredProducts.length - 1, prev + 1));
  };

  return (
    <section className="theme--light py-16 md:py-24">
      <div className="wrapper">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span className="font-mono text-xs uppercase text-black/50 tracking-wide">
                SHOP
              </span>
            </div>
            <h2 className="text-black text-3xl md:text-4xl font-medium tracking-tighter">
              Explore products & programs
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#shop"
              className="group flex gap-2 items-center font-medium opacity-60 hover:opacity-100 duration-500 text-black text-sm"
            >
              Shop all
              <ChevronRight className="h-5 w-5 duration-500 group-hover:translate-x-1" />
            </a>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="flex aspect-square w-10 items-center justify-center rounded-full bg-black text-white duration-500 hover:bg-black/80"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                className="flex aspect-square w-10 items-center justify-center rounded-full bg-black text-white duration-500 hover:bg-black/80"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                  ? "bg-black text-white"
                  : "bg-transparent border border-black/20 text-black hover:border-black/40"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="overflow-hidden -mx-5 px-5">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 290}px)`,
            }}
          >
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href="#product"
                className="flex-shrink-0 w-[260px] group"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-mono uppercase tracking-wide px-3 py-1.5 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-lg font-medium tracking-tight line-clamp-2">
                      {product.name}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-black/60 text-sm font-medium">
                    {product.name}
                  </span>
                  <span className="text-black text-sm font-medium">
                    {product.price}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Link */}
        <a
          href="#shop"
          className="flex md:hidden items-center justify-center gap-2 text-black text-sm font-medium opacity-60 hover:opacity-100 duration-500 mt-8"
        >
          Shop all
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
