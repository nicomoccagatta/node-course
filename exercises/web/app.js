const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  cluster = require("cluster"),
  numCPUs = require("os").cpus().length;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`); // Set the views folder!
// Give our app support to parse JSON data on form POST requests and make it available at req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});