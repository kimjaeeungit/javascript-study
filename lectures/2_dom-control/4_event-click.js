let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);
// console.log(btn2);

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너');
};

//이거를 제일 많이 씀
btn2.addEventListener('click', addEvent1);
function addEvent1() {
  alert('addEventListener1');
}

// btn2.addEventListener('click', function () {
//   alert('addEventListener2');
// });

btn2.addEventListener('click', addEvent2);
function addEvent2() {
  alert('addEventListener2');
}

//이벤트 제거하기
btn2.removeEventListener('click', addEvent1);
btn2.removeEventListener('click', addEvent2);
