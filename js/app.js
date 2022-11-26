// add to card
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add");

for (let i = 0; i < addToCartBtns.length; i++) {
   addToCartBtns[i].addEventListener("click", function () {
      // productsCountEl.textContent = +productsCountEl.textContent + 1;
      +productsCountEl.textContent++;

   });
}

//modal
let moreDetailsBtns = document.querySelectorAll(".btn-more");
let modalWindowEl = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => {
   item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);

function openModal() {
   modal.classList.add("show");
   modal.classList.remove("hide");
}

function closeModal() {
   modal.classList.remove("show");
   modal.classList.add("hide");
}

modal.addEventListener("click", function (e) {
   if (e.target === modal) {
      closeModal();
   }
});