// 🔺

function getMaxOfDiagonalLine(arr) {
  const a = [];
  const b = [];
  arr.forEach((element, i) => {
    a.push(element[i]);
    b.push(element[element.length - 1 - i]);
  });

  const sumOfa = a.reduce((acc, cur) => acc + cur, 0);
  const sumOfb = b.reduce((acc, cur) => acc + cur, 0);

  return Math.max(sumOfa, sumOfb);
}

function getMaxOfTotalRows(arr) {
  let rows = [];
  arr.forEach((element, i) => {
    const tmp = [];
    arr.forEach((element) => {
      tmp.push(element[i]);
    });

    rows.push(tmp);
  });

  rows = rows.map((row) => row.reduce((acc, cur) => acc + cur, 0));

  return Math.max(...rows);
}

function getMaxofTotalColumns(arr) {
  const tmp = arr.map((element) => element.reduce((acc, cur) => acc + cur, 0));

  return Math.max(...tmp);
}

function solution(arr) {
  const maxRows = getMaxOfTotalRows(arr);
  const maxColumns = getMaxofTotalColumns(arr);
  const maxDiagonalLines = getMaxOfDiagonalLine(arr);

  return Math.max(maxRows, maxColumns, maxDiagonalLines);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// ✨풀이

function solution(arr) {
  let answer = 0;
  let n = arr.length;

  let sum1 = 0; // 각 행의 합, 대각선1의 합
  let sum2 = 0; // 각 열의 합, 대각선2의 합

  for (let i = 0; i < n; i += 1) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j += 1) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i += 1) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
}
