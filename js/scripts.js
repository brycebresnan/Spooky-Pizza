//Business Logic for Order
function Order(){
this.pizzas = {};
this.total = 0;
}

Order.prototype.addToOrder(pizza){
  //adds pizza object order to pizza property
  //adds cost to total
}

//Business Logic for Pizza
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

//loops over toppings
Pizza.prototype.findCost(){
  
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
  return pizza;
}

function displayOrder(){

}

window.addEventListener("load", function(){
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.addEventListener("submit", gatherFormValues);
});