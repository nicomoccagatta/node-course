const http = require("http"),
  file = `${__dirname}/requests.log`,
  fs = require("fs");

function transformDataObjectToJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

function logRequest(data) {
  const logMessage = transformDataObjectToJson(data);
  fs.appendFile(file, logMessage, (err) => {
    console.log("fs writeFile");
    if (err) {
      console.error(err);
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
}).listen(8000);