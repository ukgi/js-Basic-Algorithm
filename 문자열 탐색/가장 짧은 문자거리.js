// function solution(str, t) {
//   let answer;
//   const counts = {};
//   const formatted = [...str];

//   formatted.forEach((char, i) => {
//     if (counts[char]) {
//       return counts[char].push(i);
//     }

//     counts[char] = [];
//     counts[char].push(i);
//   });

//   const tIndexs = counts[t];

//   answer = formatted.reduce((store, cur, i) => {
//     const tmp = [];
//     tIndexs.forEach((index) => {
//       tmp.push(Math.abs(index - i));
//     });
//     store.push(Math.min(...tmp));

//     return store;
//   }, []);

//   return answer.join(' ');
// }

// let str = 'teachermode';
// console.log(solution(str, 'e'));

function solution(str, t) {
  let answer = [];
  let p = 1000;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === t) {
      p = 0;
    } else {
      p += 1;
    }

    answer.push(p);
  }

  p = 1000;
  for (let j = str.length - 1; j >= 0; j -= 1) {
    if (str[j] === t) {
      p = 0;
    } else {
      p += 1;
      answer[j] = Math.min(p, answer[j]);
    }
  }

  return answer.join(' ');
}

let str = 'teachermode';
console.log(solution(str, 'e'));
