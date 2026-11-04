import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Agregar producto al carrito y abrirlo automáticamente
  const addToCart = (product, size, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, size, quantity }];
      }
    });
    setIsCartOpen(true); // Abre el carrito al agregar un producto
  };

  // Remover un producto individual
  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
  };

  // Vaciar todo el carrito al finalizar la compra
  const clearCart = () => {
    setCart([]);
  };

  // Calcular precio total
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Cantidad total de ítems para el contador del logo
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);