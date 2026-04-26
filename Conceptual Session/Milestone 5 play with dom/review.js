let serialCount = 1;


document.getElementById('btn-submit').addEventListener('click', function () {

    // const input = document.querySelector('textarea');
    // const inputValue = input.value;

    const input = document.querySelector('textarea').value;
    const container = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText = serialCount + '.' + input;

    container.appendChild(p);
    serialCount++;
    document.querySelector('textarea').value = '';
})


document.getElementById('text-area').addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {
        const input = document.querySelector('textarea').value;
        const container = document.getElementById('review');
        const p = document.createElement('p');
        p.innerText = serialCount + '.' + input;

        container.appendChild(p);
        serialCount++;
        document.querySelector('textarea').value = '';
    }
})