function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(10));
