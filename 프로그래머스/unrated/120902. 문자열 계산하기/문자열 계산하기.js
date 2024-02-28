function solution(s) {
  const tokens = s.split(" ") // 연산자와 숫자를 분리
  // 초기값 설정
  let result = Number(tokens[0])

  // 연산자에 따라 계산
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i]
    const nextNumber = Number(tokens[i + 1])

    if (operator === "+") {
      result += nextNumber
    } else if (operator === "-") {
      result -= nextNumber
    }
  }

  return result
}

// reduce를 사용하여 풀이
function solution(s) {
  const tokens = s.split(" ") // 공백을 기준으로 문자열을 분리

  const result = tokens.reduce((acc, cur, idx, src) => {
    // 첫 번째 숫자를 초기값으로 설정
    if (idx === 0) return Number(cur)

    // 이전 요소가 연산자일 경우, 현재 숫자와 연산
    if (src[idx - 1] === "+") return acc + Number(cur)
    if (src[idx - 1] === "-") return acc - Number(cur)

    // 연산자가 아닐 경우, 누적값 반환
    return acc
  }, 0)

  return result
}
