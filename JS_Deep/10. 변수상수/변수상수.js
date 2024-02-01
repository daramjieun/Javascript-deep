// var 문제점
// let과 const(+ES2015)

// ⚠️ var 문제점
// 1. 변수를 덮어 쓰기
// 2. 재선언 가능

var val1 = "var 변수";
console.log(val1);  // var 변수

// 1. 변수 덮어 쓰기
// 한 번 정의한 변수에 다른 값 대입
val1 = "var 변수 덮어 쓰기";
console.log(val1);  // var 변수 덮어 쓰기

// 2. 재선언 가능
// 완전히 같은 변수명을 여러 위치에서 변수로 정의(가독성🔻)
var val1 = "var 변수 재선언";
console.log(val1);  // var 변수 재선언

// 🗝️ let
// 값을 바꾸고 싶을 때 사용
// 프로그램 실행 도중 값이 계속 바뀔 수 있는 이름 붙은 저장소
// 1. 재선언 불가능 ❌
// 2. 재할당 가능 ⭕

let age = "let 변수";
console.log(age);

// 1. 재선언 불가능
// let age = "let 변수2"; ERROR

// 2. 재할당 가능 
age = "let 변수 재할당 가능";
console.log(age);

// 🔐 const (상수)
// 상수는 읽기 전용
// 선언과 초기화 동시에
// 선언 이후로 값을 바꿀 수 없다.
// 1. 재선언 ❌
// 2. 재할당 ❌

const a = "const 상수";
console.log(a);

// 💡 primitive type 종류의 데이터는 const를 이용해 정의한 경우 값을 바꿀 수 없지만
// object type의 데이터들은 const로 정의해도 도중에 값을 변경할 수 있다.
// const로 정의해도 객체 내용은 자유롭게 변경할 수 있다.

// 객체 속성값 변경 및 추가
const obj1 = {
    name: "이지은",
    age: 29,
    blood: "O",
};
console.log(obj1);

// 변경
obj1.age = 28;
console.log(obj1);
// 추가
obj1.MBTI = "INFJ";
console.log(obj1);

// 배열 속성값 변경 및 추가
const arr1 = ["sky", "water", "tree"];
console.log(arr1);

// 변경
arr1[0] = "wind";
console.log(arr1);

// 추가
arr1.push("sky");
console.log(arr1);