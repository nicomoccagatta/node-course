// Example from: https://nodejs.org/en/about/

const http = require("http"),
  hostname = "127.0.0.1",
  port = 8000,
  server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world!\n");
  });

server.listen(port, hostname, () => {
  const url = `http://${hostname}:${port}/`;
  console.log(`Server running at ${url}`);

  // Verify that server is up!
  http.get(url, (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      console.log(`RESPONSE: ${data}`);
    });

  }).on("error", (err) => {
    console.error(err);
  });
});