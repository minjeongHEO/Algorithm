function solution(n) {
    let a = 1;

    while (true) {
        if ((6 * a) % n == 0) {
            return a;
        } else {
            a += 1;
        }
    }
}

// 다른 풀이
function solution(n) {
    let pizza = 1;
    while ((pizza * 6) % n) {
        pizza++;
    }
    return pizza;
}
