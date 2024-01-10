const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const days = Number(input[0]);
const cars = input[1].split(' ');

function solution(days, cars) {
  let count = 0;

  cars.forEach((carNum) => {
    if (carNum.includes(days)) {
      count += 1;
    }
  });

  return count;
}

console.log(solution(days, cars));
