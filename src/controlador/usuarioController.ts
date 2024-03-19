import { Request, Response } from "express";
import { UsuarioRepositorio } from "repositorio/usuario";

export class UsuarioController {

    constructor(
        private readonly repositorio: UsuarioRepositorio
    ) { }

    auth = (req: Request, res: Response) => {

    }

    login = (req: Request, res: Response) => {

    }

    register = (req: Request, res: Response) => {

    }

}