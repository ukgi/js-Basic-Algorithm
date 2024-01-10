const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const getCombinations = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    result.push(...attached);
  });

  return result;
};

function solution(arr) {
  const combinations = getCombinations(arr, 7);
  const result = combinations.filter((combination) => combination.reduce((acc, cur) => acc + cur, 0) === 100);
  result[0].sort((a, b) => a - b);

  return result[0];
}

console.log(solution(input).join('\n'));
