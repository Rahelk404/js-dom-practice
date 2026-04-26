console.log('Hello');
console.log(document);
console.dir(document.URL);

// const title = document.getElementById('title');
// title.innerText = 'My JS Power';
// title.style.color = 'red';
// console.log(title.innerText);

/* //* Query Selector */
// const title2 = document.querySelector('#title')
// title2.textContent = 'I am done by selector';
// console.log(title2);

// const title2 = document.querySelector('li')
// title2.textContent = 'I am done by selector';
// console.log(title2);

// const title2 = document.querySelector('p')
// title2.textContent = 'I am done by selector';
// console.log(title2);

//* Multiple Element By ClassName */
// const items = document.getElementsByClassName('li-item');

// const myArr = Array.from(items);
// console.log(myArr);

// for (let index = 0; index < items.length; index++) {
//     const element = items[index];
//     element.style.color = 'green';
//     element.innerText = 'Changed Li'
//     console.log(element);
    
// }

// console.log(items.length);

//* TagName */
// const items2 = document.getElementsByTagName('li');
// console.log(items2);

// for (const items of items2) {
//     console.log(items);
//     items.style.color = 'red';
//     items.style.fontSize = '3em'
// }

//* Query Selector All */

// const items3 = document.querySelectorAll('li');
// console.log(items3);

// const bodyName = document.querySelector('body');
// console.log(bodyName.children);
// console.log(bodyName.childNodes);

// const items = document.querySelector('ul');
// console.log(items.childNodes);
// console.log(items.children);

// const ul = document.getElementById('li-container');
// console.log(ul.parentElement);
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.previousElementSibling.nextElementSibling);

// const lists = document.getElementsByClassName('li-items');
// const ul = document.querySelector('ul');
// ul.innerHTML = '<p>Hello</p>';
// console.log(ul.textContent);



// document.querySelector('h2').removeAttribute('id');
// document.querySelector('h2').removeAttribute('class');
// document.querySelector('h2').setAttribute('class', 'second-heading');
// const attr = document.querySelector('h2').getAttribute('class')
// console.log(attr);

// const ul = document.querySelector('ul');
// const li = document.querySelector('li');
// li.innerText = 'added by js';
// ul.appendChild(li);
// console.log(ul);

// const h2 = document.querySelector("h2");
// console.log(h2);
//  h2.classList.add('common-class');


//* insertBefore  */
// const ul = document.querySelector('ul');
// const second = document.getElementById('second');

// const li = document.createElement('li');
// li.innerText = 'Hello';

// ul.insertBefore(li, second);


//* Remove Child */
// const ul = document.querySelector('ul');
// ul.remove();