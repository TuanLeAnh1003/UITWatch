import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class CartsDAO {
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.UITWATCHES_NS).collection('users');
        }
        catch (e) {
            console.error(`unable to connect in CartsDAO: ${e}`);
        }
    }

    static async getCarts(userId) {
        let user;
        try {
            user = await users.aggregate([
                { $match: { "_id": ObjectId(userId) } },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'cart.productId',
                        foreignField: '_id',
                        as: 'cartProducts'
                    }
                }
            ]).toArray();
            user=user[0];
            const totalNumCarts = user.cartProducts.length;
            const cartsList = user.cartProducts;
            return {cartsList, totalNumCarts};
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { cartsList: [], totalNumCarts: 0 };
        }
    }

    static async addToCart(userId, productId, quantity) {
        const cartDoc = {
            productId: ObjectId(productId),
            quantity
        }
        
        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$push: {'cart': cartDoc}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to add to cart: ${e}`);
            return { error: e };
        }
    }

    static async removeCart(userId, productId) {
        const cartDoc = {
            productId:ObjectId(productId)
        }
        
        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$pull: {'cart': cartDoc}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to delete cart: ${e}`);
            return { error: e };
        }
    }

    static async removeAllCart(userId) {     
        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$unset: {'cart':""}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to delete cart: ${e}`);
            return { error: e };
        }
    }
}