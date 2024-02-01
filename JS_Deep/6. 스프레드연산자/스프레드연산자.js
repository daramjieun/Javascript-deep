// 스프레드 연산자

// 중복된 프로퍼티를 계속 사용할 경우 스프레드 연산자를 사용한다.
// 객체의 값을 새로운 객체에 펼쳐준다.

// 📌 객체
const cookie = {
    madeIn: "KOREA",
    color: "brown",
};

const lotusCookie = {
    // madeIn: "KOREA",
    // color: "brown",
    ...cookie,
    toping: "lotus",
};

const cheezeCookie = {
    ...cookie,
    toping: "cheeze",
};

const chocochipCookie = {
    madeIn: "KOREA",
    color: "brown",
    toping: "chocochip",
};

console.log(cookie);
console.log(lotusCookie);
console.log(cheezeCookie);
console.log(chocochipCookie);

// 📌 배열 
const topingCookie = ["로투스 쿠키", "치즈 쿠키", "초코칩 쿠키"];
const notTopingCookie = ["촉촉한 쿠키", "안촉촉한 쿠키"];

// 중간에 요소 넣을 수 있다.
const allCookies = [...topingCookie, "약과 쿠키", ...notTopingCookie];
console.log(allCookies);