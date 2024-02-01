// 6.find
// 인덱스를 가져오는 것이 아니라 조건에 일치하는 요소를 그냥 가져온다.

const arr = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" },
    { color: "blue" },
];

let number = 3;

const element = arr.find((elm) => elm.color === "blue");

// element(요소) 반환
console.log(element);   // {color: 'blue'}

// 💡 indexIndex vs find
// findIndex는 인덱스 반환
// find는 요소 자체를 반환

// 상황에 맞게 사용하면 된다.