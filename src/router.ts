import { authController } from "controlador/autenticar";
import { loginController } from "controlador/login";
import { registerController } from "controlador/register";
import express from "express";

export class AppRouter {

    router: express.Router

    constructor(
        private readonly controller: UsuarioController
    ){
        this.router = express.Router();
    }

    getRouter() {
        router.post("/login", loginController);
        router.post("/register", registerController);
        router.post("/auth", authController);

        return this.router;
    }

}