function solution(arr) {
  const tmp = [];
  let max = 0;

  arr.forEach((num) => {
    if (max < num) {
      max = num;
      tmp.push(num);
    }
  });

  return tmp.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
