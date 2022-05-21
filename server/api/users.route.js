import express from 'express';
import UsersController from './users.controller.js';
import CartsController from './carts.controller.js';
import LikesController from './likes.controller.js';

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
    .route('/login').get(UsersController.apiSignIn);

router
    .route('/liked_products').get(LikesController.apiGetLikedProducts);

router
    .route('/carts')
    .get(CartsController.apiGetCart);

router
    .route('/carts/addToCart')
    .put(CartsController.apiAddToCart);

router
    .route('/carts/removeCart')
    .put(CartsController.apiRemoveCart);

/*router
    .route('/carts/removeAllCart')
    .put(CartsController.apiRemoveAllCart);*/

export default router;