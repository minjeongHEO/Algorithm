// function solution(n) {
//   var answer = 2

//   for (let i = 1; i <= 1000000; i++) {
//     if (n == i * i) {
//       answer = 1
//       break
//     }
//   }

//   return answer
// }

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}

/**
 * - Math.sqrt(n) (SQUARE ROOT;제곱근)
 *  : n이 음수인 경우 or 제곱근이 없는 경우 (즉, 실수 범위 내에서 존재하지 않는 경우)
 *    -> return NaN
 * - Number.isInteger()
 *  : 항상 return false
 *    제곱근이 정수라면 return true
 */
