function solution(n) {
  var answer = 0
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // i가 n의 약수인 경우
      answer += 1

      // i와 n/i가 서로 다른 경우에만 두 숫자를 사용한 순서쌍이므로 두 번 count하지 않도록 처리
      //(1, 9)와 (9, 1), 그리고 (3, 3)은 각각 서로 다른 순서쌍이 아니라 동일한 순서쌍입니다.
      //따라서 중복으로 세지 않기 위해서
      if (i !== n / i) {
        answer += 1
      }
    }
  }

  return answer
}
/** 시간 초과 => 입력 값 n이 커질수록 시간 복잡도가 더욱 증가하므로 비효율적 */
// function solution(n) {
//   var answer = 0
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i * j == n) {
//         answer += 1
//       }
//     }
//   }

//   return answer
// }

/**
 * - Math.sqrt(n)
 *  : 주어진 숫자 n의 제곱근을 계산하는 JavaScript의 Math 객체의 메서드입니다.
 *  여기서 "제곱근"은 어떤 숫자를 제곱했을 때 주어진 숫자가 되는 값을 의미합니다.
 *  예를 들어, Math.sqrt(9)는 3을 반환하고, Math.sqrt(25)는 5를 반환합니다.
 */
