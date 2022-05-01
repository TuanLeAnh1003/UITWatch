import express from 'express';
import cors from 'cors';
import products from './api/products.route.js';
import users from './api/users.route.js';
import orders from './api/orders.route.js';
import carts from './api/carts.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", products);
app.use("/api/v1/users", users);
app.use("/api/v1/orders", orders);
app.use("/api/v1/carts", carts);
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
});

export default app;