import { Router } from "express";
export const comunicadosRouter = Router();

comunicadosRouter.get('/', (req, res) => {
    res.send('oi comunicados')
})

