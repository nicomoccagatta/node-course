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
app.use(morgan("dev"));
app.use(helmet());

app.use((req, res, next) => {
  process.send("request");
  next();
});

function displayForm(res, {name = "", age = "", text = ""}) {
  res.render("form", {name, age, text});
}

app.get("/", (req, res) => {
  res.render("index", {title: "Hey", message: "Hello there!"});
});

app.get("/form", (req, res) => {
  displayForm(res, req.query);
});

app.post("/form/send", (req, res) => {
  console.log("Received form data:", req.body);
  displayForm(res, req.body);
});

if (cluster.isMaster) {
  console.log(`Master proccess is running with PID #${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  let reqNum = 0;
  cluster.on("message", (worker) => {
    console.log(`Request number #${++reqNum} at PID #${worker.process.pid}`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker #${worker.process.pid} died with code ${code} and signal ${signal}`);
    cluster.fork();
  });
} else {
  app.listen(8000, () => {
    console.log(`App listening on port 8000 at worker #${process.pid}`);
  });
}