
const dotElements = document.querySelectorAll('.dots span');
const dotsContainer = document.getElementById('dots');
const imagesContainer = document.querySelector(".images");
const valueInput = document.getElementById('range');

let i = 1;
let int = setInterval(changeImage, valueInput.value);

function changeImage () {
    let redSpan = document.querySelector('.red');
    let showImage = document.querySelector('.show');
    if(redSpan) {
        redSpan.classList.remove('red'); 
    }
    
    if(showImage) {
        showImage.classList.remove('show');
    }

    dotElements[i].classList.add('red');
    imagesContainer.children[i].classList.add('show');

    i++;
    if(i > imagesContainer.children.length-1) {
        i = 0;
    }
}  

function pause () {
    clearInterval(int);
}

function resume () {
    int = setInterval(changeImage, valueInput.value);
}

function chooseImage(e) {
    if(e.target.tagName === "SPAN"){
        pause();
        i = +e.target.getAttribute('data-num');
        changeImage();
        resume();
    }    
}

function changeInput() {
    clearInterval(int);
    int = setInterval(changeImage, valueInput.value)
}

imagesContainer.addEventListener('mouseover', pause);
imagesContainer.addEventListener('mouseout', resume);
dotsContainer.addEventListener("click", chooseImage)
valueInput.addEventListener('change', changeInput);

