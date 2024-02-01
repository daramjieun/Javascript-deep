// 📌 객체의 구조 분해 할당(비 구조화 할당) ⭐

let object = { one: "one", two: 'two', three: 'three' };

let oneObj = object.one;
let twoObj = object.two;
let threeObj = object.three;

console.log(oneObj, twoObj, threeObj);  // one two three

// 분할 대입은 객체나 배열로부터 값을 추출하기 위한 방법
// 객체 속성 수가 많아지거나 객체 변수명이 더 길어지면 매번 입력하기 번거롭다.
// 이런 경우 분할 대입을 이용한다.

// { }를 변수 선언부에 이용하면 객체 안에서 일치하는 속성을 추출할 수 있다.
// 존재하지 않는 속성명은 지정할 수 없다.
// = 일부만 추출 가능
// = 순서 상관 없음
// = 콜론(:)으로 다른 변수명 사용 가능

// 구조 분해 할당_1
// = 프로퍼티로 접근해서 사용
// = 키값을 기준으로 비 구조화 할당
let object1 = { first: "1", second: '2', third: '3' };

let { first, second, third } = object1

const result = `first는 ${first}, seconsd는 ${second}, third는 ${third}입니다.`;
console.log(first, second, third);  // 1 2 3
console.log(result);    // first는 1, seconsd는 2, third는 3입니다.

// 구조 분해 할당_2
// = 받아올 때 순서 상관 없다. (키값 기준이라서)
let object2 = { first2: "1", second2: '2', third2: '3', name2: '이지은' };
let { name2, third2, first2, second2 } = object2
console.log(first2, second2, third2, name2);    // 1 2 3 이지은

// 구조 분해 할당_3
// 변수 이름 원하는 대로 변경 가능 (: 콜론 사용)
// 전달 받은 배열의 프로퍼티가 없다면 기본값(=) 설정 가능
let object3 = { first3: "1", second3: '2', third3: '3', name3: '이지은' };
let { name3: myName, third3: thirdObj, first3, second3, age = 28 } = object3;
console.log(first3, second3, thirdObj, myName, age);