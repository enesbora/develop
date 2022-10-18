function Recipe(title, serving, ingredients) {
    this.title = title,
    this.serving = serving,
    this.ingredients = ingredients,
    this.sayReady = function() {
        return `Hello your ${title} is ready`
    };
};

let menemen = new Recipe("Menemen", 2, ["tomato", "green pepper", "eggs", "salt", "black ground pepper"]);

console.log(menemen.title);
console.log(`Servings: ${menemen.serving}`);
console.log(`Ingredients: ${menemen.ingredients.toString()}`);
console.log(menemen.sayReady());