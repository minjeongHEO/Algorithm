function solution(rsp) {
  // 가위는 2
  // 바위는 0
  // 보는 5
  let answer = ""
  const solution = new Map()
  solution.set({ 2: "0" })
  solution.set({ 0: "5" })
  solution.set({ 5: "2" })
  rsp.split("").forEach(e => {
    answer += solution.get(e)
  })

  return answer
}

// // Map말고 Obj로 사용하기
// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2
//   }
//   var answer = [...rsp].map(v => arr[v]).join("")
//   return answer
// }
