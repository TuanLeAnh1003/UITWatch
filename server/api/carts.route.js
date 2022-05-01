import express from 'express';
import CartsController from './carts.controller.js';

const router = express.Router();

router
    .route('/')
    .get(CartsController.apiGetCarts)
    .post(CartsController.apiCreateCart)
    .put(CartsController.apiUpdateCart)
    .delete(CartsController.apiRemoveCart);

export default router;