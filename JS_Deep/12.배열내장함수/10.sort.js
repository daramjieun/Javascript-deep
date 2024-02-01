// 10. sort
// 원본 배열의 순서를 정렬

// 문자열 배열
let chars = ["나", "다", "가"];

chars.sort();
console.log(chars); // (3) ['가', '나', '다']

// 숫자 배열 1
let numbers1 = [0, 30, 20, 10, 50, 40];

numbers1.sort();
console.log(numbers1);  // (6) [0, 10, 20, 30, 40, 50]

// 숫자 배열 2 - 순서가 이상하다.
let numbers2 = [0, 1, 3, 2, 10, 30, 20];

numbers2.sort();
console.log(numbers2);  // (7) [0, 1, 10, 2, 20, 3, 30]

// 숫자 배열 3
// sort 함수에 비교함수를 만들어서 넣어줘야 한다.

// 💡 비교함수란? 2개의 값을 비교해서 4가지 중 하나의 결과를 내놓아야 한다.
// 1. 같다. (a = b) 0 같을 때는 자리를 바꾸지 않는다.
// 2. 크다. (a > b) 1 큰 값이 뒤로 가야한다.
// 3. 작다. (a < b) -1 작은 값이 더 앞으로 가야 한다.
// 만약에 내림차순으로 바꾸고 싶다면 1을 -1로 -1을 1로 바꾸면 된다.

let numbers3 = [0, 1, 3, 2, 10, 30, 20];

// const compare = (a, b) => {
//     if (a > b) {
//         return 1;   // 큰 값이 뒤로 가야한다.
//     } else if (a < b) {
//         return -1; // 작은 값이 더 앞으로 가야 한다.
//     } else {
//         return 0;   // 같을 때는 자리를 바꾸지 않는다.
//     }
// };

const compare = (a, b) => a - b;    //(오름차순 정렬)
const compare2 = (a, b) => b - a;    //(내림차순 정렬)

numbers3.sort(compare);
console.log(numbers3);  // (7) [0, 1, 2, 3, 10, 20, 30] (오름차순)

numbers3.sort(compare2);
console.log(numbers3);  // (7) [30, 20, 10, 3, 2, 1, 0] (내림차순)