import CartsDAO from '../dao/cartsDAO.js';

export default class CartsController {
    static async apiGetCart(req, res, next) {
        let userId = req.query.userId;

        try {
            const { cartsList, totalNumCarts } = await CartsDAO.getCarts(
                userId
            );
            res.json(cartsList);
        } catch (e) {
            res.status(500).json({ error: e.message });
        };
    }

    static async apiAddToCart(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const quantity = req.body.quantity || 1;

            const CartsResponse = await CartsDAO.addToCart(
                userId,
                productId,
                quantity
            );
            if (CartsResponse==null) {
                res.json("Already in Cart");
            }
            else res.json({ status: "success" });
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
                res.status.json( error );
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

    static async apiRemoveAllCart(req, res, next) {
        try {
            const userId = req.body.userId;
            const CartResponse = await CartsDAO.removeAllCart(
                userId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}