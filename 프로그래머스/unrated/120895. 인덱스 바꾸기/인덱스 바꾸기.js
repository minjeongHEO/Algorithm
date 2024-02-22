// 맞는데 실행오류남.......
function solution(my_string, num1, num2) {
  var answer = ""
  const newarr = (my_string.split("")[(newarr[num1], newarr[num2])] = [newarr[num2], newarr[num1]])
  answer = newarr.join("")
  return newarr
}

// 그래서 다른 풀이
function solution(my_string, num1, num2) {
  const arr = my_string.split("")

  let str1 = arr[num1]
  let str2 = arr[num2]

  arr.splice(num1, 1, str2)
  arr.splice(num2, 1, str1)

  return arr.join("")
}
