function solution(my_string) {
  const numbers = my_string.match(/\d+/g) || []
  // - \d+ 는 하나 이상의 숫자
  // - || 연산자: 두 값 중 하나가 "truthy"일 때, "truthy" 값을 반환합니다.
  // null은 "falsy" 값이므로, || 연산자는 두 번째 피연산자인 "default value"를 반환합니다.

  // 찾은 숫자들의 합 계산
  const sum = numbers.reduce((acc, cur) => acc + Number(cur), 0)

  return sum
}