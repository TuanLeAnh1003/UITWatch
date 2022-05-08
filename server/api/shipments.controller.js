import ShipmentsDAO from '../dao/shipmentsDAO.js';

export default class ShipmentsController {
    static async apiGetShipments(req, res, next) {
        const shipmentsPerPage = req.query.shipmentsPerPage ? parseInt(req.query.shipmentsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.shipmentId) {
            filters.shipmentId = req.query.shipmentId;
        }
        else if (req.query.name) {
            filters.name = req.query.name;
        }
        const { shipmentsList, totalNumShipments } = await ShipmentsDAO.getShipments({
            filters, page,
            shipmentsPerPage
        });
        let response = {
            shipments: shipmentsList,
            page: page,
            filters: filters,
            entries_per_page: shipmentsPerPage,
            total_results: totalNumShipments,
        };
        res.json(response);
    }

    static async apiCreateShipment(req, res, next) {
        try {
            const name = req.body.name;
            const price = req.body.price;

            const ShipmentResponse = await ShipmentsDAO.createShipment(
                name,
                price
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateShipment(req, res, next) {
        try {
            const shipmentId = req.body.shipmentId;
            const name = req.body.name;
            const price = req.body.price;

            const ShipmentResponse = await ShipmentsDAO.updateShipment(
                shipmentId,
                name,
                price
            );

            var { error } = ShipmentResponse;
            if (error) {
                res.status.json({ error });
            }
            if (ShipmentResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveShipment(req, res, next) {
        try {
            const shipmentId = req.body.shipmentId;

            const ShipmentResponse = await ShipmentsDAO.removeShipment(
                shipmentId
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}