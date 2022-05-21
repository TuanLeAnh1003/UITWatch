import LikesDAO from '../dao/likesDAO.js';

export default class UsersController {
    static async apiGetLikedProducts(req, res, next) { 
        const userId = req.body.userId;

        const { LikesList, totalNumLikes } = await UsersDAO.getLikes({
            userId
        });
        let response = {
            likes: LikesList,
            page: page,
            userId,
            entries_per_page: likesPerPage,
            total_results: totalNumLikes
        };
        res.json(LikesList);
    }
}