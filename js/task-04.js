const counterValue = {
  value: 0,  
  decrement() { this.value -= 1 },
  increment() { this.value += 1 },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
