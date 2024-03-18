export class UsuarioRepositorio {

    constructor(
        private readonly database: Database
    ) { }

    static async GetUser(id: string) {
        const client = this.database.connect();
        if(!this.client) throw new ServiceError("Error de conexion");
        const query = "SELECT * FROM dbo.Usuario WHERE id = $1";
        const result = await this.client.query<IUsuario>(query, [id]);
        const user = result.rows[0];
    }

    static async Register(id: string, fullname: string, email: string, password: string) {
        const client = this.database.connect();
        if(!this.client) throw new ServiceError("Error de conexion");
        const query = `INSERT INTO dbo.Usuario (id, fullname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
        const result = await this.client.query(query, [id, fullname, email, password]);
    }

}