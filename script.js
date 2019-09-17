class Animal{
    run(){
        console.log('running');
    }
}

class Cat extends Animal{
    run(){
        super.run();
        console.log('jumping');
    }
}