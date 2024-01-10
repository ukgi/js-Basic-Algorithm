function solution(s) {
  let max = '';

  s.forEach((string) => {
    if (string.length > max.length) {
      max = string;
    }
  });

  return max;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
