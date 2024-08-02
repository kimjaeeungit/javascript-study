'use strict';

for (let i = 0; i < 5; i++) {
  //console.log(i);
}

let fruits = ['사과', '배', '바나나', '포도', '딸기'];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

//for...in : 객체안에 있는 값을 반복적으로 가져올떄 효율적
let person = {
  name: '김재은',
  age: 27,
  job: '개발자',
};
//let key = prompt('키를 입력해주세요');
//console.log(person[key]); //키를 모를때,사용자한테 입력 받을때

//for in 이 있기전에 어떻게 배열을 출력했나
let keys = Object.keys(person);
//console.log('keys: ', keys);
for (let i = 0; i < keys.length; i++) {
  //console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}

//이것은 ES6 이후 등장한 for..in문
for (let key in person) {
  console.log(person[key]);
}

//for...of : 배열안에 있는 값을 반복적으로 가져올떄 효율적
let fruits2 = ['사과', '배', '바나나', '포도', '딸기'];
for (let fruit of fruits2) {
  console.log(fruit);
}
