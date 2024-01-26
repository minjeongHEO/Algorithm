function solution(arr) {
  var stk = []
  let i = 0

  while (i < arr.length) {
    stkLen = stk.length
    if (stkLen == 0) {
      stk.push(arr[i])
      i += 1
    } else if (stk[stkLen - 1] < arr[i]) {
      stk.push(arr[i])
      i += 1
    } else if (stk[stkLen - 1] >= arr[i]) {
      stk.pop()
    }
  }

  return stk
}
