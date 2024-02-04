function solution1(str1, str2) {
  let isAnagram = true;
  const ah = {};
  const bh = {};
  const a = [...str1];
  const b = [...str2];

  a.forEach((c) => {
    if (ah[c]) ah[c]++;
    else {
      ah[c] = 0;
      ah[c]++;
    }
  });
  b.forEach((c) => {
    if (bh[c]) bh[c]++;
    else {
      bh[c] = 0;
      bh[c]++;
    }
  });

  for (const key in ah) {
    if (ah[key] !== bh[key]) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram ? 'YES' : 'NO';
}

// Map
function solution2(str1, str2) {
  let result = 'YES';
  let sH = new Map();
  for (const x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return result;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution2(a, b));
