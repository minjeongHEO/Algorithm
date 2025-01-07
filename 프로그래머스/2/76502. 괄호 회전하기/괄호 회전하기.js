function solution(s) {
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];

  const arr = s.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    //회전 시키기
    const result = [];
    const b = arr.shift();
    arr.push(b);

    if (arr.every(e => close.includes(e))) return count;

    //회전한 괄호 확인하기
    for (let j = 0; j < arr.length; j++) {
      const p = arr[j];

      if (open.includes(p)) {
        result.push(p);
      }

      if (close.includes(p) && result[result.length - 1] === open[close.indexOf(p)]) {
        result.pop();
      }
    }

    if (!result.length) count += 1;
  }

  return count;
}