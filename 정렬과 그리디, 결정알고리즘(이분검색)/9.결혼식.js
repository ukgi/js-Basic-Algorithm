function solution(times) {
  let result = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  const timelines = [];
  times.forEach((time) => {
    timelines.push([time[0], 's']);
    timelines.push([time[1], 'e']);
  });
  timelines.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
    }
    return a[0] - b[0];
  });
  timelines.forEach(([time, event]) => {
    if (event === 's') cnt += 1;
    else cnt -= 1;
    result = Math.max(result, cnt);
  });

  return result;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
