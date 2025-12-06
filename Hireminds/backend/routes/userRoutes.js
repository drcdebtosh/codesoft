import express from "express";
import {
    getUser,
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/update", isAuthenticated, updateProfile);

export default router;
