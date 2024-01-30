function solution(m, arr) {
  let result = Number.MIN_SAFE_INTEGER;
  arr.sort(([a, b], [c, d]) => a + b - (c + d));
  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;
    let r = m - (arr[i][0] / 2 + arr[i][1]);
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (r > 0) {
        r -= arr[j][0] + arr[j][1];
        cnt++;
      } else break;
    }
    result = Math.max(result, cnt);
  }

  return result;
}

let arr = [
  [2, 12],
  [8, 4],
  [6, 6],
  [6, 7],
];
console.log(solution(33, arr));
