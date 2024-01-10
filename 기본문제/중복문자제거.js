function solution(s) {
  const deletedDuplicate = new Set([...s]);

  return [...deletedDuplicate].join('');
}

console.log(solution('ksekkset'));
