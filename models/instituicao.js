export default class Instituicao {
  constructor(mysqlConnection) {
    this.mysqlConnection = mysqlConnection;
  }

  createInstituicaoTable() {
    this.mysqlConnection.query(
      `CREATE TABLE instituicao (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE);`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Criou a tabela: Municipio");
      },
    );
  }

  seedInstituicaoTable() {
    this.mysqlConnection.query(
      `INSERT INTO instituicao (nome, email) VALUES
        ('ICMBio', 'icmbio@org.br'),
        ('IMA SC', 'ima@sc.gov.br');`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Adicionados os Municipio com sucesso!");
      },
    );
  }

  async getInstituicao(id = undefined) {
    if (!id || typeof id !== "number") throw new Error("Necessário informar um Id numérico para buscar Instituição");

    const [rows, fields] = await this.mysqlConnection.promise().query(
      `SELECT nome, email
      FROM instituicao
      WHERE id = ${id}`,
    );
    return rows;
  }
}
