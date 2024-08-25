function solution(participant, completion) {
    const list = new Map();

    participant.forEach(e => {
        if (!list.get(e)) list.set(e, 1);
        else list.set(e, list.get(e) + 1);
    });

    completion.forEach(e => {
        list.set(e, list.get(e) - 1);
    });

    for (const [key, value] of list.entries()) {
        if (value > 0) return key;
    }

    // return participant.filter(e=> !completion.includes(e))[0]
}
