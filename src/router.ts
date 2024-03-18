import { authController } from "controlador/autenticar";
import { loginController } from "controlador/login";
import { registerController } from "controlador/register";
import express from "express";

export const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/auth", authController);