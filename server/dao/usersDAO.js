import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
import bcrypt from 'bcrypt';

let users;

export default class UsersDAO {
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
            return { usersList: [], totalNumLikes: 0 };
        }
    }

    static async createUser(firstName, lastName, password, email, role) {
        try {
            const userDoc = {
                firstName,
                lastName,
                password,
                email,
                role
            }
            return await users.insertOne(userDoc);
        }
        catch (e) {
            console.error(`unable to create user: ${e}`);
            return { error: e };
        }
    }

    static async updateUser(userId, firstName, lastName, birthday, phoneNumber, image) {
        try {
            const userDoc = {
                firstName,
                lastName,
                birthday,
                phoneNumber,
                image
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

    static async checkLogIn(email, password) {
        let query;
        query = { 'email': email };

        let user;
        try {
            user = await users.findOne(query);
            
            const validPassword = await bcrypt.compare(
                password,
                user.password
            );
            
            return {user, validPassword}
        }
        catch (e) {
            return e;
        }
    }

    static async register(firstName, lastName, email, phoneNumber, password) {
        let query;
        query = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'phoneNumber': phoneNumber,
            'password': password,
            'role': 'user'
        }
        let user;
        try {
            user = await users.findOne({'email': email})
            if(user) {
                return {status: "Email đã được đăng kí!"}
            } else {
                user = await users.insertOne(query);
                return user;
            }
            
        } catch (e) {
            return e;
        }
    }
}