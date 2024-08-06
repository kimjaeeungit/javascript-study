'use strict';

//배열 복습 2024/08/06

// 1] 배열의 생성
// 배열 리터럴 표기법 (array literal syntax) : 현업에서 많이 쓰는 방법
const fruits = ['사과', '바나나', '딸기', '복숭아', '파인애플', '허니멜론'];
console.log('fruits: ', fruits);
// 배열 생성자 표기법 (array constructor syntax)
const fruitsN = new Array('사과', '바나나', '딸기');
console.log('fruitsN: ', fruitsN);
// 2]배열 접근
console.log(fruits[0]);
console.log(fruits[1]);
fruits[2] = '포도';
console.log(fruits[2]);

// 3] 자주 사용하는 배열 API
// length : 배열 길이 가져오기
console.log('fruits.length: ', fruits.length);
//마지막 데이터 가져오고 싶을때
console.log('마지막 값: ', fruits[fruits.length - 1]);
// push() : 끝에다가 값 추가
fruits.push('귤');
console.log('fruits: ', fruits);
// forEach() : 배열안에 있는 값을 순회하면서 하나하나 넘겨준다.
fruits.forEach(function (item, index) {
  console.log(index, item);
});
// pop() : 끝에서부터 값을 하나씩 제거.
fruits.pop();
fruits.pop();
let removedItem = fruits.pop(); // 지운 값을 받을 수도 있다.
console.log('removedItem: ', removedItem);
console.log('제거완료: ', fruits);
// shift() : 앞에서부터 값을 하나씩 제거.
fruits.shift();
console.log('fruits: ', fruits);
// 앞에서부터 값 추가
fruits.unshift('수박');
console.log('fruits: ', fruits);
// indexOf() : 인덱스 찾기, 찾는 인덱스가 없을땐 -1 반환
const index = fruits.indexOf('파인애플');
console.log('index: ', index);
// splice() : 특정 인덱스의 값을 제거
fruits.splice(1, 1);
console.log('fruits-splice : ', fruits);
const findIndex = fruits.indexOf('포도');
console.log('findIndex : ', findIndex);
fruits.splice(findIndex, 2);
console.log('fruits-splice2 : ', fruits);

// 4] 구조 분해 할당(Distructuring assignment)
// 배열 항목을 개별 변수에 담을때
let fruits4 = ['사과', '바나나', '딸기'];
// let apple = fruits[0];
// let banana = fruits[1];
// let strawberry = fruits[2];
let [apple, banana, strawberry, ...others] = [
  '사과',
  '바나나',
  '딸기',
  'a',
  'b',
  'c',
  'd',
];
console.log(apple);
console.log(banana);
console.log(strawberry);
console.log(others);

// 5] 전개 구문 (Spread syntax)
let fruits51 = ['사과', '바나나', '딸기'];
let items = ['복숭아', ...fruits51, '파인애플', '수박'];
console.log('items : ', items);
let fruits52 = ['두리안', '패션후루츠', '망고'];
let items2 = [...fruits51, ...fruits52];
console.log('items2 : ', items2);

// 6] 나머지 매개변수 구문 (Rest parameters)
// 함수가 무한한 수의 파라미터를 배열로 받을 수 있다.
print('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

//function print(value1, value2, value3) {
function print(...values) {
  values.forEach(function (value, index) {
    console.log('index: ', index, 'value: ', value);
  });
}

// 7] 배열 복사
// 얕은복사 (shallow copy)
let source = ['사과', '바나나', '딸기'];
let target = source;
target[0] = '파인애플';
console.log('source: ', source);
console.log('target: ', target);
//깊은복사 (deep copy)
// 방법 1 : 전개구문 활용하기
let source2 = ['사과', '바나나', '딸기'];
let target2 = [...source2];
target2[0] = '파인애플';
console.log('source2: ', source2);
console.log('target2: ', target2);
// 방법 2 : Array의 from 메소드
let target3 = Array.from(source2);
// 방법 3 : slice 메소드
let target4 = source2.slice();
