import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let shipments;

export default class ShipmentsDAO {
    static async injectDB(conn) {
        if (shipments) {
            return;
        }
        try {
            shipments = await conn.db(process.env.UITWATCHES_NS).collection('shipments');
        }
        catch (e) {
            console.error(`unable to connect in ShipmentsDAO: ${e}`);
        }
    }

    static async getShipments({
        filters = null,
        page = 0,
        shipmentsPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("shipmentId" in filters) {
                query = { "_id": ObjectId(filters['shipmentId']) };
            } else if ("name" in filters) {
                query = { $text: { $search: filters['name'] } };
            }
        }

        let cursor;
        try {
            cursor = await shipments.find(query).limit(shipmentsPerPage).skip(shipmentsPerPage * page);
            const shipmentsList = await cursor.toArray();
            const totalNumShipments = await shipments.countDocuments(query);
            return { shipmentsList, totalNumShipments };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { shipmentsList: [], totalNumShipments: 0 };
        }
    }

    static async createShipment(name, price) {
        try {
            let shipmentDoc = {
                name,
                price
            };
            return await shipments.insertOne(shipmentDoc);
        }
        catch (e) {
            console.error(`unable to create shipment: ${e}`);
            return { error: e };
        }
    }

    static async updateShipment(shipmentId, name, price) {
        try {
            const updateResponse = await shipments.updateOne(
                { "_id": ObjectId(shipmentId)}, {$set: {name, price}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update shipment: ${e}`);
            return { error: e };
        }
    }

    static async removeShipment(shipmentId) {
        try {
            const deleteResponse = await shipments.deleteOne({
                "_id": ObjectId(shipmentId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete shipment: ${e}`);
            return { error: e };
        }
    }
}