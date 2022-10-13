const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {  
  event.currentTarget.value.length == inputRef.dataset.length
    ? inputRef.classList.add('valid')   || inputRef.classList.remove('invalid')
    : inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
};