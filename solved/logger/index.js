const http = require("http"),
  fs = require("fs"),
  file = `${__dirname}/requests.log`;

function transformDataObjectToJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

function logRequest(data) {
  fs.appendFile(file, transformDataObjectToJson(data), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Request data written to ${file}`);
    }
  });
}

http.createServer((req, res) => {
  const data = {
    url: req.url,
    headers: req.headers,
    ip: req.connection.remoteAddress,
    timestamp: new Date().toISOString()
  };

  console.log(`Request received for ${req.url}`);
  logRequest(data);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(transformDataObjectToJson(data));
  console.log("Response sent!");
}).listen(8000);