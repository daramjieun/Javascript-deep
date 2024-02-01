// 5. 형변환

let numberA = 12;
let numberB = "2";

// 문자열이 숫자로 자동 형변환 되어서 연산된다.
console.log(numberA * numberB); // 24

// 숫자를 문자열로 바꿔서 붙인다.
console.log(numberA + numberB); // 122

//💡이는 자바스크립트의 특징인 "묵시적 형변환" 때문이다.

//💡문자열을 숫자로 형변환 하고 싶다면?
// parseInt() 사용
// 프로그래머가 의도적으로 형태를 변환하는 걸 명시적 형변환이라고 한다. 
console.log(numberA + parseInt(numberB)); // 14