import { config } from "dotenv";
config({ path: "../../.env" });

import express from "express";
import apiRouter from "./api";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", apiRouter);

const port = process.env.API_PORT || 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
