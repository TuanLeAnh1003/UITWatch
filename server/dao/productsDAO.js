import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let products;

export default class ProductsDAO {
    static async injectDB(conn) {
        if (products) {
            return;
        }
        try {
            products = await conn.db(process.env.UITWATCHES_NS).collection('products');
        }
        catch (e) {
            console.error(`unable to connect in ProductsDAO: ${e}`);
        }
    }

    static async getProducts({
        filters = null,
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters['name'] } };
            } else if ("status" in filters) {
                query = { "status": { $eq: filters['status'] } }
            }
        }

        let cursor;
        try {
            cursor = await products.find(query).limit(productsPerPage).skip(productsPerPage * page);
            const productsList = await cursor.toArray();
            const totalNumProducts = await products.countDocuments(query);
            return { productsList, totalNumProducts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { productsList: [], totalNumProducts: 0 };
        }
    }

    static async addProduct(name, image, type, price, company, productDate, description, quantity, status, discount) {
        try {
            const productDoc = {
                name,
                image,
                type,
                price,
                company,
                productDate,
                description,
                quantity,
                status,
                discount
            }
            return await products.insertOne(productDoc);
        }
        catch (e) {
            console.error(`unable to post product: ${e}`);
            return { error: e };
        }
    }

    static async updateProduct(productId, name, image, type, price, company, productDate, description, quantity, status, discount) {
        try {
            const updateResponse = await products.updateOne(
                { "_id": ObjectId(productId) },
                { $set: {
                    name: name,
                    image: image,
                    type: type,
                    price: price,
                    company: company,
                    productDate: productDate,
                    description: description,
                    quantity: quantity,
                    status: status,
                    discount: discount
                } }
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update product: ${e}`);
            return { error: e };
        }
    }

    static async deleteProduct(productId) {
        try {
            const deleteResponse = await products.deleteOne({
                "_id": ObjectId(productId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete product: ${e}`);
            return { error: e };
        }
    }
}