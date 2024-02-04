function solution(arr, k) {
  var answer = []

  if (k % 2 == 0) {
    answer = arr.map(e => {
      return e + k
    })
  } else {
    answer = arr.map(e => {
      return e * k
    })
  }
  return answer
}

// const solution = (arr, k) => arr.map(v => (k % 2 ? v * k : v + k))
