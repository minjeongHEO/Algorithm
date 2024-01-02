function solution(my_string) {
  var answer = ""
  const end = my_string.length - 1

  for (let i = end; i >= 0; i--) {
    answer += my_string[i]
  }
  return answer
}
