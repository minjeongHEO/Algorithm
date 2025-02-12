function solution(array, commands) {
    return commands.map((e)=>{
        const k = e[2]-1;
        return array.slice(e[0]-1, e[1]).sort((a,b)=> a-b)[k];

    })
}
