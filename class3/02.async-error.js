const fs = require("fs");

console.log("Arranco a leer el archivo...!");

fs.readFile("not_existent_file", "utf-8", (err, content) => {
  if (err) {
    console.error("Uuhps!", err);
  } else {
    console.log(content);
  }
});

console.log("Terminó de leer el archivo... (<seguro>?)");