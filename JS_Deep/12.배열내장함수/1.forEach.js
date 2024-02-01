// 1. forEach (배열의 모든 요소를 한 번씩 순회)
const arr = [1, 2, 3, 4];

// for문으로 배열 순회
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach((elm) => console.log(elm * 2));
// 내장함수 forEach 콜백함수의 매개변수로 하나씩 전달해서 원하는 작업을 하게 해줌
// 배열의 각각 요소를 하나씩 실행해줌