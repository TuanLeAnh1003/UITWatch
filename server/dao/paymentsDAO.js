import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let payments;

export default class PaymentsDAO {
    static async injectDB(conn) {
        if (payments) {
            return;
        }
        try {
            payments = await conn.db(process.env.UITWATCHES_NS).collection('payments');
        }
        catch (e) {
            console.error(`unable to connect in PaymentsDAO: ${e}`);
        }
    }

    static async getPayments({
        filters = null,
        page = 0,
        paymentsPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("paymentId" in filters) {
                query = { "_id": ObjectId(filters['paymentId']) };
            } else if ("name" in filters) {
                query = { $text: { $search: filters['name'] } };
            }
        }

        let cursor;
        try {
            cursor = await payments.find(query).limit(paymentsPerPage).skip(paymentsPerPage * page);
            const paymentsList = await cursor.toArray();
            const totalNumPayments = await payments.countDocuments(query);
            return { paymentsList, totalNumPayments };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { paymentsList: [], totalNumPayments: 0 };
        }
    }

    static async createPayment(name) {
        try {
            let paymentDoc = {name};
            return await payments.insertOne(paymentDoc);
        }
        catch (e) {
            console.error(`unable to create payment: ${e}`);
            return { error: e };
        }
    }

    static async updatePayment(paymentId, name) {
        try {
            const updateResponse = await payments.updateOne(
                { "_id": ObjectId(paymentId)}, {$set: {name}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update payment: ${e}`);
            return { error: e };
        }
    }

    static async removePayment(paymentId) {
        try {
            const deleteResponse = await payments.deleteOne({
                "_id": ObjectId(paymentId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete payment: ${e}`);
            return { error: e };
        }
    }
}