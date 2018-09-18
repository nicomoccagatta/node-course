/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:
// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.
// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
// 3. Array de nombres de los pájaros de la familia "Tirannydae".
// 4. Cantidad de pájaros de la familia "Furnaridae".

function filterBy(array, prop, val) {
  return array.filter(elem => elem[prop] === val);
}

const birdNames = birds.map(b => b.name).sort((bName1, bName2) => bName1 > bName2);
console.log("1. Nombres de todos los pájaros alfabéticamente:\n", birdNames.join(", "));

const zorzal = birds.find(b => b.name === "Zorzal Colorado");
console.log("2. Objeto completo para \"Zorzal Colorado\":\n", zorzal);

const tirannydae = filterBy(birds, "family", "Tirannydae").map(b => b.name);
console.log("3. Nombres de los pájaros de la familia \"Tirannydae\":\n", tirannydae);

const furnaridae = filterBy(birds, "family", "Furnaridae").length;
console.log("4. Cantidad de pájaros de la familia \"Furnaridae\" (length):\n", furnaridae);

const furnaridae2 = birds.reduce((count, bird) => {
  return count + (bird.family === "Furnaridae" ? 1 : 0);
}, 0);
console.log("4. Cantidad de pájaros de la familia \"Furnaridae\" (reduce):\n", furnaridae2);