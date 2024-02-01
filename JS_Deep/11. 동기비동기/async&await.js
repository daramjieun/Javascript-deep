// async

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// async를 붙여주면 
// 이 함수는 자동적으로 Priomise를 리턴하는 비동기 처리 함수가 된다.
// await을 호출 앞에 붙이면 비동기 함수가 동기처럼 작동한다.
// await 키워드가 붙은 함수의 호출은 
// 함수 코드가 끝날 때까지 뒤에 있는 코드를 수행하지 않는다.
// await 키워드는 async가 붙은 함수 내에서만 사용 가능
async function helloAsync() {
    await delay(3000);
    return "hello async";
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();

helloAsync().then((res) => {
    console.log(res);   // hello Async
});