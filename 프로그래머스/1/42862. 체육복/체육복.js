function solution(n, lost, reserve) {
    let reserve2 = reserve.filter(e => !lost.includes(e)).sort((a,b)=>a-b);
    const lost2 = lost.filter(e => !reserve.includes(e)).sort((a,b)=>a-b);

    const result = lost2
        .map(e => {
            const idxPlus1 = reserve2.indexOf(e + 1);
            const idxMinus1 = reserve2.indexOf(e - 1);
            
            if (idxMinus1 !== -1) {
                reserve2.splice(idxMinus1, 1);
                return;
            } 
            if (idxPlus1 !== -1) {
                reserve2.splice(idxPlus1, 1);
                return;
            }
            return e;
        })
        .filter(e => e !== undefined);

    return n - result.length;
}


