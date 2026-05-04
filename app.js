import "dotenv/config";
import express from "express";

import { router } from "./routes/index.js";

import db from "./models/config/database.js";

const app = express();

app.use(router);

app.listen(3000);
