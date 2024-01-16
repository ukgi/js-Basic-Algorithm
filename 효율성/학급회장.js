function solution1(s) {
  const tmp = [...s];
  const h = {};
  let result = '';
  let max = 0;

  tmp.forEach((p) => {
    if (h[p]) h[p] += 1;
    else {
      h[p] = 0;
      h[p] += 1;
    }
  });
  max = Math.max(...Object.values(h));
  for (const key in h) {
    if (h[key] === max) {
      result = key;
      break;
    }
  }

  return result;
}

// Map
function solution2(s) {
  let answer;
  let sH = new Map();
  for (const x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (const [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution2(str)); // C
