import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductDetail = ({ product, onClose }) => {
  // Verificamos si la categoría es ropa (Clothing) o si el título/categoría requiere talle
  const isClothing = product.category?.toLowerCase() === 'clothing';
  const isShoes = product.category?.toLowerCase() === 'shoes';

  // Definimos talles según el tipo de producto
  const sizes = isClothing ? ['S', 'M', 'L', 'XL'] : isShoes ? ['36', '37', '38', '39'] : ['Único'];
  
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    // Si es accesorio sin talle relevante, podemos enviarlo como "Único" o null
    addToCart(product, isClothing || isShoes ? selectedSize : 'Único');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-2xl bg-[#F8F6F2] p-6 text-[#242321] shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
        <button className="absolute right-4 top-4 text-2xl font-light hover:text-[#A18D75]" onClick={onClose}>
          &times;
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden bg-[#E9E5DE]">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A18D75]">{product.category}</span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl">{product.title}</h2>
            <p className="mt-2 text-lg font-medium">${product.price.toLocaleString("es-AR")}</p>

            {(isClothing || isShoes) && (
              <div className="mt-6">
                <label className="block text-[10px] tracking-[0.15em] text-[#77736D]">
                  {isClothing ? 'SELECCIONAR TALLE:' : 'SELECCIONAR NÚMERO:'}
                </label>
                <div className="mt-3 flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`h-10 w-12 border text-xs tracking-wider transition ${
                        selectedSize === size
                          ? 'border-[#242321] bg-[#242321] text-white'
                          : 'border-[#E9E5DE] bg-transparent text-[#242321] hover:border-[#242321]'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className="mt-8 w-full bg-[#242321] py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#A18D75]"
              onClick={handleAdd}
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;