import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;
let news;

export default class NewsDAO {
    static async injectDB(conn) {
        if (news) {
            return;
        }
        try {
            news = await conn.db(process.env.UITWATCH_NS).collection('news');
        }
        catch (e) {
            console.error(`unable to establish connection handle in newsDAO: ${e}`);
        }
    }

    static async getNews() {
        try {
            const cursor = await news.find();
            const newsList = await cursor.toArray();
            const totalNumNews = await news.countDocuments();
            return {newsList, totalNumNews};
        }
        catch(e) {
            console.error(`Unable to issue find command, ${e}`);
            return {newsList:[], totalNumNews: 0};
        }
    }

    static async getNewsById(id) {
        let Obj;
        try {
            Obj = await news.aggregate([{
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user'
                }
            }
                , { $match: { "_id": ObjectId(id) } }]).toArray();

            if (Obj) {
                Obj = Obj[0];
                Obj.user = Obj.user[0];
                return Obj;
            }
            else return null;
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
        try {
            const query = {_id: new ObjectId(id)};
            return await news.findOne(query);
        }
        catch(e) {
            console.error(`unable to find news by ID: ${e}`);
            throw e;
        }
    }

    static async addNews(userId, title, subHeader, image, content, date) {
        try {
            const newsDoc = {
                user_id: ObjectId(userId),
                title: title,
                sub_header: subHeader,
                image: image,
                content: content,
                date: date,
            }
            return await news.insertOne(newsDoc);
        }
        catch (e) {
            console.error(`unable to add news: ${e}`);
            throw e;
        }
    }

    static async updateNews(newsId, title, subHeader, image, content, date) {
        try {
            const updateResponse = await news.updateOne(
                {_id: ObjectId(newsId)},
                {$set: {
                    title: title,
                    sub_header: subHeader,
                    image: image,
                    content: content,
                    date: date,
                }}
            )
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update news: ${e}`);
            return { error: e };
        }
    }

    static async deleteNews(newsId) {
        try {
            const deleteResponse = await news.deleteOne({_id: ObjectId(newsId)});
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete review: ${e}`);
            return { error: e };
        }
    }
}