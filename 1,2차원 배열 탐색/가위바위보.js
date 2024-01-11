/*
a - b = 1 (a의 승리)
a - b = -2 (a의 승리)
a - b = 2 (b의 승리)
a - b = -1 (b의 승리)
a - b = 0 (비김)
*/

function solution(a, b) {
  const gameCount = a.length;
  const winner = [];

  for (let i = 0; i < gameCount; i += 1) {
    if (a[i] - b[i] === 0) {
      winner.push('D');
    } else if (a[i] - b[i] === 1 || a[i] - b[i] === -2) {
      winner.push('A');
    } else {
      winner.push('B');
    }
  }

  return winner.join('\n');
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
