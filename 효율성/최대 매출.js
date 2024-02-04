function solution1(k, arr) {
  let subSum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    subSum += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, subSum);
      subSum -= arr[i - (k - 1)];
    }
  }

  return max;
}

function solution2(k, arr) {
  let sum = 0;
  let result;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  result = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    result = Math.max(result, sum);
  }
  return result;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a)); // 56
