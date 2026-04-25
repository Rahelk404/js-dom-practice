const main = document.getElementById('main-container');

const section = document.createElement('section');

section.innerHTML = `
    <h1>My dynamic secion </h1>
    <p> Extra text added inside paragraph </p>
        <ul>
         <li>Dynamic List</li>
         <li>Dynamic List</li>
         <li>Dynamic List</li>
         <li>Dynamic List</li>
         <li>Dynamic List</li>
         <li>Dynamic List</li>
        </ul>
`

main.appendChild(section);