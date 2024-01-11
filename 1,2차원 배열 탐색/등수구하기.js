function solution(arr) {
  const ranking = [...arr].sort((a, b) => b - a);
  const result = [];
  arr.forEach((num) => {
    result.push(ranking.findIndex((element) => element === num) + 1);
  });

  return result.join(' ');
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
