function solution(my_string) {
  const answer = Array.from({ length: my_string.length }, (_, idx) => {
    return idx + 1
  })
    .map(e => {
      return my_string.slice(my_string.length - e)
    })
    .sort()

  return answer
}

// 다른 풀이
function solution(my_string) {
  return Array.from({ length: my_string.length }, (_, i) => my_string.substring(i)).sort()
}
