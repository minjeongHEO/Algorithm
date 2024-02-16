function solution(myString) {
  var answer = []
  myString.split("x").forEach(e => {
    answer.push(e.length)
  })
  return answer
}

//다른 풀이
function solution(myString) {
  return myString.split("x").map(v => v.length)
}
