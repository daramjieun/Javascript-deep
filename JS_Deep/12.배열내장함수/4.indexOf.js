// 4.indexOf

const arr = [1, 2, 3, 4];

let number = 3;
let number2 = "3";

console.log(arr.indexOf(number));   //2
console.log(arr.indexOf(number2));  // -1 (존재하지 )

// 배열안 값이 존재하지 않으면 -1 반환
// 배열 안에 존재하면 인덱스를 반환