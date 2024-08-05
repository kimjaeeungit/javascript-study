'use strict';

// 객체 리터럴 문법
const person = {
  name: '김재은',
  age: 25,
};
//또 새로 프로퍼티를 추가로 생성 가능
//하지만 현업에서는 객체생성할때 확실히 생성하는게 좋음
person.job = '개발자';
// 객체 생성자 문법
const person2 = new Object();
person2.name = '김재은';
person2.age = '22';

//console.log(person2);

//객체 프로퍼티에 접근
//점표기법
//괄호표기법
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
// console.log(person3.name[0]);
// person3.hello();
// console.log(person3.hobby.name);
// console.log(person3.hobby.alert());
//괄호 표기법으로 접근해보기
person3['name'][0] = '값변경';
//console.log(person3['name'][0]);
//person3['hello']();
//console.log(person3['hobby']['name']);
//person3['hobby']['alert']();
//프로퍼티 제거하기
delete person3.name;
delete person3['age'];

//console.log(person3);

//함수 파라미터로 객체 전달하기
//함수 파라미터로 객체를 전달하면 코드를 클린하게 만들 수 있다.
function printPerson(person) {
  console.log(
    `제 이름은 ${person.name}아며, 나이는 ${person.age}살 입니다. 그리고 취미는 ${person.hobby}입니다.`
  );
}
const person4 = {
  name: '김재은',
  age: 21,
  hobby: '헬스',
};
//printPerson(person4);

//구조 분해 할당 (Distructuring assignment)
//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있다.
const { name, age } = person4;
console.log('name: ', name);
console.log('age: ', age);
//함수에서 객체 개별 속성을 받을 때
function printPerson({ hobby, name, age }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
  );
}
//printPerson(person4);

//팩토리 함수
//자바스크립트로 프로그래밍을 하다보면 같은 유형의 객체를 여러번 생성해야함.
function createPerson(name, age, hobby) {
  // return {
  //   name: name,
  //   age: age,
  //   hobby: hobby,
  // };
  return {
    name,
    age,
    hobby,
  };
}
const person51 = createPerson('김재은1', 20, '운동1');
const person52 = createPerson('김재은2', 21, '운동2');
const person53 = createPerson('김재은3', 22, '운동3');
const person54 = createPerson('김재은4', 23, '운동4');
const person55 = createPerson('김재은5', 24, '운동5');
const person56 = createPerson('김재은6', 25, '운동6');
printPerson(person51);
printPerson(person52);
printPerson(person53);
printPerson(person54);

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

let person6 = {
  name: '김재은',
  age: 23,
};
//Call by Reference
console.log('=================');
console.log(person6);
changePersonName(person6);
console.log(person6);
function changePersonName(person) {
  person.name = '김재영';
  person.age = '21';
}

//Spread operator(전개구문)
