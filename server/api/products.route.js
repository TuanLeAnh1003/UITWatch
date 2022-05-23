import express from 'express';
import ProductsController from './products.controller.js';

const router = express.Router();

router
    .route('/')
    .get(ProductsController.apiGetProducts)
    .post(ProductsController.apiPostProduct)
    .put(ProductsController.apiUpdateProduct)

router
    .route('/:productId')
    .delete(ProductsController.apiRemoveProduct);
    
router
    .route('/id/:id').get(ProductsController.apiGetProductById);

export default router;