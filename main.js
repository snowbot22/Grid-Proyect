/*
*VARIABLES
*/
let stampContainer = document.getElementById('stampContainer');
let stampButton = document.getElementById('stampButton');
let stampImageContainer= document.getElementById('stampImageContainer');

/*
* FUNCTIONS
*/
const getLoadingScreen = () =>{
    stampContainer.innerHTML = '';
    let figure = document.createElement('figure');
    figure.classList.add('container--stamp');
    stampContainer.appendChild(figure);
    let loading = document.createElement('img');
    loading.src = loadingCats[0].src;
    loading.alt = loadingCats[0].alt;
    loading.classList.add('loading');
    figure.appendChild(loading);
    let loadingText = document.createElement('p');
    loadingText.innerText = loadingCats[0].text;
    loadingText.classList.add('loadingText');
    stampContainer.append(loadingText);
}
const randomCat = () =>
{   
    //RANDOM NUMBER
    let randomNumber = Math.floor(Math.random() * cats.length);
    //PREVENT DUPLICATES    
    stampContainer.innerHTML = '';
    //CREATE IMAGE
    let stampImage = document.createElement('img');
    stampImage.src = cats[randomNumber].src;
    console.log(stampImage.src);
    stampImage.alt = cats[randomNumber].alt;
    stampImage.classList.add('stamp');
    stampContainer.append(stampImage);
}

const createCat = ()=>{
    getLoadingScreen();
    setTimeout(randomCat, 2000);
}

/*
* EVENTS
*/
stampButton.addEventListener('click', createCat);
