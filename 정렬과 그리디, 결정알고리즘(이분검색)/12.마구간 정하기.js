/**
 가장 가까운 두 말의 거리의 최댓값
 c : 말의 갯수
 arr : 마구간의 좌표
 */

function count(arr, d) {
  let ep = arr[0];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= d) {
      ep = arr[i];
      cnt++;
    }
  }
  return cnt;
}

function solution(c, arr) {
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  let result = 0;
  while (lt <= rt) {
    const distance = Math.floor((lt + rt) / 2);
    if (count(arr, distance) < c) rt = distance - 1;
    else {
      result = distance;
      lt = distance + 1;
    }
  }
  return result;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr)); // 3
