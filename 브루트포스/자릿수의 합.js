function solution(n, arr) {
  let result;
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((num) => {
    let tmp = num;
    num = num.toString().split('').map(Number);
    let sum = num.reduce((acc, cur) => acc + cur, 0);
    if (max < sum) {
      max = sum;
      result = tmp;
    } else if (max === sum) {
      if (result < tmp) result = tmp;
    }
  });

  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
