function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
};

const refs = {
  inputBoxesAmount: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.createBtn.addEventListener('click', getBoxesAmount);
refs.inputBoxesAmount.addEventListener('blur', getBoxesAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxWidth = 20;
  let boxHeight = 20;
  const boxes = [];

  for (let i = 1; i <= amount; i += 1) {  
    const box = {
      width:  `${boxWidth += 10}`,
      height: `${boxHeight += 10}`,
      margin: '10',
      backgroundColor: getRandomHexColor(),
    };
    boxes.push(box);  
  };

  const boxesMarkup = boxes
    .map((box) =>
      `<div class="box" style="width: ${box.width}px; height: ${box.height}px; 
      margin: ${box.margin}px; background-color: ${box.backgroundColor};">
      </div>`
    )
    .join('');

  refs.boxes.insertAdjacentHTML("beforeend", boxesMarkup);

  refs.inputBoxesAmount.value = '';
};

function getBoxesAmount(event) {
  event.preventDefault();  
  createBoxes(event.currentTarget.value);
};

function destroyBoxes(event) {
  event.preventDefault();  
  refs.boxes.textContent = '';  
}
