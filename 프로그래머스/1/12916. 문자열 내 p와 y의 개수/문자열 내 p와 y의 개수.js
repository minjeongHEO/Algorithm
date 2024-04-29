function solution(s) {
    let yCount = 0;
    let pCount = 0;

    [...s.toLowerCase()].forEach(e => {
        if (e === "y") yCount++;
        if (e === "p") pCount++;
    });

    return yCount === pCount ? true : false;
}
