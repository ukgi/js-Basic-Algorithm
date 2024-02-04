function solution(m, arr) {
  let cnt = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    cnt += rt - lt + 1;
  }
  return cnt;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a)); // 10
