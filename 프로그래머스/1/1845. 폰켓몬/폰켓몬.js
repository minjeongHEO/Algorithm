function solution(nums) {
    const p = new Map();
    const s = new Set();
    nums.forEach(e => {
        if (!p.get(e)) p.set(e, 1);
        else p.set(e, p.get(e) + 1);
    });

    let count = nums.length / 2;
    while (count > 0) {
        for (const key of p.keys()) {
            if (count > 0) {
                count -= 1;
                s.add(key);
                p.set(key, p.get(key) - 1);
            }
        }

        for (const [key, values] of p.entries()) {
            if (!values) p.delete(key);
        }
    }

    return s.size;
}
