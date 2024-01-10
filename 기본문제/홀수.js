const getOdd = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};

const calculateMin = (arr) => {
  let min = Infinity;

  arr.forEach((num) => {
    if (num < min) min = num;
  });

  return min;
};

function solution(arr) {
  const odds = getOdd(arr);
  const sumOfOdds = odds.reduce((acc, cur) => acc + cur, 0);
  const minOdds = calculateMin(odds);

  console.log(sumOfOdds);
  console.log(minOdds);
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
