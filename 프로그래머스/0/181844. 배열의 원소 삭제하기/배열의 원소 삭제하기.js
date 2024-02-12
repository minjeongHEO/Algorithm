function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter(e=>{
        if(!delete_list.includes(e)) return e
    });
    return answer;
}

//const solution = (arr, dels) => arr.filter((el) => !dels.includes(el))