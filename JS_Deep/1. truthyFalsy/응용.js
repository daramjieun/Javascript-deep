//1)
const getName = (person) => {
    return person.name;
}

let person = { name: "이지은" };
const name = getName(person);
console.log(name);  // 이지은

// 2) 예외처리
// 매개변수가 falsy한 값일 수도 있으므로 조건문으로 예외처리 해줘야 한다.
// 예외 처리를 하면 조건식이 참이 되면서 아래의 return문을 실행시키지 않게 하여
// 에러를 발생시키지 않는다.
// 하지만 이런 함수를 여러 개 만드는데 함수마다 전달 받은 매개변수를 확인하는 건 힘든 일이다.
// ! 부정 연산자를 이용한다.
const getName1 = (person1) => {
    if (person1 === undefined || person1 === null) {
        return "객체가 아니다."
    }
    return person1.name1;
}

let person1;
const name1 = getName1(person1);
console.log(name1); // 객체가 아니다.

// 3) 부정 연산자(!) ✨
// falsy 속성을 이용하여 위 조건문을 !person이라고 작성하면 한방에 해결된다.
// falsy 앞에 !을 붙이면 true가 된다.
const getName2 = (person2) => {
    if (!person2) {
        return "객체가 아니다."
    }
    return person2.name2;
}

let person2;
const name2 = getName2(person2);
console.log(name2);