function solution(my_string, alp) {
    var answer = '';
    [...my_string].map(e=>{
        if(e == alp) {
            answer += e.toUpperCase();
        }else {
            answer += e;
        }
    })
    return answer;
}