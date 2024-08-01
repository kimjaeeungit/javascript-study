'use strict';

//1] 배열 생성
//배열 리터럴 표기법(array literal syntax) : 얘 많이씀
const fruits = [
  '사과',
  '바나나',
  '딸기',
  '바나나',
  '파인애플',
  '토마토',
  '메론',
];
//배열 생성자 표기법(array constructor syntax)
const fruitsArray = new Array('사과', '바나나', '딸기');
console.log('fruits: ', fruits);

console.log(fruits[0]);
console.log(fruits[1]);
fruits[2] = '포도';
console.log(fruits[2]);

//2] 자주 사용하는 배열 API
//length
console.log('fruits.length: ', fruits.length);
console.log('마지막 값: ', fruits[fruits.length - 1]); //마지막 데이터 가져올떄
//push()
fruits.push('귤');
console.log(fruits);

//forEach() : 배열 안에있는 값을 순회하면서 하나하나 넘겨주는 함수
fruits.forEach(function (item, index) {
  //콜백함수
  console.log(index, item);
});

//pop() : 끝에서 부터 지워짐
fruits.pop();
let removedItem = fruits.pop();
console.log('removedItem: ', removedItem);
console.log('제거완료: ', fruits);

//shift() : 앞에서 부터 지워짐
fruits.shift();
console.log('제거완료: ', fruits);

//unshift() : 앞에서부터 값 추가
fruits.unshift('수박');
console.log(fruits);

//indexOf() : 인덱스 가져오기
const index = fruits.indexOf('복숭아'); //찾는 인덱스가 없을떄 -1반환
console.log('index: ', index);

//splice() : 인덱스 정해서 제거하기
const findIndex = fruits.indexOf('파인애플');
console.log('findIndex: ', findIndex);
fruits.splice(findIndex, 1); //1번째 인덱스 부터 2개 제거하기
console.log('splice: ', fruits);

//3] 구조 분해 할당 (Distructuring assignment)
//일반 - 배열 항목을 개별 변수에 담을때
let fruits2 = ['사과', '바나나', '딸기'];
// let apple = fruits2[0];
// let banana = fruits2[1];
// let strawberry = fruits2[2];

//구조 분해 할당 - 배열 항목을 개별 변수에 담을 때
let [apple, banana, strawberry, ...others] = [
  '사과',
  '바나나',
  '딸기',
  'a',
  'b',
  'c',
  'd',
  'e',
];
console.log(apple);
console.log(banana);
console.log(strawberry);
console.log(others);

//4] 전개 구문(Spread syntax)
//값을 쫙 펼져서 값을 확장 하기
let fruits3 = ['사과', '바나나', '딸기'];
let fruits4 = ['두리안', '수박', '망고'];
let items = ['복숭아', ...fruits3, '파인애플', '수박'];
console.log(items);
let items2 = [...fruits3, ...fruits4];
console.log(items2);

//5] Rest parameters
//함수 매개변수로 여러개의 데이터를 받을때 사용
//일반
print('a', 'b', 'c');
function print(value1, value2, value3) {
  console.log(value1);
  console.log(value2);
  console.log(value3);
}
//Rest parameters
print2('a', 'b', 'c', 'e', 'f');
function print2(...values) {
  // console.log(values[0]);
  // console.log(values[1]);
  // console.log(values[2]);
  values.forEach(function (value, index) {
    console.log('index: ', index, 'value: ', value);
  });
}

//배열 복사하기
//얕은 복사(Shallow copy)
let source = ['두리안', '수박', '망고'];
let target = source;
target[0] = '파인애플'; //source,target 둘다 바뀜, 참조값 때문에
console.log('source: ', source);
console.log('target: ', target);

//깊은 복사(Deep copy)
let source2 = ['두리안', '수박', '망고'];
//let target2 = { ...source };//방법 1
let target3 = Array.from(source); //방법 2
let target4 = source.slice(); //방법 2
target[0] = '파인애플'; //source,target 둘다 바뀜, 참조값 때문에
console.log('source2: ', source2);
console.log('target4: ', target4);
