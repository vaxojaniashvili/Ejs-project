import express from "express";
import { port } from "./port/common.js";

const app = express();
app.set("view engine", "ejs");

app.get("/api/users", (req, res) => {
  const userName = "vaxo";
  res.render("pages/users", { data: { userName } });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
