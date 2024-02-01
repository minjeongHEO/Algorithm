function solution(hp) {
  let antCount = 0
  let antPower = [5, 3, 1]

  for (let i = 0; i < antPower.length; i++) {
    if (hp == 0) break
    console.log("antPower[i]: ", antPower[i])

    antCount += Math.floor(hp / antPower[i])

    hp -= Math.floor(hp / antPower[i]) * antPower[i]
  }

  return antCount
}

// 나머지 활용하는 법
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3)
}
