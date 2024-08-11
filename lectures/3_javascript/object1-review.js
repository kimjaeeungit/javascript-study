'use strict';

// 객체 복습 2024/08/08

// 1] 객체 생성
// 객체 리터럴 문법
const person = {
  name: '김재은',
  age: 22,
};
console.log(person);
//객체 생성자 문법
const person2 = new Object();
person2.name = '김재은';
person2.age = 21;
console.log(person2);

// 2] 객체 프로퍼티 접근
const person3 = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'reading',
    alert: function () {
      alert('reading');
    },
  },
};
//점표기법 : 객체.key();
console.log(person3.name[0]);
console.log(person3.hobby.name);
//console.log(person3.hobby.alert());
//person3.hello();
//괄호표기법 : 객체['key']
//person3['name'][1] = 'Jaeeun';
console.log(person3['name'][1]);
//person3['hello']();
console.log(person3['hobby']['name']);
//console.log(person3['hobby']['alert']());
console.log(person3);

// 3] 객체 프로퍼티 동적으로 생성 및 제거
// 프로퍼티 생성
person3['name'][2] = 'Jaeeun';
console.log(person3['name']);
console.log(person3);
// 프로퍼티 제거
delete person3.name;
delete person3['age'];
console.log(person3);

// 4] 함수 파라미터로 객체 전달하기
// 함수 파라미터로 객체를 전달하면 코드를 클린하게 만들 수 있다.
function printPerson(person) {
  console.log(
    `제 이름은 ${person.name}이며, 나이는 ${person.age}살 입니다. 그리고 취미는 ${person.hobby}입니다.`
  );
}
const person4 = {
  name: '김재은',
  age: 21,
  hobby: '헬스',
};
printPerson(person4);

// 5] 구조 분해 할당 (Distructuring assignment)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있다.
// 객체 속성을 개별 변수에 담을 때
const { name, age } = person4;
console.log('name: ', name);
console.log('age: ', age);
// 함수에서 객체 개별 속성을 받을 떄
function printPerson2({ hobby, name, age }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
  );
}
const person5 = {
  name: '김재영',
  age: 20,
  hobby: '독서',
};
printPerson(person5);

// 6] 팩토리 함수
// 자바스크립트로 프로그래밍을 하다보면 같은 유형의 객체를 여러번 생성해야함.
// function createPerson(name, age, hobby) {
//   return {
//     name: name,
//     age: age,
//     hobby: hobby,
//   };
// }
// 이렇게도 쓰기 가능
function createPerson(name, age, hobby) {
  return {
    name,
    age,
    hobby,
  };
}
const person6 = createPerson('김재은1', 23, '운동1');
const person7 = createPerson('김재은2', 22, '운동2');
const person8 = createPerson('김재은3', 21, '운동3');
const person9 = createPerson('김재은4', 20, '운동4');
const person10 = createPerson('김재은5', 19, '운동5');
const person11 = createPerson('김재은6', 18, '운동6');
printPerson2(person6);
printPerson2(person7);
printPerson2(person8);
printPerson2(person9);
printPerson2(person10);
printPerson2(person11);

//Call By Value
let username = '김재은';
console.log(username);
changeName(username);
console.log(username); //값이 안바뀜

function changeName(name) {
  //이 안에서 변수를 생성하고 값을 넣기 때문에
  name = '김재은';
  console.log(name);
}
let person12 = {
  name: '김재은',
  age: 23,
};
//Call by Reference
console.log('=================');
console.log(person12);
changePersonName(person12);
console.log(person12);
function changePersonName(person) {
  person.name = '김재영';
  person.age = '21';
}

// 키 존재 여부 확인
if ('name' in person12) {
  console.log('존재 합니다.');
} else {
  console.log('존재하지 않습니다');
}

// for ...in
const person13 = {
  name: '홍길동',
  age: 20,
  job: '개발자',
};
for (let key in person13) {
  console.log(`key: ${key}, value: ${person13[key]}`);
}
