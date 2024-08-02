'use strict';
//조건문 2] switch문
let subject = 'html';
switch (subject) {
  case 'javascript':
    console.log('javascript 안녕');
    let result = 1 + 2;
    console.log('result: ', result);
    break;
  case 'html':
    console.log('html 안녕');
  //break;
  case 'css':
    console.log('css 안녕');
    break;
  default:
    console.log('default 안녕');
}

console.log('switch문 종료');
/*
 * 수학 점수를 입력받아서
 * 90점 이상이면 'A 학점 입니다'
 * 80점 이상이면 'B 학점 입니다'
 * 70점 이상이면 'C 학점 입니다'
 * 60점 이상이면 'D 학점 입니다'
 * 그외는 'F 학점 입니다'
 */
let score = prompt('수학 점수를 입력하세요');
let value = Math.floor(score / 10);
console.log(value);
switch (value) {
  case 10:
  case 9:
    console.log('A 학점 입니다');
    break;
  case 8:
    console.log('B 학점 입니다');
    break;
  case 7:
    console.log('C 학점 입니다');
    break;
  case 6:
    console.log('D 학점 입니다');
    break;
  default:
    console.log('F 학점 입니다');
}
