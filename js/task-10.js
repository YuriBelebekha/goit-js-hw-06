function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  inputBoxesAmount: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.inputBoxesAmount.addEventListener('input', getBoxesAmount);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

let boxWidth = 20;
let boxHeight = 20;
let boxMargin = 10; 

function getBoxesAmount(event) {
  refs.inputBoxesAmount.setAttribute("amount", Number(event.currentTarget.value));  
};

function createBoxes () {
  let amountBoxes = Number(refs.inputBoxesAmount.getAttribute("amount"));
  
  for (let i = 0; i < amountBoxes; i += 1) {
    boxWidth += 10;
    boxHeight += 10;    
    const box = document.createElement("div");          
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;    
    box.style.margin = `${boxMargin}px`;
    box.classList.add("box");
    box.style.background = getRandomHexColor();    
    refs.boxes.append(box);
  }

  refs.inputBoxesAmount.value = '';
};

function destroyBoxes(event) {  
  boxWidth = 20;
  boxHeight = 20;
  refs.boxes.textContent = '';
}