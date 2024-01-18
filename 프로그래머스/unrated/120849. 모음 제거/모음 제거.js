function solution(my_string) {
  var answer = ""
  let vowels = ["a", "e", "i", "o", "u"]
  let arr = my_string.split("")

  // 모음을 제거한 새로운 배열 생성
  let resultArray = arr.filter(function (e) {
    return vowels.indexOf(e) === -1
  })

  // 배열을 문자열로 변환하여 반환
  return resultArray.join("")
}

// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }
