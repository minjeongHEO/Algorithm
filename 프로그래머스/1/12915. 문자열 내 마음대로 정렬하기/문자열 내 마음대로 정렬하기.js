function solution(strings, n) {
    let answer = [];
    let newMap = new Map();

    strings.forEach(e => {
        if (newMap.has(e[n])) {
            newMap.set(e[n], [...newMap.get(e[n]), e]);
        } else {
            newMap.set(e[n], [e]);
        }
    });

    let sortedAsc = new Map([...newMap].sort());

    for (const [k, v] of sortedAsc.entries()) {
        if (v.length <= 1) continue;

        const newValues = v.sort();
        sortedAsc.set(k, newValues);
    }

    for (const [k, v] of sortedAsc.entries()) {
        if (v.length <= 1) continue;

        const newValues = v.sort();
        sortedAsc.set(k, newValues);
    }

    for (const v of sortedAsc.values()) {
        answer = [...answer, ...v];
    }

    return answer;
}