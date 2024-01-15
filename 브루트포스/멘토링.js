function solution(test) {
  let answer = 0;
  const tmp = [];
  const m = test.length;
  const n = test[0].length;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      let cnt = 0;
      if (i === j) continue;
      for (let k = 0; k < m; k += 1) {
        let ir = -1;
        let jr = -1;
        for (let s = 0; s < n; s += 1) {
          if (arr[k][s] === i) ir = s;
          if (arr[k][s] === j) jr = s;
        }
        if (ir < jr) cnt += 1;
      }
      if (cnt === m) {
        answer += 1;
        tmp.push([i, j]);
      }
    }
  }

  console.log(tmp);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
