/*
🔺
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램

- 총 비용으로 오름차순 정렬
- 정렬한 배열을 모두 순회
    - 첫번째 요소부터 할인을 받았을 때 총 몇개의 상품을 구매할 수 있는지 배열에 저장
- 배열에 저장된 상품 갯수 중 최댓값을 반환
*/

function solution(m, arr) {
  let result = 0;
  const sorted = arr.sort(([a, b], [c, d]) => a + b - (c + d));

  for (let i = 0; i < sorted.length; i += 1) {
    let count = 1;
    let sum = sorted[i][0] / 2 + sorted[i][1];
    for (let j = 0; j < sorted.length; j += 1) {
      if (i === j) continue;

      sum += arr[j][0] + arr[j][1];
      if (sum > m) break;
      count += 1;
    }
    result = Math.max(result, count);
  }

  return result;
}

let arr = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [12, 1],
];
console.log(solution(41, arr));
