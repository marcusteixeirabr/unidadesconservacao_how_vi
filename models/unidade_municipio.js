export default class UnidadeMunicipio {
  constructor(mysqlConnection) {
    this.mysqlConnection = mysqlConnection;
  }

  createUnidadeMunicipioTable() {
    this.mysqlConnection.query(
      `CREATE TABLE unidade_municipio (
        unidade_id INT NOT NULL,
        municipio_id INT NOT NULL,
        PRIMARY KEY (unidade_id, municipio_id),
        FOREIGN KEY (unidade_id) REFERENCES unidade_conservacao(id),
        FOREIGN KEY (municipio_id) REFERENCES municipio(id)
        );`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Criou a tabela: unidade_conservacao");
      },
    );
  }

  seedUnidadeMunicipioTable() {
    this.mysqlConnection.query(
      `INSERT INTO unidade_municipio (unidade_id, municipio_id) 
      VALUES (1, 1),
            (2, 2),
            (3, 1),
            (3, 4),
            (4, 3);`,
      function (error, results, fields) {
        if (error) throw error;
        console.log("Adicionados os unidade_conservacao com sucesso!");
      },
    );
  }
}
