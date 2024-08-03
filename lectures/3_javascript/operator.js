// 문자열 병합
console.log('Hello' + 'world');
console.log('3' + 3); //number->string
console.log(typeof ('3' + 3)); //number->string
console.log('3' + '5' + 3); //358
console.log(3 + 5 + '8'); //88

//산술 연산자
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(9 % 2);

//홀수짝수
let number = prompt('숫자를 입력해주세요');
if (number % 2 === 1) {
  alert('홀수 입니다');
} else {
  alert('짝수 입니다');
}

//증감연산자
let result = x + y;
//let result = x++ + y;
//let result = ++x + y;
//let result = x + --y;
//let result = x + y--;
console.log('result: ', result);
console.log('x: ', x);
console.log('y: ', y);

//비교연산자
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

//할당 연산자
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
