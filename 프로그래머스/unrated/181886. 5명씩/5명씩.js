function solution(names) {
  var answer = []
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i])
  }

  return answer
}

// 5씩 늘려줄 수 있다.

////잘못된 로직
// function solution(names) {
//   var answer = []
//   for (let i = 0; i < Math.floor(names.length / 5); i++) {
//     answer.push(names[i * 5])
//   }

//   let next = Math.floor(names.length / 5)
//   if (next % 5 !== 0 && next !== 6) answer.push(names[next * 5])
//   console.log(names[next * 5])
//   return answer
// }
