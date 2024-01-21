function solution(slice, n) {
    var answer = 0;
    
    answer = Math.floor(n/slice);
    
    if(n%slice != 0){
        answer += 1
    }
    return answer;
}