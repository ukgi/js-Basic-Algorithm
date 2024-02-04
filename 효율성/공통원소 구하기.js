function solution(arr1, arr2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;
  const m = arr2.length;

  // 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      result.push(arr1[p1]);
      p1++;
      p2++;
    }
  }

  return result.join(' ');
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b)); // 2 3 5
