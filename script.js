// let button = document.getElementById('openButton');
// let modal = document.getElementById('myModal');
// let close = document.getElementById('close');

// button.onclick = function () {
//     modal.style.display = "block";
// }
// close.onclick = function () {
//     modal.style.display = "none";
// }

let slides = ['./image/hamburger.jpeg', './image/burger2.jpeg', './image/burger3.jpeg'];
let index = 0;
document.getElementById('mainImg').src = slides[index];

setInterval(function () {
    if (index < slides.length) {
        document.getElementById("mainImg").src = slides[index];
        index++;
    } else {
        index = 0;
    }
}, 3000);
