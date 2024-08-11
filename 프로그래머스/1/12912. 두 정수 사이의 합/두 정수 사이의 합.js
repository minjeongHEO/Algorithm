function solution(a, b) {
    let answer = 0
    if(a === b) return a;
    
    const max = Math.max(a,b);
    const min = Math.min(a,b);
      
    return Array.from({length: max - min + 1}).map((_, idx)=> min + idx).reduce((acc,cur)=> acc += cur, 0)
    

    

}