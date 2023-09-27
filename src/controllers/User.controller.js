import UserModel from "../models/User.model.js";

const UserController = {
    GetAllUsers: async (req, res) => {
        try {
            const users = await UserModel.GetAllUsers();
            return res.json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
};

export default UserController;