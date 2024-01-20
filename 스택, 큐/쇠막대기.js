// ✨
function solution(s) {
  let result = 0;
  const stack = [];
  const tmp = [...s];
  tmp.forEach((c, i) => {
    if (c === ')') {
      if (tmp[i - 1] === '(') {
        stack.pop();
        result += stack.length;
      } else {
        stack.pop();
        result += 1;
      }
    } else stack.push(c);
  });

  return result;
}

const input = '()(((()())(())()))(())';
console.log(solution(input));
