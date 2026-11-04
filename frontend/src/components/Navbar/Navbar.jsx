import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#F8F6F2] border-b border-[#E9E5DE]">
      <h1 className="font-serif text-xl tracking-widest">AURELLE STUDIO</h1>
      
      {/* Botón / Icono del Carrito */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="relative flex items-center gap-2 text-sm tracking-wider uppercase"
      >
        <span>Bolsa</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#242321] text-[10px] text-white">
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;