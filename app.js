const express = require("express");
// const { people } = require("./data");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");
//static assest
app.use(express.static("./methods-public"));

//parse form data
//we want url encoded middleware
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Serve listening on port 5000");
});
