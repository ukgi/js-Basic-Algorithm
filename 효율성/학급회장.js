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
  let result;
  const map = new Map();
  for (const x of s) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      result = key;
    }
  }
  return result;
}

let str = 'BACBACCACCBDEDE';
console.log(solution2(str)); // C
