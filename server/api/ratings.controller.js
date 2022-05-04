import RatingsDAO from '../dao/ratingsDAO.js';

export default class RatingsController {
    static async apiGetRatings(req, res, next) {
        const ratingsPerPage = req.query.ratingsPerPage ? parseInt(req.query.ratingsPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.userId) {
            filters.userId = req.query.userId;
        }
        if (req.query.productId) {
            filters.productId = req.query.productId;
        }
        const { ratingsList, totalNumRatings } = await RatingsDAO.getRatings({
            filters, page,
            ratingsPerPage
        });
        let response = {
            ratings: ratingsList,
            page: page,
            filters: filters,
            entries_per_page: ratingsPerPage,
            total_results: totalNumRatings,
        };
        res.json(response);
    }

    static async apiCreateRating(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const starCount = req.body.starCount;
            const evaluateCount = req.body.evaluateCount;
            const content = req.body.content;
            const date = Date.parse(req.body.date) || null;

            const RatingResponse = await RatingsDAO.createRating(
                userId,
                productId,
                starCount,
                evaluateCount,
                content,
                date
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateRating(req, res, next) {
        try {
            const ratingId = req.body.ratingId;
            const userId = req.body.userId;
            const productId = req.body.productId;
            const starCount = req.body.starCount;
            const evaluateCount = req.body.evaluateCount;
            const content = req.body.content;
            const date = Date.parse(req.body.date);

            const RatingResponse = await RatingsDAO.updateRating(
                ratingId,
                userId,
                productId,
                starCount,
                evaluateCount,
                content,
                date
            );

            var { error } = RatingResponse;
            if (error) {
                res.status.json({ error });
            }
            if (RatingResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveRating(req, res, next) {
        try {
            const ratingId = req.body.ratingId;
            const userId = req.body.userId;
            const productId = req.body.productId;

            const RatingResponse = await RatingsDAO.removeRating(
                ratingId,
                userId,
                productId
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}