import UsersDAO from '../dao/usersDAO.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        const usersPerPage = req.query.usersPerPage ? parseInt(req.query.usersPerPage) : 20;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        let filters = {};
        if (req.query.role) {
            filters.role = req.query.role;
        }
        else if (req.query.name) {
            filters.name = req.query.name;
        }
        const { usersList, totalNumUsers } = await UsersDAO.getUsers({
            filters, page,
            usersPerPage
        });
        res.json(usersList);
    }

    static async apiCreateUser(req, res, next) {
        try {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const password = req.body.password;
            const email = req.body.email;
            const role = req.body.role;

            const UserResponse = await UsersDAO.createUser(
                firstName,
                lastName,
                password,
                email,
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
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const birthday = req.body.birthday;
            const phoneNumber = req.body.phoneNumber;
            const image = req.body.image

            const UserResponse = await UsersDAO.updateUser(
                userId,
                firstName,
                lastName,
                birthday,
                phoneNumber,
                image
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

    static async apiLogIn(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const UserResponse = await UsersDAO.checkLogIn(
                email,
                password
            );
            if(!UserResponse.user) {
                res.status(404).json("Kh??ng t??m th???y email!")
            }
            if(!UserResponse.validPassword) {
                res.status(404).json("Sai m???t kh???u!");
            }
            if (UserResponse.user && UserResponse.validPassword) {
                const accessToken = jwt.sign(UserResponse.user, process.env.ACCESS_TOKEN);
                res.status(200).json({user: UserResponse.user, accessToken});
            }
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiRegister (req, res, next) {
        try {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email;
            const phoneNumber = req.body.phoneNumber;
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);


            const UserResponse = await UsersDAO.register(
                firstName,
                lastName,
                email,
                phoneNumber,
                password
            );
            res.status(200).json({data: UserResponse});
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}