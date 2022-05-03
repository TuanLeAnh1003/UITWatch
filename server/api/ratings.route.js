import express from 'express';
import RatingsController from './ratings.controller.js';

const router = express.Router();

router
    .route('/')
    .get(RatingsController.apiGetRatings)
    .post(RatingsController.apiCreateRating)
    .put(RatingsController.apiUpdateRating)
    .delete(RatingsController.apiRemoveRating);

export default router;