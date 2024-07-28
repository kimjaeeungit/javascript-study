//How to select HTML elements

//1] get method

/*
document.getElementById
Every HTML element can be assigned a unique ID.
You can find elements using getElementById.
*/
let title = document.getElementById('title');
console.log(title);
title.textContent = 'Working out';

/*
document.getElementsByClassName
You can find elements by their HTML class name.
*/
let items = document.getElementsByClassName('item');
console.log(items);
console.log('Squat :', items[0]);
console.log('Bench press :', items[1]);
console.log('Deadlift :', items[2]);

/*
document.getElementsByTagName
You can find elements by their HTML tag names.
*/
let liList = document.getElementsByTagName('li');
console.log(liList);

// 2] HTML element query

/*
document.querySelector
Methods for finding elements using CSS selectors
Returns the first element in the document that matches the specified selector. 
If no element matches, returns null.
*/
let h2 = document.querySelector('#title');
console.log('h2:', h2);
let item = document.querySelector('.item');
console.log('query item:', item);
/*
document.querySelectorAll
Returns a list of elements that match the specified selector.
*/
let itemAll = document.querySelectorAll('.item');
console.log('query itemAll:', itemAll);
console.log('query itemAll[0]:', itemAll[0]);
console.log('query itemAll[1]:', itemAll[1]);
console.log('query itemAll[2]:', itemAll[2]);

//Edit content
/*h2.textContent = '<span>Exercise</span>';
h2.innerHTML = '<span>Excercise@@</span>';

console.log(h2.textContent);
console.log(h2.innerHTML);

document.querySelector('body').innerHTML = '<strong>Exercise</strong>';
*/

//Changing attribute
let input = document.querySelector('input');
input.setAttribute('placeholder', 'Please enter your exercise!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

//Styling HTML elements
let helloItem = document.querySelector('.hello');
console.log('helloItem ', helloItem);
//helloItem.style.color = 'blue';
//helloItem.style.backgroundColor = 'pink';

helloItem.classList.add('dark');
helloItem.classList.add('one');
helloItem.classList.add('pink', 'yellow');
helloItem.classList.remove('dark');
