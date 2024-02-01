
// 4) 중첩 삼항연산자
// 이때는 "if문" 사용하는 것이 더 가독성에 좋다.✨

// 90점 이상 A+
// 50점 이상 B+
// 둘 다 아니면 F

// let score = 100;
// let score = 80;
let score = 40;

score >= 90
    ? console.log("A+")
    : score >= 50
        ? console.log("B+")
        : console.log("F"); // F

// 5) 조건 3가지 이상일 때는 if문 사용 - 가독성에 더 좋기 때문 ✨
let point = 80;

if (point >= 90) {
    console.log("A+");
} else if (point >= 80) {
    console.log("B+");  // B+
} else {
    console.log("F");
}