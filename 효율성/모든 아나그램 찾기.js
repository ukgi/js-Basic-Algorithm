/*
🚀기능 목록
- T 사이즈 만큼의 윈도우 크기를 정한다.
- 슬라이딩 윈도우를 이용해 S를 순회하며 아나그램인지 확인한다.
- 아나그램이면 cnt를 +1 한다.
*/

function isAnagram(str1, str2) {
  let answer = true;
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return false;
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

function solution(s, t) {
  let result = 0;
  let lt = 0;
  const exam = [];
  for (let rt = t.length - 1; rt < s.length; rt++) {
    const tmp = s.slice(lt, rt + 1);
    if (isAnagram(tmp, t)) {
      exam.push(tmp);
      result++;
    }
    lt++;
  }
  console.log(exam);
  return result;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
