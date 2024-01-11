function solution(str) {
  const formatted = str.replace(/\D/g, '');

  console.log(parseInt(formatted, 10));
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
