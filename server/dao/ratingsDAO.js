import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let ratings;

export default class RatingsDAO {
    static async injectDB(conn) {
        if (ratings) {
            return;
        }
        try {
            ratings = await conn.db(process.env.UITWATCHES_NS).collection('ratings');
        }
        catch (e) {
            console.error(`unable to connect in RatingsDAO: ${e}`);
        }
    }

    static async getRatings({
        filters = null,
        page = 0,
        ratingsPerPage = 20,
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
            cursor = await ratings.find(query).limit(ratingsPerPage).skip(ratingsPerPage * page);
            const ratingsList = await cursor.toArray();
            const totalNumRatings = await ratings.countDocuments(query);
            return { ratingsList, totalNumRatings };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { ratingsList: [], totalNumRatings: 0 };
        }
    }

    static async createRating(userId, productId, starCount, evaluateCount, content, date) {
        try {
            const ratingDoc = {
                userId,
                productId,
                starCount,
                evaluateCount,
                content,
                date
            }
            for (let p in ratingDoc)
                if (ratingDoc[p] == null)
                    delete ratingDoc[p];
            if (ratingDoc.date == "0") console.error("null");
            return await ratings.insertOne(ratingDoc);
        }
        catch (e) {
            console.error(`unable to create rating: ${e}`);
            return { error: e };
        }
    }

    static async updateRating(ratingId, userId, productId, starCount, evaluateCount, content, date) {
        try {
            const ratingDoc = {
                starCount,
                evaluateCount,
                content,
                date
            }
            for (let p in ratingDoc)
                if (ratingDoc[p] == null)
                    delete ratingDoc[p];
            const updateResponse = await ratings.updateOne(
                { "ratingId": ratingId, "userId": userId, "productId": productId }, {$set: ratingDoc}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update rating: ${e}`);
            return { error: e };
        }
    }

    static async removeRating(ratingId, userId, productId) {
        try {
            const deleteResponse = await ratings.deleteOne({
                "ratingId": ratingId, "userId": userId, "productId": productId
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete rating: ${e}`);
            return { error: e };
        }
    }
}