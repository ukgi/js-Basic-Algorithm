function solution(s) {
  const table = {};

  s.forEach((string) => {
    if (table[string]) {
      return (table[string] += 1);
    }

    table[string] = 1;
  });

  return Object.keys(table).join('\n');
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
