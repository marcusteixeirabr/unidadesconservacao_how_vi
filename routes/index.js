import { Router } from "express";

import { ucRouter } from "./unidades_conservacao.js";
import { comunicadosRouter } from "./comunicados.js";

export const router = Router();

router.use('/unidades', ucRouter);
router.use('/comunicado', comunicadosRouter);

