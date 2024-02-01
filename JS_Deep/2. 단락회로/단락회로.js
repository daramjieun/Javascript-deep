// 단락 회로 평가

// = 논리 연산자의 특성을 이용하는 것
// = 단락 회로 평가는 왼쪽에서 오른쪽으로 연산하게 되는 
// 논리 연산자의 연산 순서를 이용하는 문법
// = 피연산자 중에 뒤에 위치한 피연산자를 확인할 필요 없이
// 연산을 끝내버리는 것이 단락 회로 평가라고 한다.
// = 💡단락 회로 평가는 truthy와 falsy로 평가할 때 유용하게 사용된다.

// 1. && 연산자 (AND)
// = 둘 다 true일 때 true
// = 앞 쪽이 true면 뒤에 위치한 피연산자를 확인하고, true이면 반환
// = && 연산자는 왼쪽을 true로 판정하면 오른쪽을 반환
// = 한 쪽이라도 false이면 false이다.
// 그렇기 때문에 뒤에 위치한 피연산자를 확인할 필요 없이 연산을 끝낸다.

console.log(true && true);  // true (오른쪽 true 반환)
console.log(false && true); // false

// 2. || 연산자 (OR)
// 둘 중에 하나만 true여도 true
// 앞에가 true이면 그 값을 바로 반환하고 종료
// 연산자의 왼쪽이 false면 오른쪽 반환
// 왼쪽이 true면 왼쪽 반환

console.log(true || false); // ture
console.log(false || true); // true
console.log(true || true); // true (왼쪽 true 반환)

// 3. 부정 연산자
console.log(!true); // false