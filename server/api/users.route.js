import express from 'express';
import UsersController from './users.controller.js';

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
    .route('/liked_products').get(UsersController.apiGetLikedProducts);

export default router;