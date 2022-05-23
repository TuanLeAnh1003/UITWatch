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
        
        /*let query;
        query = {"_id":ObjectId(userId)};*/

        let user;
        try {
            user = await users.aggregate([
                /*{
                    "$addFields": {
                        "likeProduct": { "$ifNull": ["$likeproduct", []] }
                    }
                },*/
                {
                    $lookup: {
                        from: 'products',
                        localField: 'likeProduct.productId',
                        foreignField: '_id',
                        as: 'likeProducts'
                    }
                },
                {
                    "$addFields": {
                        "likeProducts": {
                            "$map": {
                                "input": "$likeProducts",
                                "in": {
                                    productId: "$$this._id",
                                    productName:"$$this.name"
                                }
                            }
                        }
                    }
                }
                , {
                    $unset: [
                      "likeProduct"
                    ]
                  }
                /*, { $match: { "_id": ObjectId(userId) } }*/
            ]).toArray();
            console.log(user);
            const totalNumLikes = user.likedProducts.lenght();
            const LikesList = user;
            return {LikesList, totalNumLikes};
            /*if (user) {
                user = user[0];
                user.likeProduct = user.likeProduct[0];
                    return user;
            }
            else return null;*/
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }

        let cursor;
        try {
            const user = await users.findOne(query);
            const likesList = user.likes;
            const totalNumLikes = likesList.length;
            return { likesList, totalNumLikes };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { likesList: [], totalNumLikes: 0 };
        }
    }

    static async addToLike(userId, productId, date) {
        const likeDoc = {
            productId,
            date
        }
        
        console.log(users);

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
            productId
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
}