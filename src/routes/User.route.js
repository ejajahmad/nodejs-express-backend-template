// routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/User.controller.js';
const router = express.Router();

router.get('/All', UserController.GetAllUsers);

export default router;
