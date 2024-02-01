// 삼항 연산자
// 삼항연산자에서 참일 때 식과 거짓일 때 식
// 1) console.log와 같이 함수를 호출하는 것을 사용하면 호출을 한다.
// 2) 값을 명시하게 되면 대입 연산자를 이용해서 변수에 저장하여 결과를 값으로 받아볼 수 있다.

// // 1) if문 -> 삼항연산자 ✨
// if문을 사용하면 코드가 너무 길다. 
// 삼항연산자를 이용하면 간단하게 한 줄로 작성 가능하다.

let a = 3;

// if (a >= 0) {
//     console.log("양수");    // 양수
// } else {
//     console.log("음수");
// }


// 삼항연산자 사용✨
// 조건식 ? true일 때 실행할 식 : false일 때 실행할 식
a >= 0 ? console.log("양수") : console.log("음수"); // 양수

// 2)
// let b = [];
let b = [123];

// if (a.length === 0) {
//     console.log("빈 배열");
// } else {
//     console.log("안 빈 배열");  // 안 빈 배열
// }

b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열") // 안 빈 배열

// 3) 값을 참일 때와 거짓일 때를 구분해서 반환
let c = ["겨울"];

// c.length === 0 ? "빈 배열" : "안 빈 배열"
// 삼항연산자의 "연산 결과를 변수나 상수에 저장해서 사용"해야 한다.

const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열"
console.log(arrayStatus);   // 안 빈 배열
console.log(typeof (arrayStatus));   // srting

