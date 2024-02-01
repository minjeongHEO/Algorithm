function solution(hp) {
  let antCount = 0
  let antPower = [5, 3, 1]

  for (let i = 0; i < antPower.length; i++) {
    if (hp == 0) break
    antCount += Math.floor(hp / antPower[i])
    hp -= Math.floor(hp / antPower[i]) * antPower[i]
  }

  return antCount
}