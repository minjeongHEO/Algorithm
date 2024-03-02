function solution(arr, intervals) {
  var answer = []

  answer = intervals.map(e => arr.slice(e[0], e[1] + 1))
  return answer.flat()
}

/* 
String.prototype.split()
  : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
Array.prototype.slice() 
  : 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
Array.prototype.splice()
  : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
*/
