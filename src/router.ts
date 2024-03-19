import { UsuarioController } from "controlador/usuarioController";
import express from "express";

export class AppRouter {

    router: express.Router

    constructor(
        private readonly controller: UsuarioController
    ){
        this.router = express.Router();
    }

    getRouter() {
        this.router.post("/login", this.controller.login);
        this.router.post("/register", this.controller.register);
        this.router.post("/auth", this.controller.auth);
        return this.router;
    }

}