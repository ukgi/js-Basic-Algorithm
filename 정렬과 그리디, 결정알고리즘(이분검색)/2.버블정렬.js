function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    if (!swap) break;
  }
  return arr.join(' ');
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
