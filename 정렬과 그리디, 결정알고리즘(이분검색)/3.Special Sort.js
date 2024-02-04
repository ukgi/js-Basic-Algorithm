function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        swap = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = swap;
      }
    }
    if (!swap) break;
  }
  return arr.join(' ');
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); // -3 -2 -6 1 2 3 5 6
