const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint: Obtener todas las categorías
app.get('/api/categories', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM categories');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint: Obtener todos los productos
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint: Crear una nueva Orden de Compra (Checkout con Datos del Cliente)
app.post('/api/orders', async (req, res) => {
  console.log('DATOS RECIBIDOS EN EL BACKEND:', req.body);

  const { cart, totalPrice, customerData } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: 'El carrito está vacío' });
  }

  // Extraemos de forma segura los datos del cliente (si vienen anidados o planos)
  const name = customerData?.name || null;
  const email = customerData?.email || null;
  const phone = customerData?.phone || null;
  const address = customerData?.address || null;

  try {
    // 1. Insertar la orden principal en la tabla orders incluyendo los datos personales
    const [orderResult] = await db.query(
      `INSERT INTO orders (customer_name, customer_email, customer_phone, customer_address, total_amount, status) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, address, totalPrice, 'completed']
    );

    const orderId = orderResult.insertId;

    // 2. Insertar cada ítem del carrito en la tabla order_items
    const itemQueries = cart.map((item) => {
      return db.query(
        'INSERT INTO order_items (order_id, product_id, size, quantity, unit_price) VALUES (?, ?, ?, ?, ?)',
        [
          orderId,
          item.id,
          item.size || null, // Permite guardar NULL si es un accesorio o producto sin talle
          item.quantity,
          item.price
        ]
      );
    });

    await Promise.all(itemQueries);

    res.status(201).json({
      message: 'Orden guardada con éxito',
      orderId: orderId
    });
  } catch (error) {
    console.error('Error al procesar la compra en el servidor:', error);
    res.status(500).json({ error: error.message });
  }
});

// Inicialización del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de Aurelle Studio corriendo en http://localhost:${PORT}`);
});