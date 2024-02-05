function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(' ');
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > 0 && temp < 0) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = temp;
  }
  return arr.join(' ');
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(bubbleSort(arr)); // -3 -2 -6 1 2 3 5 6
