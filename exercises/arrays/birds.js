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
console.log(birds.sort((elem1, elem2) => (elem1.name > elem2.name)));

// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
console.log(Object.values(birds).find((value) => (value.name === "Zorzal Colorado")));

// 3. Array de nombres de los pájaros de la familia "Tirannydae".
console.log(Object.values(birds).filter((value) => value.family === "Tirannydae"));

// 4. Cantidad de pájaros de la familia "Furnaridae".
console.log(Object.values(birds).reduce((total, value) => {
  if (value.family === "Furnaridae") {
    return total + 1;
  }
  return total;
},
0));