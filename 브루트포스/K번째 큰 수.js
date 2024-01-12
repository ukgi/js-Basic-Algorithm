/*
- N개의 카드에서 3장을 뽑을 수 있는 조합 리스트를 만든다.
- 각 조합의 합의 배열을 만든다.
- 오름차순으로 정렬하여 k 인덱스에 해당하는 값을 반환한다.
*/

/* 
내 풀이

function getCombinations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
}

function solution(n, k, arr) {
  const combination = getCombinations(arr, 3);
  let sumList = combination.map(([a, b, c]) => a + b + c);
  sumList = [...new Set([...sumList])].sort((a, b) => b - a);

  return sumList[k - 1] ? sumList[k - 1] : -1;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr)); 
*/

// 반복문을 활용한 풀이
function solution(n, k, arr) {
  const sum = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      for (let t = j + 1; t < arr.length; t += 1) {
        sum.add(arr[i] + arr[j] + arr[t]);
      }
    }
  }
  const result = Array.from(sum).sort((a, b) => b - a)[k - 1];

  return result;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
