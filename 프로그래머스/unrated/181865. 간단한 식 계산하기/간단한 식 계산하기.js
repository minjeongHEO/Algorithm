function solution(binomial) {
  const answer = binomial.split(" ").reduce((acc, cur, idx, arr) => {
    if (idx === 0) {
      return Number(cur)
    } else if (cur === "+" || cur === "-" || cur === "*") {
      return acc
    } else if (isNaN(arr[idx - 1])) {
      switch (arr[idx - 1]) {
        case "+":
          return acc + Number(cur)
        case "-":
          return acc - Number(cur)
        case "*":
          return acc * Number(cur)
      }
    }
  }, 0)

  return answer
}

// 다른 풀이
function solution(binomial) {
  const [a, ex, b] = binomial.split(" ")
  return ex === "+" ? +a + +b : ex === "-" ? a - b : a * b
}
