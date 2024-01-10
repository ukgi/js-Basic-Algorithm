function solution(s) {
  const tmp = [...s];

  if ((tmp.length - 1) % 2 === 0) {
    return tmp[(tmp.length - 1) / 2];
  }

  return tmp[Math.floor(tmp.length / 2)] + tmp[Math.ceil(tmp.length / 2)];
}

console.log(solution('study'));
