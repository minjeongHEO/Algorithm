function sum(arr){
    return arr.reduce((acc, current) => acc + current, 0);
}
function product(arr) {
  return arr.reduce((acc, current) => acc * current, 1);
}

function solution(num_list) {
    var answer = 0;
    return num_list.length >= 11 ? sum(num_list) : product(num_list)
    
}