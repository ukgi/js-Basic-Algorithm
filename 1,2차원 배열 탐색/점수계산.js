const [_, b] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const results = b.split(' ').map(Number);

const scores = [];
results.forEach((result) => {
  if (result === 0) {
    return scores.push(0);
  }

  if (scores[scores.length - 1] >= 1) {
    return scores.push(scores[scores.length - 1] + 1);
  }

  return scores.push(1);
});

console.log(scores.reduce((acc, cur) => acc + cur, 0));
