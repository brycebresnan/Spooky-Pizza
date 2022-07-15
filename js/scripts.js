//Business Logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}









//UI Logic:

function gatherFormValues(e) {
  e.preventDefault();
  
  toppingArray = [];
  const tops = document.querySelectorAll("input[name='toppings']:checked");
  tops.forEach(topping => {
    toppingArray.push(topping.value);
  });

  const size = document.querySelector("input[name='size']:checked").value;
  
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.reset();

  let pizza = new Pizza(toppingArray, size);
  console.log(pizza);
}


window.addEventListener("load", function(){
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.addEventListener("submit", gatherFormValues);
});