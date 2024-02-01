// 객체 분할 대입의 디폴트 값

const myProfile = {
    age: 29,
}

// myProfile 객체에 name 속성 존재하지 않는다.
const { name, age } = myProfile;

const result = `제 나이는 ${age}이고, 이름은 ${name}입니다.`;

console.log(result);    //제 나이는 undefined입니다.
console.log(age);  // 29
console.log(name);  // undefined


// 디폴트 값(=)
const myProfile2 = {
    age2: 28,
}

// myProfile 객체에 name 속성 존재하지 않는다.
const { age2, name2 = "이지은" } = myProfile2;

const result2 = `제 나이는 ${age2}이고, 이름은 ${name2}입니다.`;

console.log(result2);    //제 나이는 undefined입니다.
console.log(age2);  // 28
console.log(name2);  // 이지은