import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./dao/productsDAO.js";
import UsersDAO from "./dao/usersDAO.js";
<<<<<<< HEAD
import OrdersDAO from "./dao/ordersDAO.js";
import CartsDAO from "./dao/cartsDAO.js";
import RatingsDAO from "./dao/ratingsDAO.js";
=======
import NewsDAO from "./dao/newsDAO.js";
>>>>>>> origin/Thien

async function main() {
    dotenv.config();

    const client = new
        mongodb.MongoClient(process.env.UITWATCHES_DB_URI);

    const port = process.env.PORT || 8000;

    try {
        await client.connect();
        await ProductsDAO.injectDB(client);
        await UsersDAO.injectDB(client);
<<<<<<< HEAD
        await OrdersDAO.injectDB(client);
        await CartsDAO.injectDB(client);
        await RatingsDAO.injectDB(client);
=======
        await NewsDAO.injectDB(client);
>>>>>>> origin/Thien

        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    };
}

main().catch(console.error);