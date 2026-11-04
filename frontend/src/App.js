import React from 'react';
import Home from './pages/Home/Home'; // Apunta a la subcarpeta Home y su archivo Home.jsx
import Cart from './pages/Cart/Cart'; // Apunta a la subcarpeta Cart y su archivo Cart.jsx
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Home />
      <Cart />
    </CartProvider>
  );
}

export default App;