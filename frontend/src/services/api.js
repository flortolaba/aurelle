const API_URL = 'http://localhost:5000/api';

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error('Error al obtener categorías');
  return await response.json();
};

export const getFeaturedProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error('Error al obtener productos');
  return await response.json();
};

export const createOrder = async (cart, totalPrice, customerData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart, totalPrice, customerData }) // <-- Envía los datos personales al backend
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error al procesar la compra');
  }

  return data;
};