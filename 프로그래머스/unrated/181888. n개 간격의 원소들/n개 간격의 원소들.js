function solution(num_list, n) {
  var answer = []

  answer = num_list.filter((e, idx) => {
    return idx % n === 0
  })
  return answer
}
