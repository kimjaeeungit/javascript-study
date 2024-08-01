//Data type 데이터 타입
'use strict';

//1] 숫자
let number = 2;
const number2 = 1.2;
console.log(number);
console.log(5 / 0); //정수를 영으로 나누면 Infinity 반환
console.log(-5 / 0); //음수를 영으로 나누면 -Infinity 반환
//console.log('hello' / 5); //문자를 숫자로 나누려하면 NaN -이것도 숫자타입
let nan = 'hello' / 5;
console.log(nan);
console.log(typeof nan); //typeof 이 연산자를 통해 데이터 타입을 알 수 있다.

//2]문자열
const name1 = '김재은'; //싱글
const name2 = '김재은'; //더블
const name3 = `김재은`; //백틱
const name = '김재은';
const age = 25;
console.log(
  '안녕하세요 제이름은' + name + '입니다. 나이는' + age + '살 이에요'
);
console.log('------------------------');
console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는${age}살 이에요`);
const message = `안녕하세요

이렇게 표현할 수 있어요`;
console.log(message);
const hello = "안녕하세요\n 제 이름은 '김재은' 입니다"; //한줄 띄기, 텍스트안에서 따옴표 쓰기 \'ㅇㅇ\'
console.log(hello);

//3] 불리언 boolean
const isProgramer = true;
const isDesign = false;
console.log('isProgramer: ', typeof isProgramer);
console.log('isDesign: ', isDesign);
if (isProgramer) {
  console.log('프로그래머 입니다');
} else {
  console.log('디자이너 입니다');
}

//4] 심볼 : ES6에서 도입한 새 데이터 타입

//5] null:값이 없는 상태, undefined:값을 할당하지 않은 상태
const username = null;
let message2;
console.log(username);
console.log(message2);

//6] 객체 타입(Object Type)
//객체 타입은 값을 여러개 갖고있을 수 있다.
const person = {
  myName: '김재은',
  age: 25,
  isProgramer: true,
  say() {
    console.log('Hello!');
  },
};

const arr = [1, 2, 3, 4];
arr.push(88);
console.log(arr.length);
