import { Router } from "express";
import { query } from "../../db";

const todosRouter = Router();

todosRouter.get("/", async (req, res) => {
  const result = await query("select * from todos;");
  console.log(result);
  res.send(result);
});

export default todosRouter;
