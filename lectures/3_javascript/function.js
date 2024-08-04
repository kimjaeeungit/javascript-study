'ues strict';

//함수 선언식, 호이스팅 영향 받음
function sayHello() {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름 : 김재은, 나이: 22살');
}
sayHello();
//함수 표현식, 호이스팅 영향x, 자주사용
const sayHello2 = function () {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름 : 김재은, 나이: 22살');
};
sayHello2();
//에로우 펑션으로 바꾸기
const sayHello21 = (name, age) => {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름 : ${name}, 나이: ${age}`);
};
sayHello21('재은킴', 21);

//파라미터
const sayHello3 = function (name, age) {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름 : ${name}, 나이: ${age}`);
};
sayHello3('김재은', 20);

//반환값, 파라미터 기본값 : 기본값 설정 가능
function sum(num = 0, num2 = 0) {
  return num + num2;
}
let result = sum(5, 3);
console.log(result);
let result2 = sum(5); //숫자+undefined = Nan
console.log(result2);
//에로우 펑션으로 변경
const sum2 = (num = 0, num2 = 0) => num + num2;
console.log(sum(2, 4));

//함수 스코프

//익명함수 : 재활용할 필요 x

//즉시실행 함수
(function () {
  console.log('이쁜 재은');
})();

//Arrow Function
const hello = (name) => `hello ${name}`;
const str = hello('김재은');
console.log(str);

//콜백함수 : 다시 호출되는 함수
let fruits = ['사과', '바나나', '딸기'];
//이렇게 많이 사용함
fruits.forEach((item, index) => {
  console.log('item: ', item);
});
//에로우 아닌 일반 함수
fruits.forEach(function (item, index) {
  console.log('item: ', item);
});
