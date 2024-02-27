function solution(n) {
  var answer = 0;

  answer = new Array({ length: n })
    .map((_, idx) => {
      return idx + 1;
    })
    .reduce((acc, cur) => {
      if (cur % 2 == 0) acc + cur;
    }, 0);

  return answer;
}

solution(10);
