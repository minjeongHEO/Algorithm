const B = ["U", "D", "R", "L"];
const A = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 새로운 위치 저장
const pathSet = new Set();

// 카운트 => acc
let 현재위치 = [0, 0];

function solution(dirs) {
  return dirs.split("").reduce((acc, cur, idx) => {
    if (현재위치[0] === 5 && cur === "U") return acc;
    if (현재위치[0] === -5 && cur === "D") return acc;
    if (현재위치[1] === 5 && cur === "R") return acc;
    if (현재위치[1] === -5 && cur === "L") return acc;

    const 이동 = A[B.indexOf(cur)];
    const 다음위치 = [현재위치[0] + 이동[0], 현재위치[1] + 이동[1]];

    const 길 = JSON.stringify(
      [
        [현재위치[0], 현재위치[1]],
        [다음위치[0], 다음위치[1]],
      ].sort()
    );

    if (!pathSet.has(길)) {
      pathSet.add(길);
      acc++;
    }

    현재위치 = 다음위치;
    return acc;
  }, 0);
}

// console.log(solution("ULURRDLLU"));
