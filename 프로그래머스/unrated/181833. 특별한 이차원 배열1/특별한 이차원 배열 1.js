function solution(n) {
  const answer = Array.from({ length: n }, () => {
    return Array.from({ length: n }).fill(0);
  });

  answer.forEach((e, idx) => {
    answer[idx][idx] = 1;
  });

  return answer;
}

//다른 풀이 1
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}

//다른 풀이 2
function solution(n) {
  return Array(n).map((_, i) => Array(n).map(($, j) => (i === j ? 1 : 0)));
}
