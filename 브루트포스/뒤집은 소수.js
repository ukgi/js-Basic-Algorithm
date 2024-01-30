function isPrime(number) {
  if (number === 1) return false;
  for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const tmp = Number(arr[i].toString().split('').reverse().join(''));
    if (isPrime(tmp)) result.push(tmp);
  }

  return result.join(' ');
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
