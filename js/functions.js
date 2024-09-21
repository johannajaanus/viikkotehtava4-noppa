'use strict'


document.querySelector('button').addEventListener('click', heitäNoppa);

function heitäNoppa() {

let satunnainen = Math.floor(Math.random()  *6) + 1;


 document.querySelector('#dice img').src = './img/'+ satunnainen + '.png';
}