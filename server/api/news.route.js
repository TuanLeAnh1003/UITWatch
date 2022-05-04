import express from 'express';
import NewsController from './news.controller.js';

const router = express.Router();

router.route('/')
    .get(NewsController.apiGetNews)
    .post(NewsController.apiPostNews)
    .put(NewsController.apiPutNews)
    .delete(NewsController.apiDeleteNews);

router.route('/id/:id').get(NewsController.apiGetNewsById);

export default router;


