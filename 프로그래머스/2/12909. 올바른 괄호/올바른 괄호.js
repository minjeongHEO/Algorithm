function solution(s) {
  const result = [];
  const arr = s.split("");

  for (const e of arr) {
    if (!result.length && e === ")") return false;
    e === "(" ? result.push(e) : result.pop();
  }

  return result.length === 0;
}


