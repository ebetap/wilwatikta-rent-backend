const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const helmet = require('helmet');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');
const notificationRoutes = require('./routes/notification');
const orderRoutes = require('./routes/order');
const paymentRoutes = require('./routes/payment');

dotenv.config();

connectDB();

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware keamanan untuk mengatur header HTTP yang aman
app.use(helmet());

// Rute API
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/items', itemRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
