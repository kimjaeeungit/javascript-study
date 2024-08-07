'use strict';

// 함수 복습 2024/08/07

// 1] 함수 생성
// 함수 선언식 : 호이스팅 영향 받음
function sayHello() {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 김재은, 나이: 22살');
}
sayHello();
// 함수 표현식 : 호이스팅 영향 안받음
const sayHello2 = function () {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 김재은, 나이: 22살');
};
sayHello2();
// 에로우 펑션으로 바꿔보기
const sayHello21 = () => {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 김재은, 나이: 22살');
};
sayHello2();

// 2] 파라미터
const aboutMe = function (name, job) {
  console.log('이름과 직업을 출력해주세요');
  console.log(`이름: ${name}, 나이: ${job}`);
};
aboutMe('김재은', 'programmer');
aboutMe('김재영', '퍼블리셔');

// 3] 반환값
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(5, 3);
console.log('result: ', result);
// 에로우 펑션으로 바꿔보기
const sum22 = (num1, num2) => num1 + num2;

console.log('----------------------------');

// 4] 함수 스코프
// 전역 스코프 - 최상단에 선언된 변수, 함수
// 블록 스코프 - 블록 단위로 선언된 변수, 함수
// 자식은 부모것을 사용할 수 있다.
function aFunc() {
  let name = '김재은';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('bFunc name :', name);
    console.log('bFunc age: ', age);
    console.log('bFunc job: ', job);
  }
  bFunc();
  console.log('aFunc name :', name);
  console.log('aFunc age: ', age);
  //console.log('job: ', job);
}
aFunc();
console.log('----------------------------');

// 5] 익명함수 : 재활용할 필요 없는 함수
let fruits = ['사과', '바나나', '딸기'];
fruits.forEach(function (item) {
  console.log('item: ', item);
});
console.log('----------------------------');

// 6] 즉시실행함수
// ()를 사용하여 즉시 실행하는 함수
(function () {
  console.log('Hello');
})();
(function hello() {
  console.log('Hello');
})();

// 7] 파라미터 기본값 : ES6에서 등장한 기능
function sum2(num1 = 0, num2 = 0) {
  console.log('num1: ', num1);
  console.log('num2: ', num2);
  return num1 + num2;
}
let result2 = sum2(5);
console.log('result2: ', result2);
console.log('----------------------------');

// 8] 에로우 함수 (Arrow Function)
// const bye = function () {
//   console.log('Bye');
// };
// bye();
const bye = (name) => `Bye ${name}`;
const str = bye('김재은');
console.log(str);

// 9] 콜백함수 : 다시 호출되는 함수
let fruits2 = ['사과', '바나나', '딸기'];
fruits2.forEach(function (item) {
  console.log(item);
});

fruits2.forEach(printItem);

function printItem(item, index) {
  console.log('item: ', item);
}

// 이런식으로 많이 사용
fruits2.forEach((item, index) => {
  console.log('item: ', item);
});
