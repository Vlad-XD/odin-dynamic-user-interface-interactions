/* createImageCarousel: takes several elements to produce an image carousel.
                        Additionally, takes an optional argument, establishing
                        a timeout to automatically advance the slide every
                        passed seconds.
*/

function createImageCarousel(prevBtn, nextBtn, navDotsContainer, dotVisibilityClass, carouselTranslateFactorProperty, timeout=false) {

  // constant declarations
  const TIMEOUT_COUNTDOWN = 5;
  // variable declarations
  const navCircularArray = new carouselNavArray(navDotsContainer, dotVisibilityClass, carouselTranslateFactorProperty);
  let timeoutCountdown = TIMEOUT_COUNTDOWN; // when timeoutCountdown reaches 0, the image carousel will begin to move by itself
  let timeoutCounter = timeout;             // used by carouselTimeout function to calculate when to move to next image

  prevBtn.addEventListener("click", () => {
    navCircularArray.prev();
    timeoutCountdown = TIMEOUT_COUNTDOWN;
    timeoutCounter = timeout;  
  })

  nextBtn.addEventListener("click", () => {
    navCircularArray.next();
    timeoutCountdown = TIMEOUT_COUNTDOWN;
    timeoutCounter = timeout;  
  })


  // add timeout functionality if argument provided
  if (timeout !== false) {
    // start the timedown function
    const carouselTimeout = (function () {
      
      setInterval(() => {
        if (timeoutCountdown > 0) {
          timeoutCountdown--;
        } else {
          if (timeoutCounter > 0) {
            timeoutCounter--;
          } else {
            navCircularArray.next();
            timeoutCounter = timeout;
          }
        }
      }, 1000);

    })();
  }

}

// helper class to create a circular array 
class circularArray {

  #iterator = 0; // #terator will be utilized to run through array
  #array; // holds array which will be made circular
  #maxIndex = 0; // holds the max index size of the passed array

  constructor(array) {
    this.#array = array;
    this.#maxIndex = array.length - 1;
  }

  // move to next index
  next() {
    (this.#iterator === this.#maxIndex) ? this.#iterator = 0 : this.#iterator++;
  }

  // move to previous index
  prev() {
    (this.#iterator === 0) ? this.#iterator = this.#maxIndex : this.#iterator--;
  }

  // return element of array where iterator is currently at
  getCurrentElement() {
    return this.#array[this.#iterator];
  }

  // return index where iterator is at
  getCurrentIndex(){
    return this.#iterator;
  }

} 

// helper class that extends the circular array class to control the navigation
// dots and current carousel image
class carouselNavArray extends circularArray {

    #dotVisibilityClass; // controls the appearance of the currently active nav dominant-baseline: 
    #carouselTranslateFactorProperty; // css property used to control current image shown by carousel
    #currentNavDot; // holds currently active navigation dot element
    #root = document.documentElement; // holds root element of document

  constructor(navDotsContainer, dotVisibilityClass, carouselTranslateFactorProperty) {
    const navDotsArray = Array.from(navDotsContainer.children);
    super(navDotsArray);
    this.#dotVisibilityClass = dotVisibilityClass;
    this.#carouselTranslateFactorProperty = carouselTranslateFactorProperty;
    this.#currentNavDot = navDotsArray[0];
  }

  // move to next image
  next() {
    this.#currentNavDot.classList.toggle(this.#dotVisibilityClass);
    super.next();
    this.#currentNavDot = this.getCurrentElement();
    this.#currentNavDot.classList.toggle(this.#dotVisibilityClass);
    this.#root.style.setProperty(this.#carouselTranslateFactorProperty, this.getCurrentIndex());
  }

  // move to previous image
  prev() {
    this.#currentNavDot.classList.toggle(this.#dotVisibilityClass);
    super.prev();
    this.#currentNavDot = this.getCurrentElement();
    this.#currentNavDot.classList.toggle(this.#dotVisibilityClass);
    this.#root.style.setProperty(this.#carouselTranslateFactorProperty, this.getCurrentIndex());
  }

}

export {createImageCarousel};