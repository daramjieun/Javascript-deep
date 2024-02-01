// 8.slice (자른다✂️)
// arr.slice(begin, end)

const arr = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" },
];

console.log(arr.slice()); // 배열 자체를 반환한다.(배열 그대로를 자른다.)
console.log(arr.slice(0, 2)); // 인덱스 0부터 1까지 자름
console.log(arr.slice(0, 4)); // 인덱스 0부터 3까지 자름
