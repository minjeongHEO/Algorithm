// 재귀 함수를 이용하여 풀기
function solution(x, arr = []) {
  arr.push(x);

  if (x === 1) return arr;
  if (x % 2 === 0) return solution(x / 2, arr);
  return solution(3 * x + 1, arr);
}
