const listCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategoriesRef.length}`);

listCategoriesRef.forEach(function (category, index) {
  console.log('\n');
  console.log(`Category: ${listCategoriesRef[index].firstElementChild.textContent}`);
  console.log(`Elements: ${listCategoriesRef[index].lastElementChild.childElementCount}`);  
});