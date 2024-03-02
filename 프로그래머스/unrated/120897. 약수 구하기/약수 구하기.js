function solution(n) {
  let result = new Set()
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      result.add(i)
    }
  }

  return Array.from(result)
}

// 다른 풀이
function solution(n) {
  return Array.from({ length: n }, (_, index) => index + 1).filter(v => n % v === 0)
}
