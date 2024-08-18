function solution(bridge_length, weight, truck_weights) {
    let current_weight = 0;
    let bridge = Array(bridge_length).fill(0);
    let time = 0;

    while (bridge.length > 0) {
        time += 1;
        current_weight -= bridge.shift();

        if (truck_weights.length > 0) {
            if (current_weight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift(); // 다음 트럭
                bridge.push(truck);
                current_weight += truck;
            } else {
                bridge.push(0);
            }
        }
    }

    return time;
}
