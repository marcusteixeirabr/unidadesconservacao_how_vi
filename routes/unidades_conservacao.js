import { Router } from "express";
export const ucRouter = Router();

ucRouter.get('/', (req, res) => {
    res.send('oi unidades conservacao')
})

