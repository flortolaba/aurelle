import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  ShoppingBag,
  Menu,
  ChevronRight,
} from "lucide-react";
import { useCart } from '../../context/CartContext';
import ProductDetail from '../ProductDetail/ProductDetail';

const categories = [
  {
    name: "Clothing",
    subtitle: "Prendas para cada ocasión",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
  },
  {
    name: "Bags",
    subtitle: "Detalles que hacen la diferencia",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
  },
  {
    name: "Shoes",
    subtitle: "El toque final",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900",
  },
  {
    name: "Accessories",
    subtitle: "Pequeños detalles, gran estilo",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900",
  },
];

const products = [
  {
    id: 1,
    title: "Essential Blazer",
    category: "Clothing",
    price: 89500,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900",
    label: "BEST SELLER",
  },
  {
    id: 2,
    title: "Classic Shoulder Bag",
    category: "Bags",
    price: 72000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
    label: "NEW",
  },
  {
    id: 3,
    title: "Minimal Heels",
    category: "Shoes",
    price: 68000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900",
    label: "",
  },
  {
    id: 4,
    title: "Golden Details",
    category: "Accessories",
    price: 32500,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900",
    label: "EXCLUSIVE",
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

const Home = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#242321]">

      {/* Announcement bar */}
      <div className="bg-[#242321] px-4 py-2 text-center text-[10px] tracking-[0.2em] text-white sm:text-xs">
        ENVÍOS A TODO EL PAÍS · NUEVA COLECCIÓN DISPONIBLE
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#E9E5DE] bg-[#F8F6F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-12">

          <button className="lg:hidden" aria-label="Abrir menú">
            <Menu size={21} strokeWidth={1.5} />
          </button>

          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.16em] lg:flex">
            <a href="#categories" className="transition hover:text-[#A18D75]">
              Colección
            </a>
            <a href="#products" className="transition hover:text-[#A18D75]">
              Productos
            </a>
            <a href="#about" className="transition hover:text-[#A18D75]">
              Nosotros
            </a>
          </nav>

          <a href="/" className="absolute left-1/2 -translate-x-1/2 text-center">
            <span className="block font-serif text-2xl tracking-[0.13em] sm:text-3xl">
              AURELLE
            </span>
            <span className="block text-[8px] tracking-[0.48em]">
              STUDIO
            </span>
          </a>

          <div className="flex items-center gap-5">
            <button aria-label="Buscar">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Carrito" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B9A48A] text-[9px] text-white">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="relative min-h-[570px] overflow-hidden sm:min-h-[680px]">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000"
            alt="Editorial de moda femenina"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="relative mx-auto flex min-h-[570px] max-w-[1440px] items-center px-7 sm:min-h-[680px] lg:px-20">
            <div className="max-w-xl text-white">
              <p className="mb-5 text-[10px] tracking-[0.35em] sm:text-xs">
                THE NEW COLLECTION · 2026
              </p>

              <h1 className="font-serif text-5xl leading-[1.1] sm:text-7xl lg:text-8xl">
                Your style.
                <br />
                Your essence.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/90">
                Descubrí una selección de prendas y accesorios
                pensados para acompañar tu estilo todos los días.
              </p>

              <a
                href="#products"
                className="mt-9 inline-flex items-center gap-5 border border-white px-7 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-[#242321]"
              >
                EXPLORAR COLECCIÓN
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-5 py-20 text-center sm:py-28">
          <p className="text-[10px] tracking-[0.3em] text-[#A18D75]">
            DISCOVER AURELLE
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            Elegance in every detail.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#77736D]">
            Creemos que el estilo está en los detalles.
            Explorá piezas seleccionadas para crear combinaciones
            que reflejen tu personalidad.
          </p>
        </section>

        {/* Categories */}
        <section id="categories" className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#A18D75]">
                FIND YOUR STYLE
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Explore categories
              </h2>
            </div>

            <a
              href="#products"
              className="hidden items-center gap-2 text-[10px] tracking-[0.15em] sm:flex"
            >
              VIEW ALL <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                href="#products"
                key={category.name}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#E9E5DE]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <h3 className="font-serif text-xl">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-[#858078]">
                      {category.subtitle}
                    </p>
                  </div>
                  <ChevronRight size={17} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-[#EFEBE4] px-5 py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 text-center">
              <p className="text-[10px] tracking-[0.3em] text-[#A18D75]">
                OUR SELECTION
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Selected for you
              </h2>
              <p className="mt-3 text-sm text-[#77736D]">
                Piezas que merecen un lugar en tu guardarropa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-9 lg:grid-cols-4 lg:gap-x-7">
              {products.map((product) => (
                <article 
                  key={product.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#E4DFD6]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {product.label && (
                      <span className="absolute left-3 top-3 bg-[#F8F6F2] px-3 py-2 text-[8px] tracking-[0.15em]">
                        {product.label}
                      </span>
                    )}
                  </div>

                  <div className="pt-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#999187]">
                      {product.category}
                    </p>
                    <h3 className="mt-2 font-serif text-lg">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-xs">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="#categories"
                className="inline-flex items-center gap-4 border border-[#242321] px-8 py-4 text-[10px] tracking-[0.2em] transition hover:bg-[#242321] hover:text-white"
              >
                DISCOVER ALL PRODUCTS
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Brand banner */}
        <section id="about" className="px-5 py-24 text-center sm:py-32">
          <p className="text-[10px] tracking-[0.3em] text-[#A18D75]">
            THE AURELLE PHILOSOPHY
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
            Style is not about following.
            <span className="italic text-[#A18D75]"> It's about expressing.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#77736D]">
            Una mirada contemporánea sobre la moda, donde cada pieza
            tiene su propio carácter.
          </p>
        </section>

        {/* Newsletter */}
        <section className="bg-[#242321] px-5 py-20 text-center text-white">
          <p className="text-[10px] tracking-[0.3em] text-[#C9BBA8]">
            STAY CONNECTED
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Be part of AURELLE.
          </h2>
          <p className="mt-4 text-sm text-white/60">
            Descubrí novedades, colecciones y lanzamientos.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-md border-b border-white/50"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="min-w-0 flex-1 bg-transparent px-2 py-4 text-sm outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              className="px-3 text-[10px] tracking-[0.15em] transition hover:text-[#C9BBA8]"
            >
              SUSCRIBIRME
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#F8F6F2] px-5 py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 border-b border-[#E9E5DE] pb-10 sm:flex-row">

          <div className="text-center sm:text-left">
            <h2 className="font-serif text-3xl tracking-[0.13em]">
              AURELLE
            </h2>
            <p className="mt-1 text-[8px] tracking-[0.48em]">
              STUDIO
            </p>
          </div>

          <div className="flex gap-7 text-[10px] uppercase tracking-[0.15em]">
            <a href="#categories" className="hover:text-[#A18D75]">
              Colección
            </a>
            <a href="#about" className="hover:text-[#A18D75]">
              Nosotros
            </a>
            <a href="mailto:contacto@aurellestudio.com" className="hover:text-[#A18D75]">
              Contacto
            </a>
          </div>

          <a
            href="#"
            aria-label="Instagram"
            className="text-[#242321] transition hover:text-[#A18D75]"
          >
            <span className="text-xs font-semibold tracking-wider">IG</span>
          </a>

        </div>

        <p className="pt-7 text-center text-[9px] tracking-[0.15em] text-[#999187]">
          © 2026 AURELLE STUDIO · ALL RIGHTS RESERVED
        </p>
      </footer>

      {/* Modal para ver detalle y agregar al carrito */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
};

export default Home;