// GLOBAL VARIABLE
var nameArray = [];
var descriptionArray = [];
var ingredientArray = [];
var applianceArray = [];
var ustensilArray = [];

for (let i = 0; i < recipes.length; i++) {
    var nameRecipe = recipes[i].name;
    nameArray.push(nameRecipe);

    var ingredientsRecipe = recipes[i].ingredients;
    for (var j = 0; j < ingredientsRecipe.length; j++) {
        var ingredientRecipe = ingredientsRecipe[j].ingredient;
        ingredientArray.push(ingredientRecipe); 
    }
    
    var descriptionRecipe = recipes[i].description;
    descriptionArray.push(descriptionRecipe);

    var applianceRecipe = recipes[i].appliance;
    applianceArray.push(applianceRecipe);

    var ustensilsRecipe = recipes[i].ustensils;
    for (var j = 0; j < ustensilsRecipe.length; j++) {
        var ustensilRecipe = ustensilsRecipe[j];
        ustensilArray.push(ustensilRecipe); 
    }
    
}
console.log(nameArray)
console.log(ingredientArray)
console.log(descriptionArray)
console.log(applianceArray)
console.log(ustensilArray)