function solution(str) {
  const tmp = [...str];
  const formatted = tmp.map((char) => {
    if (char.charCodeAt() >= 97) {
      return char.toUpperCase();
    }

    return char.toLowerCase();
  });

  return formatted.join('');
}

console.log(solution('StuDY'));
