import express from 'express';
import cors from 'cors';
import products from './api/products.route.js';
import users from './api/users.route.js';
<<<<<<< HEAD
import orders from './api/orders.route.js';
import carts from './api/carts.route.js';
import ratings from './api/ratings.route.js';
=======
import news from './api/news.route.js';
>>>>>>> origin/Thien

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", products);
app.use("/api/v1/users", users);
<<<<<<< HEAD
app.use("/api/v1/orders", orders);
app.use("/api/v1/carts", carts);
app.use("/api/v1/ratings", ratings);
=======
app.use("/api/v1/news", news);
>>>>>>> origin/Thien
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
});

export default app;