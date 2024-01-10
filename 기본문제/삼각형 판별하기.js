function solution(a, b, c) {
  const lengths = [a, b, c];
  const maxLength = Math.max(...lengths);
  const maxLengthIndex = lengths.findIndex((length) => length === maxLength);

  const rests = [...lengths];
  rests.splice(maxLengthIndex, 1);
  const sumOfRests = rests.reduce((acc, cur) => acc + cur, 0);

  return sumOfRests > maxLength ? 'YES' : 'NO';
}

console.log(solution(13, 33, 17));
