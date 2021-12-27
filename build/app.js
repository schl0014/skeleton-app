class Animal {
    name;
    legs;
    sound;
    constructor(name, legs, sound) {
        this.name = name;
        this.legs = legs;
        this.sound = sound;
    }
    getName() {
        return this.name;
    }
    getLegs() {
        return this.legs;
    }
    getSound() {
        return this.sound;
    }
}
const animals = [
    new Animal('dog', 4, 'woof'),
    new Animal('cat', 4, 'meow'),
];
animals.forEach((animal) => console.log('A %s has %s legs and goes %s!', animal.getName(), animal.getLegs(), animal.getSound()));
const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
function sumAll(product) {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i];
        console.log(total);
    }
    console.log(product);
}
sumAll(productPrices);
//# sourceMappingURL=app.js.map