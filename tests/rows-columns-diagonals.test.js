const { expect, test } = require("@jest/globals");
const { generateCombos } = require("../rows-columns-diagonals.js");
const _ = require("lodash");

let size = 3 + Math.floor(Math.random() * 10);
let combos = generateCombos(size);

test("1. there should be `n * 2 + 2` distinct combos", () => {
  expect(combos.length).toBe(size * 2 + 2);
});

test("2. length of each combo should be n", () => {
  expect(_.chain(combos).map("length").uniq().value()).toEqual([size]);
});

let isComboInc = (combo, incSize) => {
  let inc = false;

  for (let i = 1; i < size; i++) {
    if (combo[i] - combo[i - 1] === incSize) {
      inc = true;
    } else {
      inc = false;
      break;
    }
  }

  return inc;
};

let isComboInc1 = _.partialRight(isComboInc, 1);
let isComboIncN = _.partialRight(isComboInc, size);
let isComboIncNPlus1 = _.partialRight(isComboInc, size + 1);
let isComboIncNMinus1 = _.partialRight(isComboInc, size - 1);

let inc1combos = _.filter(combos, (combo) => {
  return isComboInc1(combo);
}).length;

let incNCombos = _.filter(combos, (combo) => {
  return isComboIncN(combo);
}).length;

let incNPlus1Combos = _.filter(combos, (combo) => {
  return isComboIncNPlus1(combo);
}).length;

let incNMinus1Combos = _.filter(combos, (combo) => {
  return isComboIncNMinus1(combo);
}).length;

test("3. test rows: there should n distinct combos with each element incrementing by 1", () => {
  expect(inc1combos).toEqual(size);
});

test("4. test columns: there should n distinct combos with each element incrementing by n", () => {
  expect(incNCombos).toEqual(size);
});

test("5. test forward diagonal: there should exactly 1 row with each element incrementing by n", () => {
  expect(incNPlus1Combos).toEqual(1);
});

test("6. test backward diagonal: there should exactly 1 row with each element incrementing by n - 1", () => {
  expect(incNMinus1Combos).toEqual(1);
});

let numElementsInRange = _.chain(combos)
  .flattenDeep()
  .filter((el) => {
    return 1 <= el && el <= size * size;
  })
  .value().length;

test("7. test index values: every element of flattened array should be between [1, n * n]", () => {
  expect(numElementsInRange).toEqual((size * 2 + 2) * size);
});

test("8. test for n=1: should return single combo [1]", () => {
  const result = generateCombos(1);
  expect(result).toEqual([[1]]);
});
