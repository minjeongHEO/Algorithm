function solution(my_string) {
  var answer = []
  my_string
    .trim()
    .split(" ")
    .map(e => (e !== "" ? answer.push(e) : ""))
  return answer
}

// filter함수 사용
function solution(my_string) {
  return my_string.split(" ").filter(v => v)
}
//  v => v는 각 요소 v에 대해 "Truthy" 값을 가지는지 확인합니다.
//  문자열에서 빈 문자열 ""는 "Falsy" 값으로 간주되므로,
//  filter(v => v)는 빈 문자열을 제외한 모든 문자열을 새 배열에 포함시킵니다.
