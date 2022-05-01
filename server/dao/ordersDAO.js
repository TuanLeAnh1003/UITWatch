import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let orders;

export default class OrdersDAO {
    static async injectDB(conn) {
        if (orders) {
            return;
        }
        try {
            orders = await conn.db(process.env.UITWATCHES_NS).collection('orders');
        }
        catch (e) {
            console.error(`unable to connect in OrdersDAO: ${e}`);
        }
    }

    static async getOrders({
        filters = null,
        page = 0,
        ordersPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("userId" in filters) {
                query = { "userId": {$eq: filters['userId'] } };
            }
        }

        let cursor;
        try {
            cursor = await orders.find(query).limit(ordersPerPage).skip(ordersPerPage * page);
            const ordersList = await cursor.toArray();
            const totalNumOrders = await orders.countDocuments(query);
            return { ordersList, totalNumOrders };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { ordersList: [], totalNumOrders: 0 };
        }
    }

    static async createOrder(userId, paymentId, shipmentId, orderDate, totalPrice, state, address, note, items) {
        try {
            const orderDoc = {
                userId,
                paymentId,
                shipmentId,
                orderDate,
                totalPrice,
                state,
                address,
                note,
                items
            }
            return await orders.insertOne(orderDoc);
        }
        catch (e) {
            console.error(`unable to create order: ${e}`);
            return { error: e };
        }
    }

    static async updateOrder(orderId, userId, paymentId, shipmentId, orderDate, totalPrice, state, address, note, items) {
        try {
            const updateResponse = await orders.updateOne(
                { "_id": ObjectId(orderId) },
                { $set: {
                    userId,
                    paymentId,
                    shipmentId,
                    orderDate,
                    totalPrice,
                    state,
                    address,
                    note,
                    items
                } }
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update order: ${e}`);
            return { error: e };
        }
    }

    static async removeOrder(orderId) {
        try {
            const deleteResponse = await orders.deleteOne({
                "_id": ObjectId(orderId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete order: ${e}`);
            return { error: e };
        }
    }

    static async getOrderById(orderId) {
        const id = { "_id": ObjectId(orderId) }

        let order;
        try {
            order = await orders.findOne(id);
            return order;
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
    }
}