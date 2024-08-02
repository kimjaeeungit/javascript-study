'use strict';
//조건문 1] If문
let condition = 10;
if (condition > 100) {
  console.log('참입니다.');
} else {
  console.log('거짓 입니다.');
}
//prompt : 사용자들에게 값을 입력 받을 수 있다.
let score = prompt('수학점수를 입력해주세요');
console.log('score: ', score);
//90 이상 "등급은 A"
//80 이상 "등급은 B"
//70 이상 "등급은 C"
//60 이상 "등급은 D"
//나머지 다른값은 "등급은 F"
if (score >= 90) {
  console.log('등급은 A');
} else if (score >= 80) {
  console.log('등급은 B');
} else if (score >= 70) {
  console.log('등급은 C');
} else if (score >= 60) {
  console.log('등급은 D');
} else {
  console.log('등급은 F');
}

//값이 존재할 경우에는 true
//하지만 false, 0, -0, null, undefined, "", Nan은 거짓
let condition2 = '';
if (condition2) {
  console.log('참입니다.');
} else {
  console.log('거짓 입니다.');
}
