//연산자

// 1] 문자열 병합
console.log('Hello' + 'world');
console.log('3' + 3); //number->string
console.log(typeof ('3' + 3)); //number->string
console.log('3' + '5' + 3); //358
console.log(3 + 5 + '8'); //88

// 2]산술 연산자
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(9 % 2);

//홀수짝수
//let number = prompt('숫자를 입력해주세요');
// if (number % 2 === 1) {
//   alert('홀수 입니다');
// } else {
//   alert('짝수 입니다');
// }

// 3] 증감연산자
let result = x + y;
//let result = x++ + y;
//let result = ++x + y;
//let result = x + --y;
//let result = x + y--;
console.log('result: ', result);
console.log('x: ', x);
console.log('y: ', y);

// 4] 비교연산자
let a = 20;
let b = 10;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
let c = 30;
let d = '30';
console.log(c == d); //true
console.log(c === d); //false , 데이터 타입까지 비교하기 때문, 문자를 숫자로 변환
console.log(c != d);
console.log(c !== d);

// 5] 할당 연산자
let j = 10;
let k = 20;
j += k;
console.log(j);
//1부터 10까지 더하기
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 6] 논리 연산자
let x2 = true;
let y2 = false;
console.log(x2 && y2); //모두 true 일때 true 그외는 false
console.log(x2 || y2); //둘중 하나라도 true 일때 true 그외는 false
console.log(!x2); //false 면 true, true면 false

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

console.log(emailEl);
console.log(passwordEl);

btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;

  console.log('email: ', email);
  console.log('password: ', password);

  //뒤에 조건은 검색 안함 ,  단축평가
  //if (email === '' || validateEmail(email)) {
  if (email === '' || email.includes('@') === false) {
    alert('이메일을 입력해주세요');
  } else if (!password) {
    alert('비밀번호를 입력해주세요');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    alert('비밀번호는 8~16자 이내여야 합니다');
  } else {
    alert('로그인 성공');
  }
});

function validateEmail(emai) {
  //.....
  //5분
  return ture;
}

// 7] 삼항연산자
//기본 긴 쿼리
let number = 10;
let message = null;
if (number % 2 === 1) {
  message = '홀수입니다.';
} else {
  message = '짝수입니다.';
}
//삼항연산자로 줄인 쿼리
let message2 = number % 2 === 1 ? '홀수입니다' : '짝수입니다';

console.log(message);
console.log(message2);
