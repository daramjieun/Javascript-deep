// 11. join
// 배열 요소를 연결해서 출력


const arr = ["이지은", "님", "안녕하세요", "반가워요!"];

console.log(arr.join());
//기본으로 ,로 구분
//이지은,님,안녕하세요,반가워요!

console.log(arr.join(" "));
// 문자열 안에 구분자 넣어서 구분 가능
// 이지은 님 안녕하세요 반가워요!

console.log(arr.join("----"));
// 이지은----님----안녕하세요----반가워요!