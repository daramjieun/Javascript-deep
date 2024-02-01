// falsy와 truthy
// 거짓 같은 값과 참 같은 값
// falsy와 truthy한 값은 조건식을 간결하게 만든다.

// falsy: false, 0, -0, 0n, NaN, ""(빈문자열), undefined, null
// truthy: true, "0", "false", 5, [], {}

let a = "";

if (a) {
    console.log("true");
} else {
    console.log("false");   // false
}

let b = undefined;

if (b) {
    console.log("true");
} else {
    console.log("false");   // false
}

let c = "string";

if (c) {
    console.log("true");    // true
} else {
    console.log("false");
}

let d = [];

if (d) {
    console.log("true");    // true
} else {
    console.log("false");
}

// 빈 문자열은 falsy지만 !연산자를 붙여서 참이 된다.
let e = !"";

if (e) {
    console.log("true");    // true
} else {
    console.log("false");
}

// 선언만 하고 값을 할당하지 않았기 때문에 undefined
let f;

if (f) {
    console.log("값 있음");
} else {
    console.log("값 없음"); // 값 없음
}