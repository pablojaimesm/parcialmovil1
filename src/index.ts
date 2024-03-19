import { UsuarioController } from "controlador/usuarioController";
import express from "express"
import { Database } from "repositorio/database";
import { UsuarioRepositorio } from "repositorio/usuario";
import { AppRouter } from "router";

async function main(){
    const app = express();
    app.use(express.json());

    const db = new Database(process.env.pg);

    const repositorio = new UsuarioRepositorio(db);
    const controller = new UsuarioController(repositorio);

    const router = new AppRouter(controller);

    app.use(router.getRouter());

    app.listen(3000);
}
