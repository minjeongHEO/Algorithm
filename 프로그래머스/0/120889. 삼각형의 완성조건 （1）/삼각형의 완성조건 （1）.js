function solution(sides) {
    let maxVal = Math.max(...sides);
    sides.splice(sides.indexOf(maxVal),1);
    
    let sum = sides.reduce((acc, cur) => acc + cur, 0);

    return maxVal < sum ? 1 : 2;
}