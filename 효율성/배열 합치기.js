function solution(a, b) {
  const result = [];
  let ptrA = 0;
  let ptrB = 0;
  const n = a.length;
  const m = b.length;

  while (ptrA < n && ptrB < m) {
    if (a[ptrA] > b[ptrB]) {
      result.push(b[ptrB]);
      ptrB++;
    } else {
      result.push(a[ptrA]);
      ptrA++;
    }
  }
  while (ptrA < n) {
    result.push(a[ptrA]);
    ptrA++;
  }
  while (ptrB < m) {
    result.push(b[ptrB]);
    ptrB++;
  }

  return result.join(' ');
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // 1 2 3 3 5 6 7 9
