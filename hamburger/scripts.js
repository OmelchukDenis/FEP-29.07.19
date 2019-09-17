function Hamburger(size, filling) {
    this.size = size;
    this.filling = filling;
    this.toppings = [];
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
}

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40
}

Hamburger.TOPPING_SAUCE = {
    price: 15,
    calories: 0
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5
}

Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
}

Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5
}

Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10
}


Hamburger.prototype.calculateCalories = function() {
    let toppingCalories = this.toppings.reduce((sum, topping)=>{
        return sum + topping.calories;
    }, 0);
    
    return this.size.calories + this.filling.calories + toppingCalories;
}

Hamburger.prototype.calculatePrice = function() {
    let toppingPrice = this.toppings.reduce((sum, topping)=>{
        return sum + topping.price;
    }, 0);

    return this.size.price + this.filling.price + toppingPrice;
}

Hamburger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
}


// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());
// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());