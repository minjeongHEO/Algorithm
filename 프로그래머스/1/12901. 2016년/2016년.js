function solution(a, b) {
    const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayOfWeek = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    
    const monthSum = Array.from({length:a}).reduce((acc, cur, idx) => {
        return acc += months[idx]
    },0)
    
    return dayOfWeek[(monthSum + b) % 7]
}