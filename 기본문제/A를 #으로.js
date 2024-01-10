function solution(str) {
  const tmp = [...str];
  const formatted = tmp.map((char) => {
    if (char === 'A') {
      return '#';
    }

    return char;
  });

  return formatted.join('');
}

let str = 'BANANA';
console.log(solution(str));
