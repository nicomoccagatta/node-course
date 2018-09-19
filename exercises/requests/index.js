const request = require("request");

function getJSON(url) {
  const options = {
    url,
    headers: {
      "user-agent": "node-course",
    }
  };

  return new Promise((resolve, reject) => {
    request.get(options, (err, response, body) => {
      if (err) {
        reject(err);
      } else if (response.statusCode === 200) {
        try {
          resolve(JSON.parse(body));
        } catch (ex) {
          reject(ex);
        }
      } else {
        console.error(response);
        // Log the conflictive response but returns an error without any request data!
        reject(new Error("Couldn't get response!"));
      }
    });
  });
}

Promise.all([
  getJSON("http://ws.geeklab.com.ar/dolar/get-dolar-json.php"),
  getJSON("https://api.github.com/orgs/nodejs/repos")
])
  .then(([dollars, repos]) => {
    console.log("Response from dollars:", dollars);
    console.log("Response from repos:", repos.map((repo) => {
      return `${repo.name}: ${repo.clone_url}`;
    }));
  })
  .catch(console.error);