import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

function connect() {
  db.authenticate()
    .then(() => {
      console.log("Connection successful");
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
}

connect();
export default db;
