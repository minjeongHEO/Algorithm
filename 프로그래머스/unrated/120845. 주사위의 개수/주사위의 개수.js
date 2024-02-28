function solution(box, n) {
  return box.reduce((acc, cur) => {
    return acc * Math.floor(cur / n)
  }, 1)
}

// 다른 풀이
function solution(box, n) {
  let [width, length, height] = box

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
}
