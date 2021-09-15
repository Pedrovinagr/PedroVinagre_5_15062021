// GLOBAL VARIABLE
var nameArray = [];
var descriptionArray = [];
var ingredientsArray = [];
var ingredientArray = [];
var applianceArray = [];
var ustensilArray = [];
var timeArray = [];

// FONCTION D'AFFICHAGE DES FILTRES
var chevronDown = document.querySelector('.fa-chevron-down');
var chevronUp = document.querySelector('.fa-chevron-up');

for (let i = 0; i < recipes.length; i++) {
    var nameRecipe = recipes[i].name;
    nameArray.push(nameRecipe);

    var ingredientsRecipe = recipes[i].ingredients;
    ingredientsArray.push(ingredientsRecipe);
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

    var timeRecipe = recipes[i].time;
    timeArray.push(timeRecipe);
    
}
