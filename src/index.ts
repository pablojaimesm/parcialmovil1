import express from "express"
import { AppRouter } from "router";


async function main(){
    const app = express();
    app.use(express.json());

    const db = await Database(process.env.pg);

    const repositorio = new UsuarioRepositorio(db);
    const controller = new UsuarioController(repositorio);

    const router = new AppRouter(controller);

    app.use(router.getRouter());

    app.listen(3000);
}
