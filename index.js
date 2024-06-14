import express from "express";

const app = express();
app.set("view engine", "ejs");
const port = 3001;

app.get("/api/users", (req, res) => {
  const userName = "vaxo";
  res.render("pages/users", { data: { userName } });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
