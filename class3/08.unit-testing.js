/* eslint func-style: 0 */

const {assert, expect} = require("chai");

function sum(a, b) {
  return a + b;
}

assert.equal(sum(1, 1), 2);
expect(sum(1, 1)).to.eql(2);

assert.equal(sum(0, 1), 1);
expect(sum(0, 1)).to.eql(1);

assert.equal(sum(1, -1), 0);
expect(sum(1, -1)).to.eql(0);


function arrayFromNumber(x) {
  const arr = [];
  for (let idx = 1; idx <= x; idx++) {
    arr.push(idx);
  }
  return arr;
}

// https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
// assert.equal(arrayFromNumber(1), [1]); // Este test va a fallar por que [1] !== [1]
// expect(arrayFromNumber(1)).to.equal([1]); // Y este también por el mismo motivo
expect(arrayFromNumber(1)).to.eql([1]); // Pero este SÍ pasa por el uso de eql()
expect(arrayFromNumber(0)).to.eql([]);
expect(arrayFromNumber(2)).to.eql([1, 2]);


function canAccessToCasino(person) {
  if (!person || !person.age || person.age < 18) {
    throw new Error("cannot access!");
  }
  return true;
}

// Por qué debemos hacer esto?
let wrapper = () => {
  canAccessToCasino();
};
assert.throws(wrapper, /cannot access!/);
expect(wrapper).to.throw(/cannot access!/);

wrapper = () => {
  canAccessToCasino({name: "Joe"});
};
assert.throws(wrapper, /cannot access!/);
expect(wrapper).to.throw(/cannot access!/);

wrapper = () => {
  canAccessToCasino({name: "Joe", age: 17});
};
assert.throws(wrapper, /cannot access!/);
expect(wrapper).to.throw(/cannot access!/);

assert.equal(canAccessToCasino({name: "Ian", age: 18}), true);
expect(canAccessToCasino({name: "Ian", age: 18})).to.eql(true);