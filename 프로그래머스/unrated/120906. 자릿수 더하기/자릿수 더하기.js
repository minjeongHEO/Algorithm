function solution(n) {
  let arr = String(n).split("")
  let sum = arr.reduce((acc, e) => acc + parseInt(e), 0)
  return sum
}

// - String(n) VS n.toSting()
// String() 함수는 어떠한 값을 강제로 문자열로 변환합니다.
// 매개변수로 전달된 값을 문자열로 변환하며,
// 값이 이미 문자열인 경우에도 변환을 수행합니다.
// String() 함수는 다양한 데이터 유형을 안전하게 문자열로 변환합니다.
// --------------------------------------
// toString()은 대부분의 JavaScript 객체에 내장된 메소드입니다.
// toString() 메소드를 호출할 때,
//   객체가 어떤 데이터 형식을 가지고 있는지에 따라서 적절한 문자열로 변환됩니다.

// - parseInt(e) VS Number(e)
// let num2 = parseInt("123abc");   // 123
// let num3 = parseInt("abc123");   // NaN
// let num4 = parseInt("1010", 2);  // 2진수 문자열을 10진수로 변환: 10
// --------------------------------------
// let num2 = Number("123abc");   // NaN
// let num3 = Number("abc123");   // NaN
// let num4 = Number("42.5");     // 42.5
// let num5 = Number(true);       // 1
// let num6 = Number(false);      // 0
