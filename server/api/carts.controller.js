import CartsDAO from '../dao/cartsDAO.js';

export default class CartsController {
    static async apiGetCart(req, res, next) {
        const cartsPerPage = req.query.cartsPerPage ? parseInt(req.query.cartsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let userId = req.query.userId;

        const { cartsList, totalNumCarts } = await CartsDAO.getCarts({
            userId, page,
            cartsPerPage
        });
        let response = {
            ratings: cartsList,
            page: page,
            filters: filters,
            entries_per_page: cartsPerPage,
            total_results: totalNumCarts,
        };
        res.json(response);
    }

    static async apiAddToCart(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const quantity = req.body.quantity;

            const CartsResponse = await CartsDAO.addToCart(
                userId,
                productId,
                quantity
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateCart(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const quantity = req.body.quantity;

            const CartResponse = await CartsDAO.updateCart(
                userId,
                productId,
                quantity
            );

            var { error } = CartResponse;
            if (error) {
                res.status.json({ error });
            }
            if (CartResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveCart(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const CartResponse = await CartsDAO.removeCart(
                userId,
                productId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}