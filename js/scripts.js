//Utility Logic
const newOrder = new Order();

//Business Logic for Order Object
function Order(){
this.pizzas = [];
this.total = 0;
}

Order.prototype.addToOrder = function(pizza) {
  this.pizzas.push(pizza);
  pizza.findCost(pizza);
  this.total += pizza.cost;
}

//Business Logic for Pizza Object
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

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
window.addEventListener("load", function(){
  const pizzaForm = document.getElementById('orderForm');
  pizzaForm.addEventListener("submit", createPizzaOrder);
});

function formPizzaToppings() {
  toppingArray = [];
  const tops = document.querySelectorAll("input[name='toppings']:checked");
  tops.forEach(topping => {
    toppingArray.push(topping.value);
  });
  return toppingArray;
}

function formPizzaSize() {
  const size = document.querySelector("input[name='size']:checked").value;
  return size;
}

function createPizzaOrder(e) {
  e.preventDefault();

  let newPizza = new Pizza(formPizzaToppings(), formPizzaSize());
  newOrder.addToOrder(newPizza);
  
  displayOrder(newOrder);

  document.getElementById('orderForm').reset(); //resets form after submit
  
}

function displayOrder(order){
  
}

