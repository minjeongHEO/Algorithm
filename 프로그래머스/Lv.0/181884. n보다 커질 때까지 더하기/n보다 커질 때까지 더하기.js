function solution(numbers, n) {
  var answer = numbers.reduce((sum, e) => {
    if (sum > n) {
      return sum
    }
    return sum + e
  }, 0)
  return answer
}
