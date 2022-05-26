import OrdersDAO from '../dao/ordersDAO.js';

export default class OrdersController {
    static async apiGetOrders(req, res, next) {
        const ordersPerPage = req.query.ordersPerPage ? parseInt(req.query.ordersPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.body.orderId) {
            filters.orderId = req.body.orderId;
            filters.phoneNumber = req.body.phoneNumber;
            const order = await OrdersDAO.getOrders({
                filters
            });
            res.json(order);
        }
        else {
        const { ordersList, totalNumOrders } = await OrdersDAO.getOrders({
            filters, page,
            ordersPerPage
        });
        let response = {
            orders: ordersList,
            page: page,
            filters: filters,
            entries_per_page: ordersPerPage,
            total_results: totalNumOrders,
        };
        res.json(ordersList);
    }
    }

    static async apiCreateOrder(req, res, next) {
        try {
            const userId = req.body.userId;
            const paymentName = req.body.paymentName;
            const shipmentName = req.body.shipmentName;
            const orderDate = Date.parse(req.body.orderDate);
            const totalPrice = req.body.totalPrice;
            const state = "pending";
            const address = req.body.address;
            const note = req.body.note;
            const items = req.body.items;

            const OrdersResponse = await OrdersDAO.createOrder(
                userId,
                paymentName,
                shipmentName,
                orderDate,
                totalPrice,
                state,
                address,
                note,
                items
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateOrder(req, res, next) {
        try {
            const orderId = req.body.orderId;
            const userId = req.body.userId;
            const paymentId = req.body.paymentId;
            const shipmentId = req.body.shipmentId;
            const orderDate = Date.parse(req.body.orderDate);
            const totalPrice = req.body.totalPrice;
            const state = req.body.state;
            const address = req.body.address;
            const note = req.body.note;
            const items = req.body.items;

            const OrderResponse = await OrdersDAO.updateOrder(
                orderId,
                userId,
                paymentId,
                shipmentId,
                orderDate,
                totalPrice,
                state,
                address,
                note,
                items
            );

            var { error } = OrderResponse;
            if (error) {
                res.status.json({ error });
            }
            if (OrderResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveOrder(req, res, next) {
        try {
            const orderId = req.body.orderId;
            const OrderResponse = await OrdersDAO.removeOrder(
                orderId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetOrderById(req, res, next) {
        try {
            const orderId = req.params.id;
            const OrderResponse = await OrdersDAO.getOrderById(
                orderId
            );
            res.json(OrderResponse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiFindOrder(req, res, next) {
        const orderId = req.body.orderId;
        const phoneNumber = req.body.phoneNumber;
        const orderDate = req.body.orderDate;
        const email = req.body.email;
        const order = await OrdersDAO.findOrder({
            orderDate,
            email
        });
        res.json(order);
    }
}