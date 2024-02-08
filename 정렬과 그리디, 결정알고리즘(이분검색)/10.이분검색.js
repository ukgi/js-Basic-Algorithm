function solution(target, arr) {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return middle + 1;
    else if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr)); // 3 , O(logN)
