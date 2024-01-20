function solution(s, t) {
  const result = [];
  let tmp = 1000;
  for (const c of s) {
    if (c === t) tmp = 0;
    else tmp += 1;
    result.push(tmp);
  }
  tmp = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) tmp = 0;
    else {
      tmp += 1;
      result[i] = Math.min(result[i], tmp);
    }
  }

  return result;
}

let str = 'teachermod';
console.log(solution(str, 'e'));
