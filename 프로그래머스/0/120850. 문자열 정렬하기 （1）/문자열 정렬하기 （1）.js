function solution(my_string) {
    return my_string.match(/[0-9]/gi).sort((a,b)=>a-b).map(e=> e*1)
}
