import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let carts;

export default class CartsDAO {
    static async injectDB(conn) {
        if (carts) {
            return;
        }
        try {
            carts = await conn.db(process.env.UITWATCHES_NS).collection('carts');
        }
        catch (e) {
            console.error(`unable to connect in CartsDAO: ${e}`);
        }
    }

    static async getCarts({
        filters = null,
        page = 0,
        cartsPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("userId" in filters) {
                query = { "userId": {$eq: filters['userId'] } };
            }
            else if ("productId" in filters) {
                query = { "productId": {$eq: filters['productId'] } };
            }
        }

        let cursor;
        try {
            cursor = await carts.find(query).limit(cartsPerPage).skip(cartsPerPage * page);
            const cartsList = await cursor.toArray();
            const totalNumCarts = await carts.countDocuments(query);
            return { cartsList, totalNumCarts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { cartsList: [], totalNumCarts: 0 };
        }
    }

    static async createCart(userId, productId, quantity) {
        try {
            const orderDoc = {
                userId,
                productId,
                quantity
            }
            for (let p in orderDoc)
                if (orderDoc[p] == null)
                    delete orderDoc[p];
            return await carts.insertOne(orderDoc);
        }
        catch (e) {
            console.error(`unable to create cart: ${e}`);
            return { error: e };
        }
    }

    static async updateCart(userId, productId, quantity) {
        try {
            const orderDoc = {
                userId,
                productId,
                quantity
            }
            for (let p in orderDoc)
                if (orderDoc[p] == null)
                    delete orderDoc[p];
            const updateResponse = await carts.updateOne(
                //{ "userId": ObjectId(userId), "productId": ObjectId(productId) },
                { "userId": userId, "productId": productId }, {$set: orderDoc}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update cart: ${e}`);
            return { error: e };
        }
    }

    static async removeCart(userId, productId) {
        try {
            const deleteResponse = await carts.deleteOne({
                //"userId": ObjectId(userId), "productId": ObjectId(productId)
                "userId": userId, "productId": productId
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete cart: ${e}`);
            return { error: e };
        }
    }
}