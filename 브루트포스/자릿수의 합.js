// 내 풀이
// function solution(n, arr) {
//   const sumList = [];
//   const indexOfmaxSum = [];

//   for (let i = 0; i <= arr.length - 1; i += 1) {
//     const tmp = String(arr[i]);
//     const sum = [...tmp].map(Number).reduce((acc, cur) => acc + cur, 0);

//     sumList.push(sum);
//   }
//   const maxSum = Math.max(...sumList);

//   for (let i = 0; i <= sumList.length - 1; i += 1) {
//     if (sumList[i] === maxSum) indexOfmaxSum.push(i);
//   }

//   if (indexOfmaxSum.length > 1) {
//     return Math.max(...indexOfmaxSum.map((i) => arr[i]));
//   }

//   return arr[indexOfmaxSum[0]];
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// 강의 풀이
function solution(n, arr) {
  let answer = 0;
  max = Number.MIN_SAFE_INTEGER;

  for (const x of arr) {
    let sum = 0;
    let tmp;
    tmp = x.toString().split('').map(Number);
    sum += tmp.reduce((acc, cur) => acc + cur, 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (answer < x) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
