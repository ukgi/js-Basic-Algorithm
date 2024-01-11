function solution(s) {
  const formatted = s.toUpperCase();
  const filtered = [...formatted].filter((char) => char.charCodeAt() >= 65 && char.charCodeAt() <= 90).join('');

  if (filtered === [...filtered].reverse().join('')) {
    return 'YES';
  }

  return 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

// 65(A) ~ 90(Z)
