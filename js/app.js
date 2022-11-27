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

// toggle like status

let likeBtns = document.querySelectorAll(".favorite");
likeBtns.forEach((item) => {
   item.addEventListener("click", function () {
      //    if(item.classList.contains("liked")) {
      //       item.classList.remove("liked");
      //    }else{
      //       item.classList.add("liked");
      //    }
      item.classList.toggle("liked");
   });
});

// function showModalByScroll() {
//    if (window.scrollY > document.body.scrollHeight / 2) {
//       openModal();
//       window.removeEventListener("scroll", showModalByScroll);
//    }
// }
// window.addEventListener("scroll", showModalByScroll);

// slider
$('.slider-block').slick({
   dots: true,
});

//quantum-satis
let decrementBtns = document.querySelectorAll(".decrement");
let incrementBtns = document.querySelectorAll(".increment");
let inputField = document.querySelectorAll(".quantum-satis input");

// incrementBtns.forEach((item, i) => {
//    item.addEventListener("click", function () {
//       let currentCount = +inputFields[i].value;
//       inputFields[i].value = currentCount + 1;
//    });
// });

// decrementBtns.forEach((item, i) => {
//    item.addEventListener("click", function () {
//       let currentCount = +inputFields[i].value;
//       if (currentCount === 0) {
//          inputFields[i].value = 0;
//       } else {
//          inputFields[i].value = currentCount - 1;
//       }

//    });
// });

function Counter(
   incrementBtns, 
   decrementBtns, 
   inputField, 
   minCount = 1, 
   maxCount = 10
   ){
   this.domRefs = {
      incrementBtns,
      decrementBtns,
      inputField,
   };
   this.toggleButtonState = function () {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtns.disabled = count <= minCount;
      this.domRefs.incrementBtns.disabled = count >= maxCount;
   };
   this.toggleButtonState();
   
   this.increment = function() {};

   this.decrement = function () {};

   // this.domRefs.incrementBtns.addEventListener()
}

let counter1 = new Counter(incrementBtns[0], decrementBtns[0], inputField[0]);