function solution(n) {
  // const arr = Array.from({ length: n }).map((_, idx) => {
  //   return idx + 1;
  // });
  // 🔽
  const arr = Array.from({ length: n }, (_, idx) => idx + 1);

  const result = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    } else {
      // 짝수가 아닌 경우 누적값을 그대로 반환
      return acc;
    }
  }, 0);

  return result;
}
