const generateCombos = (n) => {
  if (n === 1) {
    return [[1]];
  }
  const combos = [];
  //rows
  for (let i = 0; i < n * n; i += n) {
    combos.push(Array.from({ length: n }, (_, index) => i + index + 1));
  }
  //columns
  for (let i = 0; i < n; i++) {
    const column = [];
    for (let j = i + 1; j <= n * n; j += n) {
      column.push(j);
    }
    combos.push(column);
  }

  // forward diagonal
  const forwardDiagonal = [];
  for (let i = 0; i < n * n; i += n + 1) {
    forwardDiagonal.push(i + 1);
  }
  combos.push(forwardDiagonal);

  //backward diagonal
  const backwardDiagonal = [];
  for (let i = n - 1; i < n * n - 1; i += n - 1) {
    backwardDiagonal.push(i + 1);
  }
  combos.push(backwardDiagonal);

  return combos;
};

const [_1, _2, sizeStr, ..._3] = process.argv;

let size = Number(sizeStr);
let combos = generateCombos(size);

combos.forEach((combo) => {
  console.log(combo.join(","));
});

module.exports = { generateCombos };
