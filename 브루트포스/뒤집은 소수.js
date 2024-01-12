// 내 풀이
// function solution(arr) {
//   let result = [];
//   const reversed = [];

//   arr.forEach((num) => {
//     const formatted = Number(num.toString().split('').reverse().join(''));
//     reversed.push(formatted);
//   });

//   reversed.forEach((num) => {
//     const prime = [];
//     for (let i = 1; i <= num; i += 1) {
//       if (num % i === 0) prime.push(i);
//     }

//     if (prime.length === 2) result.push(num);
//   });
//   result = result.join(' ');

//   return result;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

// ✅강의 풀이

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
