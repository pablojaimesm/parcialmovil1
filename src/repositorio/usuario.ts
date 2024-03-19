import { IUsuario } from "modelos/usuario";
import { Database } from "./database";

export class UsuarioRepositorio {

    constructor(
        private readonly database: Database
    ) { }

    async GetUser(id: string): Promise<IUsuario> {
        const client = await this.database.connect();
        const query = "SELECT * FROM dbo.Usuario WHERE id = $1";
        const result = await client.query<IUsuario>(query, [id]);
        const user = result.rows[0];
        return user;
    }

    async Register(id: string, fullname: string, email: string, password: string) {
        const client = await this.database.connect();
        const query = `INSERT INTO dbo.Usuario (id, fullname, email, password) VALUES ($1, $2, $3, $4)`;
        await client.query(query, [id, fullname, email, password]);
    }

}