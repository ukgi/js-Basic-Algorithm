// 🔺

function solution(arr) {
  let result = 0;
  const n = arr.length;
  const formatted = arr.map((list) => [0, ...list, 0]);
  formatted.push(Array.from({ length: n + 2 }).fill(0));
  formatted.unshift(Array.from({ length: n + 2 }).fill(0));

  for (let i = 1; i < formatted.length - 1; i += 1) {
    for (let j = 1; j < formatted.length - 1; j += 1) {
      if (
        formatted[i][j] > formatted[i][j + 1] &&
        formatted[i][j] > formatted[i][j - 1] &&
        formatted[i][j] > formatted[i + 1][j] &&
        formatted[i][j] > formatted[i - 1][j]
      ) {
        result += 1;
      }
    }
  }

  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

// ✨다른풀이
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
