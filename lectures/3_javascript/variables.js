'use strict';

//스코프(Scope)
//변수나 함수를 사용할 수 있는 영역
//전역변수 (어떤곳에서든 사용 가능)
let teacher = '짐코딩';
console.log(teacher);
teacher = '김재은';
console.log(teacher);

//let teacher = '김재영';//같은 이름의 변수 선언 못함

const username = '리바트레트';
console.log(username);
//username = '변경';//상수는 변경 못함

//블록안에 선언된 변수는 블록안에서만 사용 가능
{
  let a = '변수'; //이변수는 자식 블록에서도 사용 가능
  console.log('a:', a);
  {
    let a = '변수2'; //블록이 다른곳에서는 같은 이름으로 다시선언 가능
    let c = 'c변수';
    //console.log('c:', c);
    console.log('c블록 안의 a:', a);
  }
  //console.log('c:', c);
}
//console.log('a:', a);

function sum(a, b) {
  let result = a + b;
  return result;
  console.log('result: ', result);
}

//var의 문제점: 선언 전에도 사용가능, 여러번 선언 가능
//블록안에서 선언 한걸 밖에서도 사용가능
{
  //console.log(number);
  var number = 2;
  var number = 3;
}
console.log(number);

//호이스팅(hoisting)
//코드가 실행되기전 변수나 함수의 선언이 자바스크립트 파일의 최 상단으로 끌어 올려지는것.
//var로 선언한 변수랑 함수만 호이스팅이 발생
console.log(sum(3, 2));
function sum(num1, num2) {
  return num1 + num2;
}
//console.log(sum(4, 2));

//Strict Mode : 암시적 전역 변수와 묵인 했던 여러가지 이상한 문법을 허용 안함
//파일 최상단에 'use strict' 선언하기

number55 = 55;
console.log(number55);
