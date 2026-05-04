import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

function connection() {
  db.authenticate()
    .then(() => {
      console.log("Connection Successfull");
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
}

connection();
export default db;
