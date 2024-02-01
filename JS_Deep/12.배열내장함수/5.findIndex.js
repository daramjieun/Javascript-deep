// 5.findIndex()

// 복잡한 객체를 포함한 배열에서는 includes나 indexOf는 사용이 어렵다.
// 객체 배열에서 원하는 요소의 인덱스를 갖다달라고 요구할 때 사용

// findIndex(콜백함수)
// 콜백함수는 forEach나 map처럼 각각의 요소들에 대해서
// 모두 순회를 하면서 사용한다.

const arr = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" },
    { color: "blue" },
];

let number = 3;

// 여기서 elm 하나하나가 다 객체다.
// "blue"에 해당하는 인덱스 반환
const idx = arr.findIndex((elm) => elm.color === "blue");

// 인덱스 반환
console.log(idx);   // 2
// 요소 자체를 반환할 때는 인덱스 접근
console.log(arr[idx]);  // {color: 'blue'}

// 💡arr 배열을 모두 순서대로 한 번씩 순회한다.
// { color: "blue" } 객체가 elm이라는 매개변수로 들어간다.
// elm.color === "blue"가 맞기 때문에 인덱스 2 반환

//💡만약 같은 값이 여러 개일 때 가장 먼저 일치하는 인덱스를 반환
// 배열을 처음부터 끝까지 순회하면서 가장 먼저 조건에 만족하는 인덱스를 반환