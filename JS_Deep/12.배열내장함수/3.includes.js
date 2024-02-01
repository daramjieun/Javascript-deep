// 3. includes
// === 연산을 사용해서 값을 찾는 것과 같다.
// 주어진 배열에서 인자로 받은 값이 존재하는지 안하는지 
// 불리언으로 반환한다.
const arr = [1, 2, 3, 4];

let number = 3;
let number2 = "3";

console.log(arr.includes(number));  // true
console.log(arr.includes(number2));  // false
