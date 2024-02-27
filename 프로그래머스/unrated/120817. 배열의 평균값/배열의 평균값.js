function solution(numbers) {
  var answer = 0;
  numbers.forEach((e) => {
    answer += e;
  });

  return answer / numbers.length;
}

// reduce 사용 풀이
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}
