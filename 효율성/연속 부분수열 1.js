function solution(m, arr) {
  let result = 0;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) result++;
    while (sum >= m) {
      sum -= arr[left];
      left++;
      if (sum === m) result++;
    }
  }

  return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a)); // 3
