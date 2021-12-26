const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use(logger, authorize);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  console.log(req.user);
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
