function solution(n_str) {
  var answer = ""
  let str_arr = [...n_str]

  for (let i = 0; i < str_arr.length; i++) {
    if (str_arr[i] != "0") {
      answer += str_arr.slice(i).join("")
      break
    }
  }

  return answer
}
