function solution(s) {
  var answer = 0
  let before = 0
  answer = s.split(" ").reduce((acc, cur) => {
    if (cur !== "Z") {
      before = Number(cur)
      return acc + Number(cur)
    } else {
      //before = 0
      return acc - before
    }
  }, 0)
  return answer
}