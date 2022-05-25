import ProductsDAO from '../dao/productsDAO.js';

export default class ProductsController {
    static async apiGetProducts(req, res, next) {
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage) : 30;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.name) {
            filters.name = req.query.name;
        }

        const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
            filters, page,
            productsPerPage
        });
        res.json(productsList);
    }

    static async apiFilterProduct(req, res, next) {
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.body.brand)
            filters["type.brand"] = req.body.brand;

        if (req.body.albert)
            filters["type.albert"] = req.body.albert;

        if (req.body.priceRange)
            filters["type.priceRange"] = req.body.priceRange;

        if (req.body.glass)
            filters["type.glass"] = req.body.glass;

        if (req.body.energyCore)
            filters["type.energyCore"] = req.body.energyCore;

        if (req.body.interfaceColor)
            filters["type.interfaceColor"] = req.body.interfaceColor;

        if (req.body.caseColor)
            filters["type.caseColor"] = req.body.caseColor;

        if (req.body.shape)
            filters["type.shape"] = req.body.shape;

        if (req.body.size)
            filters["type.size"] = req.body.size;

        if (req.body.waterRessitance)
            filters["type.waterRessitance"] = req.body.waterRessitance;

        if (req.body.feature)
            filters["type.feature"] = req.body.feature;

        if (Object.keys(filters).length === 0) delete filters.type;

        const { productsList, totalNumProducts } = await ProductsDAO.getFilterProducts({
            filters, page,
            productsPerPage
        });
        res.json(productsList);
    }

    static async apiDiscountProducts(req, res, next) {
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;

        const { productsList, totalNumProducts } = await ProductsDAO.getDiscountProducts({
            page,
            productsPerPage
        });
        res.json(productsList);
    }

    static async apiPostProduct(req, res, next) {
        try {
            const name = req.body.name || null;
            const image = req.body.image || null;
            const type = {
                brand: req.body.brand || null,
	            albert: req.body.albert || null,
	            priceRange: req.body.priceRange || null,
	            glass: req.body.glass || null,
	            energyCore: req.body.energyCore || null,
            	interfaceColor: req.body.interfaceColor || null,
            	caseColor: req.body.caseColor || null,
            	shape: req.body.shape || null,
            	size: req.body.size || null,
            	waterRessitance: req.body.waterRessitance || null,
            	feature: req.body.feature || null
            };
            const price = req.body.price || null;
            const company = req.body.company || null;
            const description = req.body.description || null;
            const quantity = req.body.quantity || null;
            const status = req.body.status || null;
            const discount = req.body.discount || null;

            const ProductResponse = await ProductsDAO.createProduct(
                name,
                image,
                type,
                price,
                company,
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
            const productId = req.body.productId;
            const name = req.body.name || null;
            const image = req.body.image || null;
            const type = {
                brand: req.body.brand || null,
	            albert: req.body.albert || null,
	            priceRange: req.body.priceRange || null,
	            glass: req.body.glass || null,
	            energyCore: req.body.energyCore || null,
            	interfaceColor: req.body.interfaceColor || null,
            	caseColor: req.body.caseColor || null,
            	shape: req.body.shape || null,
            	size: req.body.size || null,
            	waterRessitance: req.body.waterRessitance || null,
            	feature: req.body.feature || null
            };
            const price = req.body.price || null;
            const company = req.body.company || null;
            const description = req.body.description || null;
            const quantity = req.body.quantity || null;
            const status = req.body.status || null;
            const discount = req.body.discount || null;

            const ProductResponse = await ProductsDAO.updateProduct(
                productId,
                name,
                image,
                type,
                price,
                company,
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
            const productId = req.params.productId;
            const ProductResponse = await ProductsDAO.removeProduct(
                productId
            );
            res.json({ status: "delete success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetProductById(req, res, next) {
        try {
            const productId = req.params.productId;
            const ProductResponse = await ProductsDAO.getProductById(
                productId
            );
            res.json(ProductResponse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}