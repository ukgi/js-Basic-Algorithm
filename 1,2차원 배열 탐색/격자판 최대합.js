function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let rows = 0;
    let colums = 0;
    for (let j = 0; j < arr.length; j++) {
      rows += arr[i][j];
      colums += arr[j][i];
    }
    max = Math.max(max, rows, colums);
  }

  let diaA = 0;
  let diaB = 0;
  for (let i = 0; i < arr.length; i++) {
    diaA += arr[i][i];
    diaB += arr[i][arr.length - 1 - i];
  }
  max = Math.max(max, diaA, diaB);
  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
