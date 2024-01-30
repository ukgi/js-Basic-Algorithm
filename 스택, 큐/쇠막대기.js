function solution(s) {
  let count = 0;
  const stack = [];
  [...s].forEach((c, i) => {
    if (c === ')') {
      if (i - stack[stack.length - 1] === 1) {
        stack.pop();
        count += stack.length;
      } else {
        count += 1;
        stack.pop();
      }
    } else stack.push(i);
  });

  return count;
}

let a = '()(((()())(())()))(())';
console.log(solution(a)); // 17
