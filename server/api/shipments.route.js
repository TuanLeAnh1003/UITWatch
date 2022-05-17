import express from 'express';
import ShipmentsController from './shipments.controller.js';

const router = express.Router();

router
    .route('/')
    .get(ShipmentsController.apiGetShipments)
    .post(ShipmentsController.apiCreateShipment)
    .put(ShipmentsController.apiUpdateShipment)
    .delete(ShipmentsController.apiRemoveShipment);

export default router;