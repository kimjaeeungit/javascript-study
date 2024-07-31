let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');
//키보드 이벤트
//키 눌렀을때
inputBox.addEventListener('keypress', function (event) {
  console.log('keypress');
});

//키 뗐을때
inputBox.addEventListener('keydown', function (event) {
  console.log('keydown');
});

//키 뗐을때
inputBox.addEventListener('keyup', function (event) {
  console.log('keyup');
});

//event.key 무슨 키를 눌렀는지 알려줌
//event.keyCode 누른 키를 숫자형태로 변환해줌
inputBox.addEventListener('keyup', function (event) {
  console.log('event.key: ', event.key);
  console.log('event.keyCode: ', event.keyCode);
});

//포커스 이밴트
//인풋박스에 포커스가 됬을때
inputBox.addEventListener('focus', function (event) {
  //alert('focus');
});
//포커스가 사라졌을때
inputBox.addEventListener('blur', function (event) {
  alert('blur');
});
//인풋태그의 밸류값이 변경됬을떄
inputBox.addEventListener('change', function (event) {
  console.log('change');
});

//폼 이벤트
img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/apple.jpg';
});
