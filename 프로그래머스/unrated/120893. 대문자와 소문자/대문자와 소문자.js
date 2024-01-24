function solution(my_string) {
  let arr = my_string.split("")
  let newArr = arr.map((e, i) => {
    console.log(arr[i].charCodeAt())
    if (arr[i].charCodeAt() <= 90) {
      return e.toLowerCase()
    } else {
      return e.toUpperCase()
    }
  })

  return newArr.join("")
}
//A(65)부터 Z(90)까지이며, 소문자의 아스키코드 범위는 a(97)부터 z(122)까지

// function solution(my_string) {
//   var answer = ""
//   for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
//   return answer
// }
