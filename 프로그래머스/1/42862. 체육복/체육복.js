function solution(n, lost, reserve) {
    let reserveSet = new Set(reserve.filter(r => !lost.includes(r)));
    let lostSet = Array.from(new Set(lost.filter(l => !reserve.includes(l)))).sort((a, b) => a - b);

    lostSet.forEach(l => {
        if (reserveSet.has(l - 1)) {
            reserveSet.delete(l - 1);
        } else if (reserveSet.has(l + 1)) {
            reserveSet.delete(l + 1);
        } else {
            n--;
        }
    });

    return n;
}
