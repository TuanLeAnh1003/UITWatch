import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let products;

export default class ProductsDAO {
    static async injectDB(conn) {
        if (products) {
            return;
        }
        try {
            products = await conn.db(process.env.UITWATCHES_NS).collection('products');
        }
        catch (e) {
            console.error(`unable to connect in ProductsDAO: ${e}`);
        }
    }

    static async getProducts({
        filters = null,
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let cursor;
        if ("name" in filters) {
            try {
                /*cursor = await products.aggregate(
                    [
                        {
                            '$search': {
                                'index': 'searchProduct',
                                'text': {
                                    'query': filters.name,
                                    'path': 'name',
                                    fuzzy: {
                                        maxEdits: 2,
                                        prefixLength: 2
                                    }
                                }
                            }
                        }
                    ]
                )*/
                cursor = await products.aggregate(
                    [
                        {
                            $search: {
                                'index': 'searchProduct',
                                "autocomplete": {
                                    "path": "name",
                                    "query": filters.name
                                }
                            }
                        }
                    ]
                )
                const productsList = await cursor.skip(productsPerPage * page).limit(productsPerPage).toArray();
                return { productsList };
            }
            catch (e) {
                console.error(`Unable to issue find command, ${e}`);
                return { productsList: []};
            }
        }
        else {
        try {
            cursor = await products.find().limit(productsPerPage).skip(productsPerPage * page);
            const productsList = await cursor.toArray();
            const totalNumProducts = await products.countDocuments();
            return { productsList, totalNumProducts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { productsList: [], totalNumProducts: 0 };
        }}
    }

    static async getFilterProducts({
        filters = null,
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let cursor;
        try {
            cursor = await products.find(filters).limit(productsPerPage).skip(productsPerPage * page);
            const productsList = await cursor.toArray();
            const totalNumProducts = await products.countDocuments(filters);
            return { productsList, totalNumProducts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { productsList: [], totalNumProducts: 0 };
        }
    }

    static async getDiscountProducts({
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let query = {"discount":{$ne:null}};
        let cursor;
        try {
            cursor = await products.find(query).limit(productsPerPage).skip(productsPerPage * page);
            const productsList = await cursor.toArray();
            const totalNumProducts = await products.countDocuments(query);
            return { productsList, totalNumProducts };
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { productsList: [], totalNumProducts: 0 };
        }
    }

    static async createProduct(name, image, type, price, company, description, quantity, status, discount) {
        try {
            let date = new Date().getFullYear();
            const productDoc = {
                name,
                image,
                type,
                price,
                company,
                description,
                quantity,
                status,
                discount,
                date
            }
            for (let p in productDoc)
                if (productDoc[p] == null)
                    delete productDoc[p];
            for (let p in productDoc.type)
                if (productDoc.type[p] == null)
                    delete productDoc.type[p];
            if (Object.keys(productDoc.type).length === 0) delete productDoc.type;
            return await products.insertOne(productDoc);
        }
        catch (e) {
            console.error(`unable to post product: ${e}`);
            return { error: e };
        }
    }

    static async updateProduct(productId, name, image, type, price, company, productDate, description, quantity, status, discount) {
        try {
            const productDoc = {
                name,
                image,
                type,
                price,
                company,
                productDate,
                description,
                quantity,
                status,
                discount
            }
            for (let p in productDoc)
                if (productDoc[p] == null)
                    delete productDoc[p];
            for (let p in productDoc.type)
                if (productDoc.type[p] == null)
                    delete productDoc.type[p];
            if (Object.keys(productDoc.type).length === 0) delete productDoc.type;
            const updateResponse = await products.updateOne(
                { "_id": ObjectId(productId) },
                { $set: productDoc }
            );
            return updateResponse;
        }
        catch (e) {
            console.error(`unable to update product: ${e}`);
            return { error: e };
        }
    }

    static async removeProduct(productId) {
        try {
            const deleteResponse = await products.deleteOne({
                "_id": ObjectId(productId)
            });
            return deleteResponse;
        }
        catch (e) {
            console.error(`unable to delete product: ${e}`);
            return { error: e };
        }
    }

    static async getProductById(productId) {
        const id = { "_id": ObjectId(productId) }

        let product;
        try {
            product = await products.findOne(id);
            return product;
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return null;
        }
    }
}