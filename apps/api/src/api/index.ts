import { Router } from "express";
import todosRouter from "./todos";

const apiRouter = Router();

apiRouter.use('/todos', todosRouter);

export default apiRouter