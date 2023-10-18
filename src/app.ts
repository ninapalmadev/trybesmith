import express from 'express';

import products from './routes/products.route';
import orders from './routes/orders.route';
import login from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/products', products);
app.use('/orders', orders);
app.use('/login', login);

export default app;
