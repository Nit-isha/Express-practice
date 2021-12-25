const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));
//setup static and middleware.

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navBar/index.html"));
//   //adding to static
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("server is litening on port 5000..");
});
