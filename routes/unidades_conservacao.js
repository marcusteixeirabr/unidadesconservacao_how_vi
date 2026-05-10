import { Router } from "express";
export const ucRouter = Router();

import { mysqlConnection } from "../config/database.js";

import Municipio from "../models/municipio.js";
import UnidadeConservacao from "../models/unidade_conservacao.js";
import Comunicacao from "../models/comunicacao.js";

ucRouter.get("/1", async (req, res) => {
  // const data = await new UnidadeConservacao(mysqlConnection).getAllUnidadesConservacao(1);
  const data = await new Comunicacao(mysqlConnection).getComunicacao(1);
  return res.json(data);
});

ucRouter.get("/", async (req, res) => {
  const data = await new UnidadeConservacao(mysqlConnection).getAllUnidadesConservacao();
  return res.json(data);
});