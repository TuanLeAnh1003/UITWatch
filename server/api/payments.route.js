import express from 'express';
import PaymentsController from './payments.controller.js';

const router = express.Router();

router
    .route('/')
    .get(PaymentsController.apiGetPayments)
    .post(PaymentsController.apiCreatePayment)
    .put(PaymentsController.apiUpdatePayment)
    .delete(PaymentsController.apiRemovePayment);

export default router;