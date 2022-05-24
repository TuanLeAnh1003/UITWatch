import express from 'express';
import OrdersController from './orders.controller.js';

const router = express.Router();

router
    .route('/')
    .get(OrdersController.apiGetOrders)
    .post(OrdersController.apiCreateOrder)
    .put(OrdersController.apiUpdateOrder)
    .delete(OrdersController.apiRemoveOrder);

router
    .route('/id/:id').get(OrdersController.apiGetOrderById);

router
    .route('/findOrder').get(OrdersController.apiFindOrder);

export default router;