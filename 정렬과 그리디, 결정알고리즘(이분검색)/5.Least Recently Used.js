function solution(s, arr) {
  const cache = Array.from({ length: s }).fill(0);
  for (let i = 0; i < arr.length; i++) {
    // cache miss
    if (!cache.includes(arr[i])) {
      let j;
      for (j = cache.length - 1; j > 0; j--) cache[j] = cache[j - 1];
      cache[j] = arr[i];
    }
    // cache hit
    else {
      const idx = cache.indexOf(arr[i]);
      const temp = cache[idx];
      let j;
      for (j = idx - 1; j >= 0; j--) cache[j + 1] = cache[j];
      cache[j + 1] = temp;
    }
  }
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); // 7 5 3 2 6
