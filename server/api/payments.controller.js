import PaymentsDAO from '../dao/paymentsDAO.js';

export default class PaymentsController {
    static async apiGetPayments(req, res, next) {
        const paymentsPerPage = req.query.paymentsPerPage ? parseInt(req.query.paymentsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.paymentId) {
            filters.paymentId = req.query.paymentId;
        }
        else if (req.query.name) {
            filters.name = req.query.name;
        }
        const { paymentsList, totalNumPayments } = await PaymentsDAO.getPayments({
            filters, page,
            paymentsPerPage
        });
        let response = {
            payments: paymentsList,
            page: page,
            filters: filters,
            entries_per_page: paymentsPerPage,
            total_results: totalNumPayments,
        };
        res.json(response);
    }

    static async apiCreatePayment(req, res, next) {
        try {
            const name = req.body.name;

            const PaymentResponse = await PaymentsDAO.createPayment(
                name
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdatePayment(req, res, next) {
        try {
            const paymentId = req.body.paymentId;
            const name = req.body.name;

            const PaymentResponse = await PaymentsDAO.updatePayment(
                paymentId,
                name
            );

            var { error } = PaymentResponse;
            if (error) {
                res.status.json({ error });
            }
            if (PaymentResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemovePayment(req, res, next) {
        try {
            const paymentId = req.body.paymentId;

            const PaymentResponse = await PaymentsDAO.removePayment(
                paymentId
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}