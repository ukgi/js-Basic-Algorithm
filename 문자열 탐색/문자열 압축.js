// ❌
function solution(str) {
  let result = '';
  let cnt = 1;

  [...str].forEach((char, i, origin) => {
    if (origin[i + 1] === char) {
      return cnt++;
    }

    result += `${char}${cnt === 1 ? '' : cnt}`;
    cnt = 1;
  });

  return result;
}

let str = 'KKHSSSSSSSE';
let str2 = 'KHKKHSSSE';
console.log(solution(str));
console.log(solution(str2)); // expected : KHK2HS3E
