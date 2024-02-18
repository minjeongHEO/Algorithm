function solution(arr, idx) {

  for (let [i, e] of arr.entries()) {
    if (i >= idx && e === 1) return i
  }
  return -1
}
