// 템플릿 리터럴

// 템플릿 리터럴은 문자열 안에서 변수를 전개하기 위한 새로운 표기법
// 문자열 안에서 값을 다룰 때는 템플릿 리터럴 이용하는 것이 좋다.
// `` 벡틱으로 문자열 감싼다.
// ${ }으로 변수 전개

//1. 템플릿 리터럴 이용
// 이름을 저장한 변수
const name = "이지은"

// 나이를 저장한 변수
const age = 29;

const message = `안녕하세요! 저는 ${name}입니다. 나이는 ${age}살 입니다!`;
console.log(message);

// 2. 함수 호출과 계산 실행

// '안녕하세요'를 반환하는 함수
function sayHello() {
    return "안녕하세요!";
}

// 월을 나타내는 숫자를 저장한 변수
const month = 1;

// 템플릿 리터럴 안에서의 함수 호출 및 곱셈 실행
const message2 = `${sayHello()} 오늘부터 ${month * 3}`;
console.log(message2);

