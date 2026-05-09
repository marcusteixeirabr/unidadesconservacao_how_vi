
export default class Municipio {
  constructor(mysqlConnection) {
    this.mysqlConnection = mysqlConnection;
  }

  createMunicipioTable() {
    this.mysqlConnection.query(
      `CREATE TABLE municipio (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL,
            estado CHAR(2) NOT NULL );`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Criou a tabela: Municipio");
      },
    );
  }

  seedMunicipioTable() {
    this.mysqlConnection.query(
      `INSERT INTO municipio (nome, estado) VALUES
            ('Florianopolis', 'SC'),
            ('Balneario Camboriu', 'SC'),
            ('Itajai', 'SC'),
            ('Bombinhas', 'SC');`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Adicionados os Municipio com sucesso!");
      },
    );
  }

  async getMunicipio(id = undefined) {
    if (!id || typeof id !== "number") throw new Error("Necessário informar um Id numérico para buscar o Município");

    const [rows, fields] = await this.mysqlConnection.promise().query(
      `SELECT nome, estado
      FROM municipio
      WHERE id = ${id}`,
    );
    return rows;
  }
}
