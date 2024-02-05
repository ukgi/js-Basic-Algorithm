function solution(arr) {
  arr.sort(([x1, y1], [x2, y2]) => {
    if (x1 === x2) return y1 - y2;
    return x1 - x2;
  });

  return arr.map((e) => e.join(' ')).join('\n');
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
