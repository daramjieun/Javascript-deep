// fetch는 api 호출을 호출할 수 있도록 도와주는 js 내장함수다.
// 프로미스 반환하는 함수는 비동기 처리를 하는 함수
// 이 함수는 then을 통해서 사용 가능
async function getData() {
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();