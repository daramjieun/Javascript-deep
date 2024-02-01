// 7. filter
// 배열을 배열로 필터링
// 전달한 콜백함수가 true로 반환하는 모든 요소를 배열로 반환
// 정말 말 그대로 필터 역할

const arr = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" },
];

// 변수에 담아서 저장
const filter = arr.filter((elm) => elm.color === "blue");
console.log(filter);

// (2) [{…}, {…}]
// 0: {num: 3, color: 'blue'}
// 1: {num: 5, color: 'blue'}
// length: 2