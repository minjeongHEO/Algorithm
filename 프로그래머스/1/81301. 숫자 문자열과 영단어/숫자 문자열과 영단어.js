const mapping = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

function solution(s) {
    var answer = [];

    s.split("").reduce((acc, cur) => {
        if (isNaN(Number(cur))) {
            acc += cur;
            // mapping[acc] && answer.push(mapping[acc]); 이 라인에서, JavaScript의 truthy/falsy 특성으로 인해 zero에 해당하는 0이 push되지 않는 문제가 발생했습니다.
            if (acc in mapping) {
                answer.push(mapping[acc]);
                return "";
            }
            return acc;
        }
        answer.push(cur);
        return "";
    }, "");

    return Number(answer.join(""));
}

//solution("one4seveneight");

// 다른 풀이 1
function solution(s) {
    let charSet = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for (let [key, value] of Object.entries(charSet)) {
        let re = new RegExp(`${key}`, "g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}

// 다른 풀이 2
function solution(s) {
    const digit2word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return Number(digit2word.reduce((ans, word, idx) => ans.replace(new RegExp(word, "g"), idx), s));
}

// 다른 풀이 3
function solution(s) {
    let digit2word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = digit2word.reduce((ans, word, idx) => ans.replace(new RegExp(word, "gi"), idx), s);
    return +answer;
}

/**
 * * parseInt, Number, + 의 차이
 * parseInt는 부분적인 숫자 변환이 가능 (문자열의 시작부터 숫자로 해석할 수 있는 부분까지만 변환)
 * Number와 +는 전체 문자열이 유효한 숫자 형식이어야 합니다.
 *
 * parseInt는 기본적으로 정수만 반환
 * Number와 +는 소수점 이하도 처리
 *
 * 빈 문자열에 대해 parseInt는 NaN반환
 * Number와 +는 0을 반환합니다.
 *
 * null에 대해 parseInt는 NaN을 반환
 * null에 대해 Number와 +는 0을 반환
 *
 * undefined에 대해서는 모두 NaN을 반환
 */

// * "g"와 "gi" 플래그의 차이점 : 대소문자 구분 여부
let str = "One one TWO two THREE three";

// "g" 플래그 사용
console.log(str.match(/one/g)); // 결과: ['one']

// "gi" 플래그 사용
console.log(str.match(/one/gi)); // 결과: ['One', 'one']

// "two"에 대해서도 같은 테스트
console.log(str.match(/two/g)); // 결과: ['two']
console.log(str.match(/two/gi)); // 결과: ['TWO', 'two']

/**
 * * JavaScript에서 falsy 값
 * (0, '', null, undefined, NaN, false)을 다룰 때는 항상 주의가 필요합니다.
 * 이런 경우, 명시적인 비교나 in 연산자를 사용하는 것이 더 안전한 방법입니다.
 */

/**
 * * JavaScript 연산자 ||, &&, ??, 그리고 ?.

### `||` (OR 연산자)
`||`는 **논리적 OR** 연산자입니다. 두 개의 피연산자 중에서 **첫 번째로 true로 평가되는 값**을 반환합니다. 만약 두 값이 모두 false로 평가되면 마지막 값을 반환합니다.

```js
const result = value1 || value2;
```
- `value1`이 truthy라면 `result`는 `value1`을 반환합니다.
- 그렇지 않다면 `value2`를 반환합니다.

### `&&` (AND 연산자)
`&&`는 **논리적 AND** 연산자입니다. **첫 번째로 false로 평가되는 값**을 반환합니다. 만약 모든 값이 true로 평가되면 마지막 값을 반환합니다.

```js
const result = value1 && value2;
```
- `value1`이 falsy라면 `result`는 `value1`을 반환합니다.
- 그렇지 않다면 `value2`를 반환합니다.

### `??` (Null 병합 연산자)
`??`는 **null 병합 연산자**입니다. **첫 번째로 null 또는 undefined가 아닌 값**을 반환합니다. 이 연산자는 `||`와 유사하지만, `false`, `0`, `''` 같은 falsy 값은 무시하지 않습니다.

```js
const result = value1 ?? value2;
```
- `value1`이 `null` 또는 `undefined`라면 `result`는 `value2`를 반환합니다.
- 그렇지 않으면 `value1`을 반환합니다.

### `?.` (Optional chaining)
`?.`는 **옵셔널 체이닝** 연산자입니다. 객체의 특정 속성이나 메소드가 존재하지 않을 때 에러를 발생시키지 않고 `undefined`를 반환합니다.

```js
const result = obj?.property;
```
- `obj`가 `null` 또는 `undefined`일 경우, `undefined`를 반환합니다.
- 그렇지 않으면 `obj.property` 값을 반환합니다.

### 코드 예시 설명
```js
mapping[acc] ?? answer.push(acc);
```
이 코드에서는 `mapping[acc]`가 `null` 또는 `undefined`일 경우에만 `answer.push(acc)`가 실행됩니다. 

`??` 연산자의 특성 때문에 `mapping[acc]`가 `false`, `0`, `''` 같은 falsy 값이더라도 여전히 `mapping[acc]`의 값을 반환하므로 `answer.push(acc)`는 실행되지 않습니다.

따라서, 이 경우 `mapping[acc]`가 `null` 또는 `undefined`일 때만 `answer.push(acc)`가 실행된다고 이해하시면 됩니다.

정리하면, 이 코드에서는 `mapping[acc]`가 정의되어 있지 않은 경우에만 `answer.push(acc)`가 실행됩니다.
 */
