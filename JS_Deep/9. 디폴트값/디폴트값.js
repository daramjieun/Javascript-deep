// 디폴트 값

// 함수의 인수나 객체를 분할 대입할 경우 설정해 사용한다.
// 값이 존재하지 않을 때의 초깃값을 설정할 수 있어 처리를 안전하게 가능

const sayHello = (name) => console.log(`저는 ${name}입니다.`);

sayHello("이지은"); // 저는 이지은입니다.
// 💡 전달되는 값 없으면 undefined 출력
sayHello(); // 저는 undefined입니다.



const sayHello2 = (name = "콩두부") => console.log(`저는 ${name}입니다.`);

// 💡 전달되는 값이 없다면 기본값 출력
sayHello2();    // 저는 콩두부입니다.
// 💡 무언가 값이 전달되면 해당 값을 우선으로 한다.
sayHello2("콩비지");    // 저는 콩비지입니다.