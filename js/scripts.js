//Business Logic for Order
function Order(){
this.pizzas = {};
this.total = 0;
}

Order.prototype.addToOrder = function(pizza) {
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
Pizza.prototype.findCost = function() {
  this.cost = 0;
  switch (this.size) {
    case ("small"):
      this.cost += 100;
      break;
    case ("med"):
      this.cost += 200;
      break;
    case ("large"):
      this.cost += 300;
      break;
  }

  // this.cost += (this.toppings.length * 5)

  this.toppings.forEach(topping => {
    if (topping !== "Beyond Blood (vegan)"){
      this.cost += 5;
    }
    else {
      this.cost += 10;
    }
  })

  return this.cost;
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