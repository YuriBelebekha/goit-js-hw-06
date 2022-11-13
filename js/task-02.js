const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments', 
];

let ingredientListRef = document.querySelector('#ingredients');
const markupList = [];
 
ingredients.map((ingredient) => {
  let ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;
  ingredientItemRef.classList.add('item');
  
  markupList.push(ingredientItemRef);  
});

ingredientListRef.append(...markupList);