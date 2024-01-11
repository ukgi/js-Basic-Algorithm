function solution(s) {
  const formatted = s.toUpperCase();

  if (formatted === [...formatted].reverse().join('')) {
    return 'YES';
  }

  return 'NO';
}

let str = 'goooG';
console.log(solution(str));
