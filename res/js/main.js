/*
score
cas
pohyb na kliknuti
pohyb v intervalu
*/

const point = document.getElementById("point");
const startButton = document.getElementById("startButton");
const timeInfo = document.getElementById("timeInfo");
let gameInterval;
let timeStart;

startButton.onclick = () => {
  hideElement(startButton);
  startGameInterval(point);
  setPointClick(point);
  timeStart = performance.now();
};

const movePoint = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const hideElement = (element) => {
  element.style.display = "none";
};

const startGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    movePoint(element, getRandomNumber(50, window.innerWidth - parseInt(element.style.width)), getRandomNumber(50, window.innerHeight - parseInt(element.style.height)));
    setSize(element, getRandomNumber(40, 80));
  }, 550);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  const setPointClick = (element) => {
    element.onclick = () => {
      element.innerText++;
      setSize(element, getRandomNumber(40, 80));
      movePoint(element, getRandomNumber(50, window.innerWidth- parseInt(element.style.width)), getRandomNumber(50, window.innerHeight - parseInt(element.style.height)));
      let timeEnd = performance.now();
      let result = timeEnd - timeStart;
      timeInfo.innerText = `Time: ${result}ms`;
      timeStart = performance.now();
    }
  }
  
  const setSize = (element, size) => {
        element.style.width = `${size}px` ;
        element.style.height = `${size}px`;
  }