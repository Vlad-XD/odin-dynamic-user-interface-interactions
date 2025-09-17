/* createDropdown: takes a button element, menu element, and list of item elements
                   and implements dropdown menu functionality between
                   the elements using a class that determines visibility
*/

function createDropdown(
  btnElement,
  menuElement,
  menuItemList,
  visibilityClass
) {
  let isActive = false;

  btnElement.addEventListener("click", () => {
    if (!isActive) {
      menuElement.classList.remove(visibilityClass);
      isActive = true;
    } else {
      menuElement.classList.add(visibilityClass);
      isActive = false;
    }
  });

  btnElement.addEventListener("mouseenter", () => {
    if (!isActive) {
      menuElement.classList.remove(visibilityClass);
    }
  });

  btnElement.addEventListener("mouseleave", () => {
    if (!isActive) {
      menuElement.classList.add(visibilityClass);
    }
  });

  menuItemList.forEach((item) => {
    item.addEventListener("click", () => {
      menuElement.classList.add(visibilityClass);
      isActive = false;
    });

    item.addEventListener("mouseenter", () => {
      if (!isActive) {
        menuElement.classList.remove(visibilityClass);
      }
    });

    item.addEventListener("mouseleave", () => {
      if (!isActive) {
        menuElement.classList.add(visibilityClass);
      }
    });
  });
}

export { createDropdown };
