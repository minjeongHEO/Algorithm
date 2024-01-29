function solution(strArr) {
  var answer = strArr.map((e, i) => {
    if ((i + 1) % 2 == 0) {
      return e.toUpperCase()
    } else {
      return e.toLowerCase()
    }
  })

  return answer
}

// 삼항연산자로 한번에
// function solution(strArr) {
//   return strArr.map((v, i) => (i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()))
// }
