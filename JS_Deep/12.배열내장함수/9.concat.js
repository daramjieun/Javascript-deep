//9. concat (붙인다.🩹)
// 배열과 배열을 붙여서 하나의 배열로 만든다.

const arr1 = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" },
];

const arr2 = [
    { num: 6, color: "pink" },
    { num: 7, color: "orange" },
];

const arr = arr1.concat(arr2);
console.log(arr);

// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {num: 1, color: 'red'}
// 1: {num: 2, color: 'black'}
// 2: {num: 3, color: 'blue'}
// 3: {num: 4, color: 'green'}
// 4: {num: 5, color: 'blue'}
// 5: {num: 6, color: 'pink'}
// 6: {num: 7, color: 'orange'}
// length: 7