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
            console.error(`unable to connect in ProductsDAO: ${e}`);
        }
    }

    static async getUsers({
        filters = null,
        page = 0,
        usersPerPage = 20,
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
            cursor = await users.find(query).limit(usersPerPage).skip(usersPerPage * page);
            const usersList = await cursor.toArray();
            const totalNumUsers = await users.countDocuments(query);
            return { usersList, totalNumUsers };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { usersList: [], totalNumUsers: 0 };
        }
    }

    static async createUser(userName, password, firstName, lastName, birthday, phoneNumber, email, address, role) {
        try {
            const userDoc = {
                userName,
                password,
                firstName,
                lastName,
                birthday,
                phoneNumber,
                email,
                address,
                role
            }
            return await users.insertOne(userDoc);
        }
        catch (e) {
            console.error(`unable to create user: ${e}`);
            return { error: e };
        }
    }

    static async updateUser(userId, userName, password, firstName, lastName, birthday, phoneNumber, email, address, role) {
        try {
            const updateResponse = await users.updateOne(
                { "_id": ObjectId(userId) },
                { $set: {
                    userName,
                    password,
                    firstName,
                    lastName,
                    birthday,
                    phoneNumber,
                    email,
                    address,
                    role
                } }
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
            console.error(`unable to delete product: ${e}`);
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

    static async checkSignIn(userName, password) {
        let query;
        query = { 'userName': { $eq: userName } };

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
}