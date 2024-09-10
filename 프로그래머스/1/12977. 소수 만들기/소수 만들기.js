const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const pickNums = nums => {
    let pickNums = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                pickNums.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return pickNums;
};

function solution(nums) {
    let count = 0;

    //3가지 수 뽑기
    pickNums(nums).forEach(n => {
        const pickSum = n[0] + n[1] + n[2];
        // 3가지 더한게 소수인지 확인
        if (isPrime(pickSum)) count += 1;
    });

    return count;
}

