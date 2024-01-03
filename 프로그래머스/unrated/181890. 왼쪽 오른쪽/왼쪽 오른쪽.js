function solution(str_list) {
  let result = []
  for (const [idx, char] of str_list.entries()) {
    if (char === "l") {
      result = str_list.slice(0, idx)
      break
    } else if (char === "r") {
      result = str_list.slice(idx + 1)
      break
    }
  }
  return result
}
