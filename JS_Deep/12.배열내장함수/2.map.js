// 2. map 
// 원본 배열의 모든 요소를 순회하면서 연산을 해서 리턴값을 따로 따로 배열로 추려내서 반환
// 1 * 2 리턴
// 2 * 2 리턴
// 3 * 2 리턴
// 4 * 2 리턴
// 이를 배열로 합쳐서 새로운 배열 생성

const arr = [1, 2, 3, 4]
const newArr = arr.map((elm) => {
    return elm * 2;
})

console.log(newArr); // [2, 4, 6, 8]