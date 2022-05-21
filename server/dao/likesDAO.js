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
        let query;
        query = {"_id":ObjectId(userId)};

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
}