import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class ProductsDAO {
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

    static async getUsers({
        filters = null,
        page = 0,
        likesPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters['name'] } };
            } else if ("role" in filters) {
                query = { "role": { $eq: filters['role'] } }
            }
        }

        let cursor;
        try {
            cursor = await users.find(query).limit(likesPerPage).skip(likesPerPage * page);
            const likesList = await cursor.toArray();
            const totalNumLikes = await users.countDocuments(query);
            return { likesList, totalNumLikes };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { likesList: [], totalNumLikes: 0 };
        }
    }

    static async createUser(password, firstName, lastName, phoneNumber, email) {
        try {
            const userDoc = {
                password,
                firstName,
                lastName,
                phoneNumber,
                email,
                role:"user"
            }
            for (let p in userDoc)
                if (userDoc[p] == null)
                    delete userDoc[p];
            return await users.insertOne(userDoc);
        }
        catch (e) {
            console.error(`unable to create user: ${e}`);
            return { error: e };
        }
    }

    static async updateUser(userId, password, firstName, lastName, birthday, phoneNumber, email, address) {
        try {
            const userDoc = {
                password,
                firstName,
                lastName,
                birthday,
                phoneNumber,
                email,
                address
            }
            for (let p in userDoc)
                if (userDoc[p] == null)
                    delete userDoc[p];
            const updateResponse = await users.updateOne(
                { "_id": ObjectId(userId) },
                { $set: userDoc }
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update user: ${e}`);
            return { error: e };
        }
    }

    static async removeUser(userId) {
        try {
            const deleteResponse = await users.deleteOne({
                "_id": ObjectId(userId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete order: ${e}`);
            return { error: e };
        }
    }

    static async getUserById(userId) {
        const id = { "_id": ObjectId(userId) }

        let user;
        try {
            user = await users.findOne(id);
            return user;
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
    }

    static async checkSignIn(email, password) {
        let query;
        query = { 'email': email };

        let user;
        try {
            user = await users.findOne(query);
            if(!user) return;
            if(user.password==password)
            return { user };
        }
        catch (e) {
            console.error(`Unable to run command, ${e}`);
            return;
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