function solution(n) {
  let min = Infinity;

  n.forEach((num) => {
    if (num < min) min = num;
  });

  return min;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
