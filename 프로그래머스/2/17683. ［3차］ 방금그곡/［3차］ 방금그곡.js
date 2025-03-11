function solution(m, musicinfos) {
  let answer = "(None)";
  let maxPlayTime = 0;

  // 1. m 을 '#'이 있으면 붙여서 자른다(x) -> 치환하는 방법 사용
  const replaceSharp = (str) =>
    str.replace(/([A-G])#/g, (_, note) => note.toLowerCase());
  const targetMelody = replaceSharp(m);

  // 2. 각 음악 정보 처리
  for (const info of musicinfos) {
    const [startTime, endTime, title, music] = info.split(",");

    // const playTime = endTime.replace(':','')*1 - startTime.replace(':','')*1
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);
    const playTime = endHour * 60 + endMin - (startHour * 60 + startMin);

    // music의 길이를 musicTime의 길이에 맞게 조정한다.
    // #이 붙은 음을 치환
    const replacedMelody = replaceSharp(music);

    const playedMelody = Array.from({ length: playTime }).reduce(
      (acc, cur, idx) => {
        return (acc += replacedMelody[idx % replacedMelody.length]);
      },
      ""
    );

    // 5. 늘리던 자르던 한 music을 m과 이제 비교한다.
    if (playedMelody.includes(targetMelody)) {
      if (playTime > maxPlayTime) {
        answer = title;
        maxPlayTime = playTime;
      }
    }
  }

  return answer;
}
