function solution(n) {
  var result = [];
  let x = n;

  while (x !== 1) {
    result.push(x);
    if (x % 2 === 0) x /= 2;
    else x = 3 * x + 1;
  }
  result.push(1);

  return result;
}
