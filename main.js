// sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// carousel

// const state = {};
// const carouselList = document.querySelector('.carouselList');
// const carouselItems = document.querySelectorAll('.carouselItem');
// const elems = Array.from(carouselItems);

// carouselList.addEventListener('click', function (event) {
//   var newActive = event.target;
//   var isItem = newActive.closest('.carouselItem');

//   if (!isItem || newActive.classList.contains('carouselItem_active')) {
//     return;
//   };
  
//   update(newActive);
// });

// const update = function(newActive) {
//   const newActivePos = newActive.dataset.pos;

//   const current = elems.find((elem) => elem.dataset.pos == 0);
//   const prev = elems.find((elem) => elem.dataset.pos == -1);
//   const next = elems.find((elem) => elem.dataset.pos == 1);
  
//   current.classList.remove('carouselItem_active');
  
//   [current, prev, next, first, last].forEach(item => {
//     var itemPos = item.dataset.pos;

//     item.dataset.pos = getPos(itemPos, newActivePos)
//   });
// };

// const getPos = function (current, active) {
//   const diff = current - active;

//   if (Math.abs(current - active) > 2) {
//     return -current
//   }

//   return diff;
// }



// // Get the cards and buttons from the DOM
// const cards = document.querySelectorAll('.card');
// const container = document.querySelector('.container');
// const leftButton = document.querySelector('#left-button');
// const rightButton = document.querySelector('#right-button');

// // Set the initial z-index and opacity of the cards
// cards.forEach((card, index) => {
//   card.style.zIndex = `${cards.length - index}`;
//   card.style.opacity = index === cards.length - 1 ? '1' : '0.5';
// });

// // Add a click event listener to the left button
// leftButton.addEventListener('click', () => {
//   // Shift all of the cards to the right
//   const shiftedCards = [...cards].shift();
//   cards.forEach((card, index) => {
//     card.style.zIndex = `${cards.length - index}`;
//     card.style.opacity = index === cards.length - 1 ? '1' : '0.5';
//   });
//   // Set the left-most card to be the right-most card
//   shiftedCards.style.zIndex = '1';
//   shiftedCards.style.opacity = '0.5';
//   shiftedCards.style.left = `${cards[cards.length - 1].offsetLeft + cards[cards.length - 1].offsetWidth}px`;
// });

// // Add a click event listener to the right button
// rightButton.addEventListener('click', () => {
//   // Shift all of the cards to the left
//   const shiftedCards = [...cards].pop();
//   cards.forEach((card, index) => {
//     card.style.zIndex = `${cards.length - index}`;
//     card.style.opacity = index === 0 ? '1' : '0.5';
//   });
//   // Set the right-most card to be the left-most card
//   shiftedCards.style.zIndex = '1';
//   shiftedCards.style.opacity = '0.5';
//   shiftedCards.style.left = `${cards[0].offsetLeft - cards[0].offsetWidth}px`;
// });


  // Get the elements
  var sliderContainer = document.querySelector(".slider-container");
  var slider = document.querySelector(".slider");
  var cards = document.querySelectorAll(".card");
  var leftBtn = document.querySelector(".left-btn");
  var rightBtn = document.querySelector(".right-btn");

  // Set the initial position of the slider
  var position = 0;
  slider.style.left = position;

  // Move the slider to the left
  function moveLeft() {
    position += cards[0].offsetWidth;
    if (position > 0) {
      position = -(cards.length - 1) * cards[0].offsetWidth;
    }
    slider.style.left = position + "px";
  }

  // Move the slider to the right
  function moveRight() {
    position -= cards[0].offsetWidth;
    if (position < -(cards.length - 1) * cards[0].offsetWidth) {
      position = 0;
    }
    slider.style.left = position + "px";
  }

  // Add click event listeners to the buttons
  leftBtn.addEventListener("click", moveLeft);
  rightBtn.addEventListener("click", moveRight);

