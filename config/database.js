import mysql from "mysql2";

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

mysqlConnection.connect();

mysqlConnection.query("SELECT 'Successfuly' AS connect", function (error, results, fields) {
  if (error) console.log(error);
  console.log("Connection database: ", results[0].connect);
});


export { mysqlConnection };
