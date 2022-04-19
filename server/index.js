import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./dao/productsDAO.js";
import UsersDAO from "./dao/usersDAO.js";

async function main() {
    dotenv.config();

    const client = new
        mongodb.MongoClient(process.env.UITWATCHES_DB_URI);

    const port = process.env.PORT || 8000;

    try {
        await client.connect();
        await ProductsDAO.injectDB(client);
        await UsersDAO.injectDB(client);

        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    };
}

main().catch(console.error);