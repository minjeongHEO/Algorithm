function solution(arr, queries) {
    let answer = [];

    queries.map((qu) => {
        let minArr = arr.slice(qu[0], qu[1] + 1); // Slice the subarray from arr
        let filterArr = minArr.filter(value => value > qu[2]);
        let minVal = (filterArr.length > 0) ? Math.min(...filterArr) : -1;
        answer.push(minVal);
    });

    return answer;
}