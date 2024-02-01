// 스프레드 구문
const arr1 = [1, 2];

console.log(arr1);  // (2) [1, 2]
console.log(...arr1);   // 1 2 

// 📒 1. 요소 모으기
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

console.log(arr3);  // (3) [3, 4, 5]

// 📒 2. 요소 복사와 결합
const arr4 = [10, 20];
const arr5 = [30, 40];

// 1) 스프레드 구문을 이용해 새로운 배열 생성
const arr6 = [...arr4];

console.log(arr4);  // (2) [10, 20]
console.log(arr6);  // (2) [10, 20]

// 2) 두 개의 배열 결합
const arr7 = [...arr4, ...arr5];

console.log(arr7);  // (4) [10, 20, 30, 40]

// 📒 3. 여러 객체 결합
const obj1 = { one1: 1, two1: 2 };
const obj2 = { one2: 1, two2: 2 };

// 1) 복사
const obj3 = { ...obj1 };

// 2) 결합
const obj4 = { ...obj1, ...obj2 };

console.log(obj3);  // {one1: 1, two1: 2}
console.log(obj4);  // {one1: 1, two1: 2, one2: 1, two2: 2}

//💡 등호를 이용해서 복하면 안되는 이유?
// 오브젝트 타입이라고 불리는 변수는 등호로 복사하면 참조값✨ 역시 상속됙 때문에
// 예상치 못한 동작을 일으킨다.
// 등호를 이용해 복사한 배열에 조작을 추가한 것이
// ⚠️ 원래 배열에도 영향을 준다.
// 그렇기 때문에 스프레드 연산자를 이용해서 객체를 복사한다.

// 💡 스프레드 구문을 사용하면 '완전히 새로운 배열'을 만들기 때문에
// 원래 배열에 영향을 주지 않는다.

// 참조값✨? 변수를 실제로 저장하고 있는 위치를 나타내는 값