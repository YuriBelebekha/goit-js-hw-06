const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',  
];

ingredients.map((ingredient) => {
  const ingredientListRef = document.querySelector('#ingredients');
  const ingredientItemRef = document.createElement('li');
 
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;
  
  ingredientListRef.append(ingredientItemRef);
})