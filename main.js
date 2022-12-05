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

// Slider
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

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})