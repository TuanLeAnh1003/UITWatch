import ProductsDAO from '../dao/productsDAO.js';

export default class ProductsController {
    static async apiGetProducts(req, res, next) {
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.status) {
            filters.status = req.query.status;
        }
        else if (req.query.keyword) {
            filters.keyword = req.query.keyword;
        }
        const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
            filters, page,
            productsPerPage
        });
        let response = {
            products: productsList,
            page: page,
            filters: filters,
            entries_per_page: productsPerPage,
            total_results: totalNumProducts,
        };
        res.json(response);
    }

    static async apiPostProduct(req, res, next) {
        try {
            const name = req.body.name;
            const image = req.body.image;
            const type = {
                brand: req.body.brand,
                material: req.body.material,
                color: req.body.color,
                shape: req.body.shape
            };
            const price = req.body.price;
            const company = req.body.company;
            const productDate = Date.parse(req.body.product_date);
            const description = req.body.description;
            const quantity = req.body.quantity;
            const status = req.body.status;
            const discount = req.body.discount;

            const ProductResponse = await ProductsDAO.createProduct(
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
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateProduct(req, res, next) {
        try {
            const productId = req.body.product_id;
            const name = req.body.name;
            const image = req.body.image;
            const type = {
                brand: req.body.brand,
                material: req.body.material,
                color: req.body.color,
                shape: req.body.shape
            };
            const price = req.body.price;
            const company = req.body.company;
            const productDate = Date.parse(req.body.product_date);
            const description = req.body.description;
            const quantity = req.body.quantity;
            const status = req.body.status;
            const discount = req.body.discount;

            const ProductResponse = await ProductsDAO.updateProduct(
                productId,
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
            );

            var { error } = ProductResponse;
            if (error) {
                res.status.json({ error });
            }
            if (ProductResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveProduct(req, res, next) {
        try {
            const productId = req.body.product_id;
            const ProductResponse = await ProductsDAO.removeProduct(
                productId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetProductById(req, res, next) {
        try {
            const productId = req.params.id;
            const ProductResponse = await ProductsDAO.getProductById(
                productId
            );
            res.json(ProductResponse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}