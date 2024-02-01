// 조건문 업그레이드
// 조건문을 복잡하지 않게 똑똑하게 사용하는 방법 2가지
// 1) 배열 메서드 .includes
// 2) 객체의 대괄호 표기법

// 1)
// ⚠️ 문제점: 조건이 너무 많다.
function isKoreaFood(food) {
    if (food === "불고기" || food === "비빔밥" || food === "김밥") {
        return true;
    }
    return false;
}

const food1 = isKoreaFood("불고기");
const food2 = isKoreaFood("파스타");
console.log(food1); // true
console.log(food2); // false

// 1) .includes()  
// 해결: 배열 메서드 활용해서 복잡한 조건문 간추릴 수 있다.✨
function isKoreaFood2(food) {
    if (["불고기", "비빔밥", "김밥"].includes(food)) {
        return true;
    }
    return false;
}

const rice1 = isKoreaFood2("불고기");
const rice2 = isKoreaFood2("파스타");
console.log(rice1); // true
console.log(rice2); // false

// 2) 각 나라별 추천 음식 구현
//⚠️문제점: 조건문이 더 많아지면 힘들다.
// 객체의 프로퍼티에 접근하는 대괄호 표기법으로 해결할 수 있다.
const getMeal = (mealType) => {
    if (mealType === '한식') return "삼겹살";
    if (mealType === '양식') return "파스타";
    if (mealType === '중식') return "양꼬치";
    if (mealType === '일식') return "초밥";
    return "굶기";
};

console.log(getMeal("일식"));   //초밥
console.log(getMeal("한식"));   // 삼겹살
console.log(getMeal("중식"));   // 양꼬치
console.log(getMeal("프랑스식"));   // 굶기
console.log(getMeal("양식"));   // 파스타

// 2) 해결: 객체의 대괄호 표기법 ✨
// 굉장히 많은 유형 하나를 리턴해야 할 때 객체의 괄호 표기법 사용
const meal = {
    한식: "삼겹살",
    양식: "파스타",
    중식: "양꼬치",
    일식: "초밥",
    인도식: "카레"
};

const getMeal2 = (mealType) => {
    return meal[mealType] || "굶기";
}

//  meal 객체에서 한식이라는 key의 값을 리턴
console.log(getMeal2("한식"));   // 삼겹살
console.log(getMeal2("인도식"));   // 카레
console.log(getMeal2()); // 굶기