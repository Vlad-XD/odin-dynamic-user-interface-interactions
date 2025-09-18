import { createDropdown } from "./dropdownMenu.js";
import { createImageCarousel } from "./imageCarousel.js";

//variable declarations
const dropdownVisibilityClass = "hidden";
const dropdownColorPropertyName = "--dropdown-menu-text-color";
const carouselNavDotVisibilityClass = "dot-active";
const carouselTranslateFactorProperty = "--image-carousel-translate-factor";

// find DOM elements
const root = document.documentElement;
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownOptionsMenu = document.querySelector(".dropdown-options");
const dropdownOptionsList = document.querySelectorAll(".dropdown-options li");
const carouselTrack = document.querySelector(".carousel-track");
const carouselPrevBtn = document.querySelector(".nav-btn.left-nav-btn");
const carouselNextBtn = document.querySelector(".nav-btn.right-nav-btn");
const carouselNavDotsContainer = document.querySelector(".carousel-nav-dot-container");

// create dropdown menu
createDropdown(dropdownButton, dropdownOptionsMenu, dropdownOptionsList, dropdownVisibilityClass);

// create actions for drop down items 
dropdownOptionsList.forEach((item) => {
  item.addEventListener("click", () => {
    root.style.setProperty(dropdownColorPropertyName, item.textContent);
  })
})

// create dropdown menu
createImageCarousel(carouselPrevBtn, carouselNextBtn, carouselNavDotsContainer, carouselNavDotVisibilityClass, carouselTranslateFactorProperty, 5);