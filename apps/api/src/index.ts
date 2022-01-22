import express from "express";

import { config } from "dotenv";
config({ path: "../../.env" });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.API_PORT || 8080

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
