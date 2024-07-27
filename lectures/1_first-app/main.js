//Using console.log
console.log('Hello!!');
console.log('26/7/2024');
console.log('Javascript', 'Study', 'Start!');
console.log('by myself');

//Using alert
alert('Hello Javascript');
/*
console.log('Hello!!');
console.log('26/7/2024');
console.log('Javascript', 'Study', 'Start!');
console.log('by myself');
*/

//Declaring variables
let name = 'Jaeeun Kim';
let age = 27;
console.log('name:', name);
console.log('age:', age);

//Declaring function
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

//Function calling
sayHello();
console.log('-------------');
sayHello();

//Declaring object
let obj = {
  age: 27, //property
  sayHello: function () {
    console.log('obj<Hello1');
    console.log('obj<Hello2');
    console.log('obj<Hello3');
  },
};

//Object calling
console.log(obj.age);
obj.sayHello();
