function solution(box, n) {
  var answer = 1
  box.forEach(e => {
    answer *= Math.floor(e / n)
  })

  return answer
}

// 다른 풀이
function solution(box, n) {
  let [width, length, height] = box

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
}
