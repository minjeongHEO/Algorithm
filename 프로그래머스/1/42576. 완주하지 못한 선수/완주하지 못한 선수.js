function solution(participant, completion) {
    // const result = new Map();
    
//     participant.forEach(e=>{
//         if(result.has(e)) result.set(e, result.get(e) + 1)
//         else result.set(e, 1)
//     })

//     completion.forEach(e=>{
//         result.set(e, result.get(e) - 1);
//     })
    const result = {};
    participant.forEach(e=> {
        if(result[e]) result[e] =  result[e] + 1
        else result[e] = 1;
    })
    completion.forEach(e=> {
        if(result[e]) result[e] =  result[e] - 1
    })
    
    return Object.entries(result).filter(e => e[1] > 0)[0][0]
    
//     const result = [...participant];
    
//     completion.forEach((c)=> {
//         const f = result.findIndex(x => x === c);
//         if(f > -1) result.splice(f, 1);
//     });
    
//     return result[0];
}
