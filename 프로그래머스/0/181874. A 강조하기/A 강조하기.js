function solution(myString) {
  let change = myString.split("").map(e => {
    if (e === "a" || e === "A") return e.toUpperCase()
    else return e.toLowerCase()
  })

  return change.join("")
}
