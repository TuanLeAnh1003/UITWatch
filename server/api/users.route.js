import express from 'express';
import UsersController from './users.controller.js';
import CartsController from './carts.controller.js';
import middlewareController from './middleware.controller.js';
import LikesController from './likes.controller.js';

const router = express.Router();

router
    .route('/')
    .get(UsersController.apiGetUsers)
    .put(UsersController.apiUpdateUser)
    .post(UsersController.apiCreateUser)
    .delete(UsersController.apiRemoveUser);

router
    .route('/id/:id').get(UsersController.apiGetUserById);

router
    .route('/login').post(UsersController.apiLogIn);

router
    .route('/register').post(UsersController.apiRegister);

router
    .route('/likedProducts')
    .get(LikesController.apiGetLikedProducts)
    .put(LikesController.apiAddToLike);

router
    .route('/unlikeProducts')
    .put(LikesController.apiUnlike);

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