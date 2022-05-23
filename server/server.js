import express from 'express';
import cors from 'cors';
import products from './api/products.route.js';
import users from './api/users.route.js';
import orders from './api/orders.route.js';
import ratings from './api/ratings.route.js';
import news from './api/news.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", products);
app.use("/api/v1/users", users);
app.use("/api/v1/orders", orders);
app.use("/api/v1/ratings", ratings);
app.use("/api/v1/news", news);
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
});

export default app;