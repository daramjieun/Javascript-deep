// 속성명과 변수명이 같은 경우 1
const name = "이지은";
const age = 29;

const user = {
    name: name,
    age: age,
};

console.log(user);  // {name: '이지은', age: 29}

// 속성명과 변수명이 같은 경우 2
// 객체의 속성명과 설정할 변수명이 같으면 생략 가능
const name2 = "이지은";
const age2 = 29;

const user2 = {
    name2,
    age2,
};

console.log(user2);  // {name: '이지은', age: 29}