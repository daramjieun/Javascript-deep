// truthy와 falsy를 응용해서 함수 안에서 사용하는 방법

// 1)
// 1. person 변수 값이 할당되지 않음
// 2. 객체가 없는데 객체의 name 값을 출력하려고 함.
// 당연히 할당된 값이 없기 때문에 undefind 출력

const getName = (person) => {
    return person && person.name;
};

let person

const name = getName(person);
console.log(name);  // udefined

// 2) 단락회로 응용해서 출력
const getName2 = (person2) => {
    const name = person2 && person2.name;
    return name || "객체가 아니다.";    // 객체가 아니다.
};

let person2;
const name2 = getName2(person2);
console.log(name2);

// 3)
const getName3 = (person3) => {
    const name = person3 && person3.name; // 이지은
    return name || "객체가 아니다.";    // 이지은
};

let person3 = {
    name: "이지은"
};
const name3 = getName2(person3);
console.log(name3); // 이지은

// 4)
const getName4 = (person4) => {
    const name = person4 && person4.name; // null-falsy
    return name || "객체가 아니다.";    // "객체가 아니다."
};

let person4 = null;
const name4 = getName2(person4);
console.log(name4);