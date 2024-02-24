function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) return 0
    }
  }
  return 1
}

// 다른 풀이
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0
}
