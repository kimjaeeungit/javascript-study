'use strict';

let count = 0;
while (count < 5) {
  console.log(count);
  count++; //블럭 안에서 while문에서 빠져나올수 있게 빠져나올수 있는 조건을 넣자
}

let number = 0;
do {
  console.log(number);
  number++;
} while (number < 5);
