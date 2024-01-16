let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);

function solution(a, b) {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  const n = a.length;
  const m = b.length;

  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) {
      result.push(a[p1]);
      p1 += 1;
    } else {
      result.push(b[p2]);
      p2 += 1;
    }
  }
  while (p1 < n) {
    result.push(a[p1]);
    p1++;
  }
  while (p2 < m) {
    result.push(b[p2]);
    p2++;
  }

  return result.join(' ');
}

console.log(solution(a, b));
