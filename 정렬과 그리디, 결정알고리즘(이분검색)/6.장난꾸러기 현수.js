function solution(arr) {
  const result = [];
  const copy = [...arr];
  for (let i = 1; i < copy.length; i++) {
    const temp = copy[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (copy[j] > temp) copy[j + 1] = copy[j];
      else break;
    }
    copy[j + 1] = temp;
  }
  arr.forEach((t, i) => {
    if (t !== copy[i]) result.push(i + 1);
  });

  return result.join(' ');
}
// o(N)

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
