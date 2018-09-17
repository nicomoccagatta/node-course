const request = require("request");

function getJSON(url) {
  // Your code here!
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