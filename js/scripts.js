//Business Logic











//UI Logic:

function gatherFormValues(e) {
  e.preventDefault();
  
  ingredArray = [];
  const ingredients = document.querySelectorAll("input[name='ingredients']:checked");
  ingredients.forEach(topping => {
    ingredArray.push(topping.value);
  });

  const size = document.querySelector("input[name='size']:checked").value;
  console.log(size);
  
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.reset();

  let pizza = new Pizza(ingredientArray, size);
  return pizza;
}


window.addEventListener("load", function(){
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.addEventListener("submit", gatherFormValues);
});