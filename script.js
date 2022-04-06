'use strict';
const row1 = document.querySelector('#row-1');
const row2 = document.querySelector('#row-2');
const row3 = document.querySelector('#row-3');
console.log(row1, row2, row3);

setTimeout(function () {
  row1.classList.remove('hidden');
}, 1000);

setTimeout(function () {
  row2.classList.remove('hidden');
}, 2000);

setTimeout(function () {
  row3.classList.remove('hidden');
}, 3000);
