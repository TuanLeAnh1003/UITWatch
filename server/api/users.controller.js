import UsersDAO from '../dao/usersDAO.js';

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        const likesPerPage = req.query.likesPerPage ? parseInt(req.query.likesPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.role) {
            filters.role = req.query.role;
        }
        else if (req.query.name) {
            filters.name = req.query.name;
        }
        const { LikesList, totalNumLikes } = await UsersDAO.getUsers({
            filters, page,
            likesPerPage
        });
        let response = {
            users: LikesList,
            page: page,
            filters: filters,
            entries_per_page: likesPerPage,
            total_results: totalNumLikes,
        };
        res.json(response);
    }

    static async apiCreateUser(req, res, next) {
        try {
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const birthday = Date.parse(req.body.birthday);
            const phoneNumber = req.body.phoneNumber;
            const email = req.body.email;
            const address = req.body.address;
            const role = req.body.role;

            const UserResponse = await UsersDAO.createUser(
                password,
                firstName,
                lastName,
                birthday,
                phoneNumber,
                email,
                address,
                role
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiUpdateUser(req, res, next) {
        try {
            const userId = req.body.userId;
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const birthday = Date.parse(req.body.birthday);
            const phoneNumber = req.body.phoneNumber;
            const email = req.body.email;
            const address = req.body.address;

            const UserResponse = await UsersDAO.updateUser(
                userId,
                password,
                firstName,
                lastName,
                birthday,
                phoneNumber,
                email,
                address
            );

            var { error } = UserResponse;
            if (error) {
                res.status.json({ error });
            }
            if (UserResponse.modifiedCount == 0) {
                throw new Error("Data is not changed");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRemoveUser(req, res, next) {
        try {
            const userId = req.body.userId;
            const UserResponse = await UsersDAO.removeUser(
                userId
            );
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetUserById(req, res, next) {
        try {
            const userId = req.params.id;
            const UserResponse = await UsersDAO.getUserById(
                userId
            );
            res.json(UserResponse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiSignIn(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const UserResponse = await UsersDAO.checkSignIn(
                email,
                password
            );
            res.json(UserResponse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetLikedProducts(req, res, next) {
        const likesPerPage = req.query.likesPerPage ? parseInt(req.query.likesPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        
        const userId = req.body.userId;

        const { LikesList, totalNumLikes } = await UsersDAO.getLikes({
            userId, page,
            likesPerPage
        });
        let response = {
            likes: LikesList,
            page: page,
            userId,
            entries_per_page: likesPerPage,
            total_results: totalNumLikes,
        };
        res.json(response);
    }
}