import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/api';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, totalPrice, clearCart } = useCart();
  
  // Estado para alternar entre ver los productos ('cart') y el formulario ('checkout')
  const [step, setStep] = useState('cart');
  
  // Estado con los datos personales del comprador
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  if (!isCartOpen) return null;

  const handleInputChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();

    if (!customerData.name || !customerData.email) {
      alert('Por favor completa al menos tu Nombre y Email');
      return;
    }

    try {
      // Enviamos el carrito, el precio total y los datos personales a la API
      const result = await createOrder(cart, totalPrice, customerData);
      alert(`¡Compra realizada con éxito! Número de Orden: #${result.orderId}`);
      
      // Limpiar y resetear el carrito
      if (clearCart) clearCart();
      setStep('cart');
      setCustomerData({ name: '', email: '', phone: '', address: '' });
      setIsCartOpen(false);
    } catch (error) {
      alert(`Error al procesar la compra: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}>
      <div className="flex h-full w-full max-w-md flex-col bg-[#F8F6F2] p-6 text-[#242321] shadow-xl" onClick={(e) => e.stopPropagation()}>
        
        {/* ENCABEZADO */}
        <div className="flex items-center justify-between border-b border-[#E9E5DE] pb-4">
          <h3 className="font-serif text-xl tracking-wider">
            {step === 'cart' ? 'TU BOLSA DE COMPRAS' : 'DATOS DEL COMPRADOR'}
          </h3>
          <button className="text-2xl font-light" onClick={() => { setStep('cart'); setIsCartOpen(false); }}>&times;</button>
        </div>

        {/* VISTA 1: CARRITO DE COMPRAS */}
        {step === 'cart' ? (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {cart.length === 0 ? (
                <p className="mt-8 text-center text-sm text-[#77736D]">Tu bolsa está vacía.</p>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 border-b border-[#E9E5DE] py-4">
                    <img src={item.image} alt={item.title} className="h-20 w-16 object-cover" />
                    <div className="flex-1">
                      <h4 className="font-serif text-base">{item.title}</h4>
                      <p className="text-xs text-[#77736D]">
                        {item.size && item.size !== 'Único' ? `Talle: ${item.size} | ` : ''}Cantidad: {item.quantity}
                      </p>
                      <span className="text-xs font-medium">${(item.price * item.quantity).toLocaleString("es-AR")}</span>
                    </div>
                    <button
                      className="text-lg text-[#77736D] hover:text-[#242321]"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      &times;
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-[#E9E5DE] pt-4">
                <div className="flex justify-between text-sm font-medium tracking-wider">
                  <span>TOTAL:</span>
                  <span>${totalPrice.toLocaleString("es-AR")}</span>
                </div>
                <button 
                  className="mt-4 w-full bg-[#242321] py-3 text-xs tracking-[0.2em] text-white transition hover:bg-[#A18D75]" 
                  onClick={() => setStep('checkout')}
                >
                  CONTINUAR AL CHECKOUT
                </button>
              </div>
            )}
          </>
        ) : (
          /* VISTA 2: FORMULARIO DE DATOS PERSONALES */
          <form onSubmit={handleCheckoutSubmit} className="flex flex-1 flex-col justify-between py-4">
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77736D]">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={customerData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-[#E9E5DE] bg-white p-2 text-sm outline-none focus:border-[#242321]"
                  placeholder="Ej: Laura Pérez"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77736D]">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={customerData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-[#E9E5DE] bg-white p-2 text-sm outline-none focus:border-[#242321]"
                  placeholder="laura@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77736D]">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={customerData.phone}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-[#E9E5DE] bg-white p-2 text-sm outline-none focus:border-[#242321]"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77736D]">Dirección de Envío</label>
                <input
                  type="text"
                  name="address"
                  value={customerData.address}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-[#E9E5DE] bg-white p-2 text-sm outline-none focus:border-[#242321]"
                  placeholder="Calle 123, Depto 4B, Ciudad"
                />
              </div>
            </div>

            <div className="border-t border-[#E9E5DE] pt-4 space-y-2">
              <div className="flex justify-between text-sm font-medium tracking-wider mb-2">
                <span>TOTAL A PAGAR:</span>
                <span>${totalPrice.toLocaleString("es-AR")}</span>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#242321] py-3 text-xs tracking-[0.2em] text-white transition hover:bg-[#A18D75]"
              >
                CONFIRMAR Y FINALIZAR COMPRA
              </button>
              <button 
                type="button"
                className="w-full text-center text-xs tracking-wider text-[#77736D] hover:underline pt-2"
                onClick={() => setStep('cart')}
              >
                &larr; Volver a la bolsa
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Cart;