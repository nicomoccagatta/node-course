const request = require("request"),
  bodyParser = require("body-parser"),
  express = require("express"),
  app = express(),
  url = "http://localhost:8000/1234/diego";

// Give our app support to parse JSON data on requests and make it available at req.body
app.use(bodyParser.json());

app.get("/:id/:name?/", (req, res) => {
  console.log("Received GET request!");
  res.json({params: req.params, query: req.query});
});

app.post("/:id/:name?/", (req, res) => {
  console.log("Received POST request!");
  res.json({params: req.params, body: req.body});
});

app.put("/:id/:name?/", (req, res) => {
  console.log("Received PUT request!");
  res.json({params: req.params, body: req.body});
});

app.patch("/:id/:name?/", (req, res) => {
  console.log("Received PATCH request!");
  res.json({params: req.params, body: req.body});
});

app.delete("/:id/:name?/", (req, res) => {
  console.log("Received DELETE request!");
  res.json({params: req.params, body: req.body});
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");

  requestGet();
  requestPost();
  requestPut();
  requestPatch();
  requestDelete();
  bye();
});

function requestGet() {
  request.get(`${url}?hello=world&hi=there`, (_, __, body) => {
    console.log("GET: ", JSON.parse(body));
  });
}

function requestPost() {
  request.post(url, {json: {hello: "world", hi: "there"}}, (_, __, body) => {
    console.log("POST: ", body);
  });
}

function requestPut() {
  request.put(url, {json: {hello: "world", hi: "there"}}, (_, __, body) => {
    console.log("PUT: ", body);
  });
}

function requestPatch() {
  request.patch(url, {json: {hello: "world", hi: "there"}}, (_, __, body) => {
    console.log("PATCH: ", body);
  });
}

function requestDelete() {
  request.delete(url, {json: {hello: "world", hi: "there"}}, (_, __, body) => {
    console.log("DELETE: ", body);
  });
}

function bye() {
  setTimeout(() => {
    console.log("Bye!");
    process.exit(0);
  }, 1000);
}
