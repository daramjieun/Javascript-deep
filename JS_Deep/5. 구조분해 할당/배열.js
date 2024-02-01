// 📌 배열의 구조 분해 할당(비 구조화 할당)
let arr = ["1", "2", "3"];

let one = arr[0];
let two = arr[1];
let three = arr[2];

// 배열의 인덱스를 지정해서 대입
const result = `1은 ${arr[0]}, 2는 ${arr[1]}, 3은 ${arr[2]}입니다!`

console.log(one, two, three);   // 1 2 3
console.log(result);    // 1은 1, 2는 2, 3은 3입니다!

// 변수 3개에 각각의 인덱스를 할당하려니까 
// arr을 계속 사용해야 하는 반복 코드가 존재한다.
// 이는 구조 분해 할당(비 구조화 할당)을 이용하여 한 줄로 줄일 수 있다.

// 💡 배열에 분할 대입을 할 때는 변수 선언부에 []를 사용하여
// 배열에 저장된 순서에 임의의 변수명을 설정해 추출
// 💡 객체와 달리 순서 변경 ❌
// 💡 직접 임의로 설정한 변수명을 이용
// 💡 인덱스 중간까지만 필요한 경우 등에는 이후 요소 생략 가능

// 구조 분해 할당_1
// = 배열의 기본 변수 비 구조화 할당
let arr2 = ["1", "2", "3"];

let [one2, two2, three2] = arr2;

console.log(one2, two2, three2);    // 1 2 3

// 구조 분해 할당_2 (더 단순화✨)
// = 배열의 선언 분리 비 구조화 할당
let [one3, two3, three3] = ["1", "2", "3"];
console.log(one3, two3, three3);    // 1 2 3

// 구조 분해 할당_3
// 변수 > 배열 길이 👉🏻 할당되지 않은 변수는 undefined
let [one4, two4, three4, four4] = ["1", "2", "3"];
console.log(one4, two4, three4, four4); // 1 2 3 undefined

// 💡 해결법 : 기본값 설정(=)
let [one5, two5, three5, four5 = '4'] = ["1", "2", "3"];
console.log(one5, two5, three5, four5); // 1 2 3 4

// swap : 2개 변수의 값을 서로 바꾸는 것
let a = "대한";
let b = "민국";

let tmp = a;
a = b;
b = tmp;
console.log(a, b);  // 민국 대한

// 구조 분해 할당_4 (swap 단순화✨)
let a2 = 10;
let b2 = 20;

[a2, b2] = [b2, a2];
console.log(a2, b2);    // 20 10