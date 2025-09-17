import { createDropdown } from "./dropdownMenu.js";

//variable declarations
const dropdownVisibilityClass = "hidden";
const dropdownColorPropertyName = "--dropdown-menu-text-color";

// find DOM elements
const root = document.documentElement;
const dropdownSectionHeading = document.querySelector(".dropdown-menu-heading");
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownOptionsMenu = document.querySelector(".dropdown-options");
const dropdownOptionsList = document.querySelectorAll(".dropdown-options li");

// create dropdown menu
createDropdown(dropdownButton, dropdownOptionsMenu, dropdownOptionsList, dropdownVisibilityClass);

// create actions for drop down items 
dropdownOptionsList.forEach((item) => {
  item.addEventListener("click", () => {
    root.style.setProperty(dropdownColorPropertyName, item.textContent);
  })
})