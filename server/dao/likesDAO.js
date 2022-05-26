import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;
export default class LikesDAO {
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.UITWATCHES_NS).collection('users');
        }
        catch (e) {
            console.error(`unable to connect in UsersDAO: ${e}`);
        }
    }
    
    static async getLikes(userId) {
        let user;
        try {
            user = await users.aggregate([
                { $match: { "_id": ObjectId(userId) } },
                {
                    $lookup: {
                        from: 'products',
                        localField: 'likeProduct.productId',
                        foreignField: '_id',
                        as: 'likeProducts'
                    }
                }
            ]).toArray();
            user=user[0];
            const totalNumLikes = user.likeProducts.length;
            const LikesList = user.likeProducts;
            return {LikesList, totalNumLikes};
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
    }

    static async isLikes(userId, productId) {
        let query;
        query = {
            $and:[
                {"_id":ObjectId(userId)},
                {"likeProduct.productId":ObjectId(productId)}
            ]
        }
        try {
            const likeList = await users.findOne(query);
            const isLiked = (likeList==null)?false:true;
            return {isLiked};
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
    }

    static async addToLike(userId, productId, date) {
        const likeDoc = {
            productId:ObjectId(productId),
            date
        }

        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$push: {'likeProduct': likeDoc}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to add to like: ${e}`);
            return { error: e };
        }
    }

    static async unlike(userId, productId) {
        const likeDoc = {
            productId:ObjectId(productId)
        }
        
        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$pull: {'likeProduct': likeDoc}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to unlike: ${e}`);
            return { error: e };
        }
    }

    static async unlikeAll(userId) {
        try {
            const updateResponse = await users.updateOne(
                {"_id": ObjectId(userId)},
                {$unset: {'likeProduct': ""}}
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to unlike: ${e}`);
            return { error: e };
        }
    }
}