// const secondList = document.getElementById('places-list');

// const li = document.createElement('li');
// li.innerText = 'sylhet';

// secondList.appendChild(li);



const main = document.getElementById('main-content');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Dynamic Hyper Text';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Dynamic Listed item';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Dynamic listed item';
ul.appendChild(li2);

section.appendChild(ul);

main.appendChild(section);


const section2 = document.createElement('section');
section2.innerHTML = `
    <h1> Dynamic HTML </h1>
    <ul>
    <li>Home </li>
    <li> House </li>
    <li> zerox</li>
    </ul>
`
main.appendChild(section2);

main.classList.add('main-container');
main.classList.remove('main-container');

console.log(main);