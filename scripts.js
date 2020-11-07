
const images = document.querySelectorAll('.img-btn img');
const btns = document.getElementsByTagName('button');
const noImage = document.querySelector('.no-image img');

let i = 0;

function changeImage () {
    noImage.src = images[i].src;
    i++;
    if(i > images.length-1) {
        i = 0;
    }
}  let int = setInterval(changeImage, 1000)

function pause (e) {
    noImage.src = e.target.src;
    clearInterval(int);
}
function resume () {
    int = setInterval(changeImage, 1000);
}

noImage.addEventListener('mouseover', pause);
noImage.addEventListener('mouseout', resume);

function chooseImage (e) {
    clearInterval(int);
    noImage.src = e.target.previousElementSibling.src;
    resume();
}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', chooseImage);
}


