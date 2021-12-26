const express = require("express");
const app = express();
const logger = require("./logger");

app.use("/api", logger); //all app uses middleware functions
//sequece matters
///api/about will work

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/product", (req, res) => {
  res.send("product page");
});

app.get("/items", (req, res) => {
  res.send("items page");
});

app.listen(5000, () => {
  console.log("Serve listening on port 5000");
});
