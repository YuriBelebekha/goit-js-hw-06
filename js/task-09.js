function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const bgColorHex = document.querySelector('.color');

btnRef.addEventListener('click', onClickChangeBodyColor);

function onClickChangeBodyColor () {
  const randomHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomHexColor;  
  bgColorHex.textContent = randomHexColor;  
}