// function solution(need, plan) {
//   let tmp = '';
//   const queue = [];
//   for (const x of plan) if (need.includes(x)) queue.push(x);
//   while (queue.length) tmp += queue.shift();

//   return tmp === need ? 'YES' : 'NO';
// }

function solution(need, plan) {
  let result = 'YES';
  const queue = [...need];
  for (const c of plan) {
    if (queue.length === 0) return result;
    if (queue.includes(c)) {
      if (c === queue[0]) queue.shift();
      else return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return result;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
