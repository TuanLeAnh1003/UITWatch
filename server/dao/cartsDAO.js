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

    /*static async getCarts({
        page = 0,
        cartsPerPage = 20,
    } = {}) {
        let query = {'_id':userId};

        try {
            const user = await users.findOne(query);
            const cartsList = user[0].cart;
            let carts = cartsList.limit(cartsPerPage).skip(cartsPerPage * page);
            const totalNumCarts = user[0].cart.lenght();
            return { carts, totalNumCarts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { cartsList: [], totalNumCarts: 0 };
        }
    }*/

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