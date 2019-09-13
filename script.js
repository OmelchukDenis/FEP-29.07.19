function Animal(name){

    this.eat = function(){
        console.log(`${this.name} is eating`);
    }
}

Animal.prototype.name = 'NAME';
Animal.prototype.run = function(){
    console.log(`${this.name} is running`);
}


const dino = new Animal('Dinozaur');
const raptor = new Animal('Raptor');