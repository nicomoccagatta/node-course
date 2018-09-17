/* eslint one-var: 0, func-style: 0 */

// Array.map()
console.log("Array.map()");
const double = x => x * 2;
const arr = [1, 2, 3];
const result1 = arr.map(n => n * 2);
const result2 = arr.map(double);

console.log(result1);
console.log(result2);

const result3 = arr.map(double).map(double);

console.log(result3);

// Array.filter()
const bestPlayers = [
  {
    name: "Juan Román Riquelme",
    country: "AR"
  },
  {
    name: "Johan Cruyff",
    country: "HO"
  },
  {
    name: "Diego Maradona",
    country: "AR"
  },
  {
    name: "Zinedine Zidane",
    country: "FR"
  },
  {
    name: "Lionel Messi",
    country: "AR"
  },
  {
    name: "Ronaldo",
    country: "BR"
  }
];

console.log("Array.filter() country AR");
const playersArgentos = bestPlayers.filter(player => player.country === "AR");
console.log(playersArgentos);

// Array.find()
console.log("Array.find() Ronaldo");
const playerRonaldo = bestPlayers.find(player => player.name === "Ronaldo");
console.log(playerRonaldo);
console.log("Array.findIndex() FR");
const indexPlayerFranchute = bestPlayers.findIndex(player => player.country === "FR");
console.log(indexPlayerFranchute);
console.log(bestPlayers[indexPlayerFranchute]);

// Array.sort()
console.log("Array.sort() by name");
const playersOrderedByName = bestPlayers.sort((player1, player2) => player1.name > player2.name);
console.log(playersOrderedByName);
console.log("Array.sort() by country");
const playersOrderedByCountry = bestPlayers.sort((player1, player2) => player1.country > player2.country);
console.log(playersOrderedByCountry);
console.log("Array.sort() by country and name (desc)");
const playersOrderedByCountryAndName = bestPlayers.sort((player1, player2) => {
  if (player1.country === player2.country) {
    return player1.name < player2.name;
  }
  return player1.country > player2.country;
});
console.log(playersOrderedByCountryAndName);

// Array.reduce()
console.log("Array.reduce()");
const sum = [2, 5, 1].reduce((a, b) => a + b);
console.log(sum);
console.log("Array.reduce() with initial value: 2");
const sum2 = [2, 5, 1].reduce((a, b) => a + b, 2);
console.log(sum2);