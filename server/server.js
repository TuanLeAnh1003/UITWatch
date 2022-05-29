import express from 'express';
import cors from 'cors';
import products from './api/products.route.js';
import users from './api/users.route.js';
import orders from './api/orders.route.js';
import ratings from './api/ratings.route.js';
import news from './api/news.route.js';
import bodyParser from 'body-parser';
import multiparty from 'connect-multiparty'
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';

const MultipartyMiddleware = multiparty({uploadDir: './images'});

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static('uploads'))

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.post('/uploads', MultipartyMiddleware, (req, res) => {
    var TempFile = req.files.upload;
    var TempPathFile = TempFile.path;

    const targetPathUrl = path.join(__dirname, "./uploads/" + TempFile.name)
    if (path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg") {
        fs.rename(TempPathFile, targetPathUrl, err => {
          res.status(200).json({
            uploaded: true,
            url: `${process.env.API_URL}/${TempFile.originalFilename}`
            // url: `http://localhost:5000/${TempFile.originalFilename}` || `${process.env.API_URL}/${TempFile.originalFilename}`
          })
    
          if (err) return console.log(err)
        })
      }

    console.log(req.files.upload);
})

app.use("/api/v1/products", products);
app.use("/api/v1/users", users);
app.use("/api/v1/orders", orders);
app.use("/api/v1/ratings", ratings);
app.use("/api/v1/news", news);
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
});

export default app;