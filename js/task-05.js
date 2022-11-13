const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

const defaultSpanText = refs.nameOutput.textContent;

function onInputChange(event) {  
  if (event.currentTarget.value.trim() !== '') {
    return refs.nameOutput.textContent = event.currentTarget.value;
  }
  
  refs.nameOutput.textContent = defaultSpanText;
};