function solution(progresses, speeds) {
    const times = progresses.map((e,idx)=> Math.ceil((100 - e) /speeds[idx]));
    const answer = [];
    let standard = times[0]
    let sum = 1;
    
    for (let i = 1; i < speeds.length; i++) {
        if(standard >= times[i]){
            sum += 1;
        }else{
            answer.push(sum)
            standard = times[i]
            sum = 1;
        }
    }
    answer.push(sum)

    console.log(answer)
    
    return answer;
}