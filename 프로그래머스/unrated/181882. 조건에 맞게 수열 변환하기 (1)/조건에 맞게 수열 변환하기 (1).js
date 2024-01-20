function solution(arr) {
  var answer = []
  answer = arr.map(e => {
    if (e >= 50 && e % 2 == 0) {
      return e / 2
    } else if (e < 50 && e % 2 != 0) {
      return e * 2
    } else {
      return e
    }
  })
  return answer
}
/**
 * filter 함수는 배열의 요소를 걸러내는 데 사용되지만, 요소를 변형하는 데에는 적합하지 않습니다.
 *  filter 함수의 콜백 함수는 참/거짓을 반환하며, 참인 경우에만 해당 요소를 유지합니다.
 *  따라서 filter 함수를 사용하여 값을 변경하는 것은 어렵습니다.
 *
 * map 함수를 사용하여 배열의 각 요소에 대해 주어진 조건에 따라 값을 변경합니다.
 *  이렇게 하면 새로운 배열이 반환되며, 기존 배열은 변경되지 않습니다.
 */
