function solution(arr) {
  const tmp = [];

  arr.forEach((num, i, origin) => {
    if (origin[i - 1] < num) {
      tmp.push(num);
    }
  });

  return [arr[0], ...tmp].join(' ');
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
