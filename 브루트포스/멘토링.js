// 내 풀이
// function solution(arr) {
//   let result = 0;
//   const table = {};

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       if (table[arr[i][j]]) {
//         table[arr[i][j]].push(j + 1);
//       } else {
//         table[arr[i][j]] = [];
//         table[arr[i][j]].push(j + 1);
//       }
//     }
//   }

//   for (const key in table) {
//     const mentor = key;
//     const candidated = Object.keys(table).filter((student) => student !== key);
//     candidated.forEach((student) => {
//       if (table[student].every((ranking, i) => table[mentor][i] > ranking)) {
//         result += 1;
//       }
//     });
//   }

//   return result;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));

// ✅강의 풀이
function solution(n, m, test) {
  let result = 0;
  const tmp = [];

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      let cnt = 0;
      if (i === j) continue;

      for (let t = 0; t < m; t += 1) {
        let ir = -1;
        let jr = -1;
        for (let k = 0; k < n; k += 1) {
          if (arr[t][k] === i) ir = k;
          if (arr[t][k] === j) jr = k;
        }
        if (ir < jr) cnt += 1;
      }

      if (cnt === m) {
        result += 1;
        tmp.push([i, j]);
      }
    }
  }

  console.log(tmp);
  return result;
}

const n = 4;
const m = 3;
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(n, m, arr));
