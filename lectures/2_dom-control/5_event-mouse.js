let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

//클릭했을때
rectangle.addEventListener('mousedown', function (event) {
  console.log('mousedown');
  //이요소의 크기와 위치를 알고 싶을때
  console.log(event.target.getBoundingClientRect());
});

//클릭했다 뗐을때
rectangle.addEventListener('mouseup', function () {
  console.log('mouseup');
});

//마우스 올렸을떄
rectangle.addEventListener('mouseenter', function () {
  console.log('mouseenter');
});

//올렸다가 떠났을떄
rectangle.addEventListener('mouseleave', function () {
  console.log('mouseleave');
});

//마우스가 움직일때
rectangle.addEventListener('mousemove', function () {
  console.log('mousemove');
});

//브라우저 화면기준 x,y축 좌표
//client: 브라우저 기준, page: 전체 페이지 기준
//스크롤이 있을떄 달라짐
rectangle.addEventListener('mousedown', function (event) {
  console.log('clientX: ', event.clientX, 'clientY: ', event.clientY);
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
});

//흰화면 클릭했을때 그지점에 빨간점 생기게
body.addEventListener('click', function (event) {
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  //div.style.left = event.pageX + 'px';
  //클릭한 곳이 원 가운데로 오게 하기
  div.style.left = event.pageX - 25 + 'px';
  div.style.top = event.pageY - 25 + 'px';
  body.appendChild(div);
});
