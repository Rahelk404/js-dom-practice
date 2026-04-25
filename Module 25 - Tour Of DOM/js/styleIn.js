 const sections = document.querySelectorAll('section');
 
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const palcesContainer = document.getElementById('places-container');
// palcesContainer.style.backgroundColor= 'yellow';

const palcesContainer = document.getElementById('places-container');
palcesContainer.classList.add('text-center');
palcesContainer.classList.remove('large-text');


// const fruitsTitle = document.getElementById('fruits-title');
// fruitsTitle.setAttribute('fruitsTitle', 'tooltip by javaScript');