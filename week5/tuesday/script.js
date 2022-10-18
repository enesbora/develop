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

const Car = {
  name: "Volvo",
  km: 150.0,
  year: 2015,
  isPainted: true,
};
