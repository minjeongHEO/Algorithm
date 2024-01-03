function solution(str_list) {
  // let result = []
  // for (const [idx, char] of str_list.entries()) {
  //   if (char === "l") {
  //     result = str_list.slice(0, idx)
  //     break
  //   } else if (char === "r") {
  //     result = str_list.slice(idx + 1)
  //     break
  //   }
  // }
  // return result
    
  const locL = str_list.indexOf("l")
  const locR = str_list.indexOf("r")

  if ((locL < locR || locR === -1) && locL !== -1) {
    return str_list.slice(0, locL)
  } else if ((locL > locR || locL === -1) && locR !== -1) {
    return str_list.slice(locR+1)
  }
  return [] // "l"이나 "r"이 없는 경우
}
