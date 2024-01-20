function solution(s) {
  const stack = [];
  const operators = ['+', '-', '*', '/'];
  [...s].forEach((x) => {
    if (operators.includes(x)) {
      const a = Number(stack.pop());
      const b = Number(stack.pop());
      if (x === '+') stack.push(b + a);
      if (x === '-') stack.push(b - a);
      if (x === '*') stack.push(b * a);
      if (x === '/') stack.push(b / a);
    } else stack.push(x);
  });

  return stack.pop();
}

let str = '352+*9-';
console.log(solution(str));
