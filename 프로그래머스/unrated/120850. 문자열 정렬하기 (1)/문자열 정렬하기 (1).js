function solution(my_string) {
  let newarr = my_string.match(/\d+/g).join("").split("")

  return newarr
    .sort((a, b) => {
      return a - b
    })
    .map(e => Number(e))
}

// 다른 풀이
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map(n => Number(n))
}
