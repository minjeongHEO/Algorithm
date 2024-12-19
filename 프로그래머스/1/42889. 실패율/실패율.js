const Sum = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

function solution(N, stages) {
  const stageArr = stages.reduce((acc, cur, idx) => {
    if (cur > N) {
      console.log(2);
      return acc;
    } else {
      acc[cur] += 1;
      return acc; // acc 배열 전체 반환
    }
  }, Array.from({ length: N + 1 }).fill(0));

  // const failArr = stageArr.map((e, idx) => {
  //   if (!e) return 0;

  //   // 현재 값 / 현재 인덱스부터 마지막 인덱스까지의 값 전부의 합
  //   return e / Sum(stageArr.slice(idx));
  // });

  let totalPlayers = stages.length;
  const failArr = stageArr.map((e, idx) => {
    if (idx === 0 || totalPlayers === 0) return 0; // 0번 인덱스 제외, 남은 플레이어 없으면 실패율 0
    const failRate = e / totalPlayers; // 실패율 계산
    totalPlayers -= e; // 다음 스테이지로 넘어갈 때 남은 플레이어 감소
    return failRate;
  });

  const failArrWithIndex = failArr.map((fail, idx) => ({
    stage: idx,
    failRate: fail,
  }));

  failArrWithIndex.sort((a, b) => {
    if (b.failRate === a.failRate) return a.stage - b.stage;
    return b.failRate - a.failRate;
  });

  const result = failArrWithIndex
    .filter((item) => item.stage > 0) // 0번 스테이지 제외
    .map((item) => item.stage);

  return result;
}