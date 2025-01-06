let zeroCount = 0;
let count = 0;

function getBinary(n, binarys) {

  if (n === 1) {
    binarys.push(1);
    return binarys.reverse().join("");
  }
    
  const remainder = n % 2;
  const share = Math.floor(n / 2);
  binarys.push(remainder);

  return getBinary(share, binarys);
}

function solution(s) {
  if (s === "1") return [count, zeroCount];
  count += 1;

  const newS = s.split("").reduce((acc, cur) => {
    if (cur === "0") {
      zeroCount += 1;
      return acc;
    }
    return acc + cur;
  }, "");

  const binary = getBinary(newS.length, []);
  return solution(binary);
}
