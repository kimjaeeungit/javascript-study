let h2 = document.querySelector('h2');
h2.dataset.test = 'Bye javascript';

let img = document.querySelector('img'); //이미지 태그 가져오기
let liList = document.querySelectorAll('li'); //li 모든 요소 가져오기
let selectedItem = document.querySelector('.selected-item'); //사진위에 h2
//li에 이벤트 넣기
liList[0].addEventListener('click', selectItem);
//   function (event) {
//   //console.log(event.target.dataset.img);
//   img.setAttribute('src', event.target.dataset.img);
//   selectedItem.textContent = event.target.textContent;
// });
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  img.setAttribute('src', event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
}
