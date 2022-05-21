import express from 'express';
import UsersController from './users.controller.js';
import CartsController from './carts.controller.js';
import middlewareController from './middleware.controller.js';

const router = express.Router();

router
    .route('/')
    .get(UsersController.apiGetUsers)
    .post(UsersController.apiCreateUser)
    .put(UsersController.apiUpdateUser)
    .delete(UsersController.apiRemoveUser);

router
    .route('/id/:id').get(UsersController.apiGetUserById);

router
    .route('/login').post(UsersController.apiLogIn);

router
    .route('/register').post(UsersController.apiRegister);

router
    .route('/liked_products').get(UsersController.apiGetLikedProducts);

router
    .route('/carts').post(CartsController.apiAddToCart);

export default router;