function solution(str) {
  const tmp = [...str];
  let count = 0;

  tmp.forEach((char) => {
    if (char.charCodeAt() < 97) {
      count += 1;
    }
  });

  return count;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
