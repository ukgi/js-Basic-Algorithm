function solution(str, special) {
  const tmp = [...str];

  return tmp.filter((char) => char === special).length;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
