function solution(name) {
    // 1. 문자 변경 횟수 계산
    const changeCount = name.split("").reduce((acc, cur) => {
        return (acc += Math.min(cur.charCodeAt() - "A".charCodeAt(), "Z".charCodeAt() - cur.charCodeAt() + 1));
    }, 0);
    
    // 2. 커서 이동 최적화(처음엔 끝까지 가는 방식으로 초기화)
    let minMove = name.length - 1;  

    
    for (let i = 0; i < name.length; i++) {
        let nextIndex = i + 1;
        // 연속된 'A'가 있는 구간을 건너뛰기 위한 처리
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        // i는 현재 위치, nextIndex는 'A'가 아닌 위치로 점프
        // 왼쪽으로 돌아가는 경로와 오른쪽으로 끝까지 가는 경로 중 최소 이동 계산
        minMove = Math.min(minMove, i + name.length - nextIndex + Math.min(i, name.length - nextIndex));
    }
    
    return changeCount + minMove;
}
