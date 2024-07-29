//Event
let addBtn = document.getElementById('button'); //추가버튼
let addBeforeBtn = document.getElementById('before'); //앞에 추가버튼
let inputBox = document.querySelector('input'); //인풋 박스
let removeTargetBtn = document.querySelector('#target-remove'); //타깃제거버튼
let removeBtn = document.querySelector('.remove-btn'); //리스트마다 X표시 버튼

console.log(inputBox.value);

//추가버튼 클릭하면 밑에 리스트 생기게 하기
addBtn.addEventListener('click', function () {
  //alert('hello2');
  let li = document.createElement('li'); //엘리먼트를 생성
  let ul = document.querySelector('ul'); //넣고싶은 엘리먼트도 가져온다
  li.textContent = inputBox.value; //input box에 입력한 값 가져오기

  //X버튼 추가
  let button = document.createElement('button'); //클릭할떄마다 X 버튼 추가하기
  button.textContent = 'X'; //버튼 안에 X텍스트 넣기
  //button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn'); //생성된 X표시 버튼에 클레스 이름 넣기
  //버튼에 클릭 이벤트 넣기
  button.addEventListener('click', removeParentNode);
  //   function (event) {
  //   event.target.parentNode.remove(); //가져온 X버튼의 부모요소를 찾아 지우기 (li 통쨰로)
  // });
  //그후 여기다가 이렇게 넣어준다
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = ''; //추가하고 인풋박스 값 비워주기
  inputBox.focus(); //추하가고 자동으로 포커스 넣어서 바로 타이핑 할수 있게
});

//타겟li앞에 추가하기
addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li'); //엘리먼트를 생성
  let ul = document.querySelector('ul'); //넣고싶은 엘리먼트도 가져온다
  let targetLi = document.querySelector('li#target'); //li안에 target이라는 아이디
  li.textContent = inputBox.value; //input box 값 가져오기
  ul.insertBefore(li, targetLi); //넣고싶은 ul에 li를 targetLi앞에 넣기
});

//input box옆 타깃제거 박스 누르면 스쿼트 지워지게
removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target'); //li안에 target아이디 가져오기
  targetLi.remove();
});
//스쿼트 옆에 x박스 수동으로 만든거 누르면 지워지는 함수
removeBtn.addEventListener('click', removeParentNode);
//   , function (event) {
//   console.log(event.target.parentNode);
//   //이벤트 값 받아서 누른 버튼 정보 가져오고 그것의 부모요소 가져오기
//   event.target.parentNode.remove();
// });

//중복되는 쿼리 함수로 만들기
function removeParentNode(event) {
  event.target.parentNode.remove();
  //중복되는 함수
  inputBox.value = '';
  inputBox.focus();
}
