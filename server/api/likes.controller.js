import LikesDAO from '../dao/likesDAO.js';

export default class LikesController {
    static async apiGetLikedProducts(req, res, next) { 
        const userId = req.body.userId;
        const { LikesList, totalNumLikes } = await LikesDAO.getLikes({
            userId
        });
        res.json(LikesList);
    }

    static async apiAddToLike(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const date = new Date();

            const LikesResponse = await LikesDAO.addToLike(
                userId,
                productId,
                date
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUnlike(req, res, next) {
        try {
            const userId = req.body.userId;
            const productId = req.body.productId;
            const LikesResponse = await LikesDAO.unlike(
                userId,
                productId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}