"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnShow = document.querySelectorAll(".show-modal");
// Open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// For all btn
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener("click", openModal);
}

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// for (let i = 0; i < btnShow.length; i++) {
//   btnShow[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }

// btnClose.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
