function Person(name, age, married) {
  this.name = name;
  this.age = age;
  this.isMarried = married;
  this.sayHello = function () {
    return "Hello " + this.name;
  };
}
let enes = new Person("Enes", 38, true);
let hasan = new Person("Hasan", 41, true);
delete hasan.age;
hasan.age = 41;
console.log(hasan.age);

function Car(brand, model, year, color) {
  (this.brand = brand),
    (this.model = model),
    (this.year = year),
    (this.color = color);
}
let glc = new Car("Mercedes", "GLC", 2020, "white");
let levante = new Car("Masserati", "Levante", 2021, "purple");
let defender = new Car("Land Rover", "Defender", 2014, "black");
