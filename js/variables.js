// GLOBAL VARIABLE
var nameArray = [];
var descriptionArray = [];
var ingredientsArray = [];
var ingredientArray = [];
var applianceArray = [];
var ustensilArray = [];
var timeArray = [];
var recipeResult = [];
var recipeResultFilter = [];
var inputDataOfSearchBar = [];
var resultOfResearch = [];
var resultOfResearchFilter = [];

var searchWord = "";



// SEARCH BAR ALGORITHM
const centralSearchBar = document.getElementById('searchbar');
const ingredientSearchBar = document.getElementById('search_ingredients');
const applianceSearchBar = document.getElementById('search_appareils');
const ustensilSearchBar = document.getElementById('search_ustensiles')

// FONCTION D'AFFICHAGE DES FILTRES
var chevronDown = document.querySelector('.fa-chevron-down');
var chevronUp = document.querySelector('.fa-chevron-up');

for (let i = 0; i < recipes.length; i++) {
    var nameRecipe = recipes[i].name;
    nameArray.push(nameRecipe);

    var ingredientsRecipe = recipes[i].ingredients;
    ingredientsArray.push(ingredientsRecipe);
    for (var j = 0; j < ingredientsRecipe.length; j++) {
        var ingredientRecipe = ingredientsRecipe[j].ingredient.toLowerCase();
        if(!ingredientArray.includes(ingredientRecipe)) {
            ingredientArray.push(ingredientRecipe);
        }
    }
    
    var descriptionRecipe = recipes[i].description;
    descriptionArray.push(descriptionRecipe);

    var applianceRecipe = recipes[i].appliance.toLowerCase();
    if(!applianceArray.includes(applianceRecipe)) {
        applianceArray.push(applianceRecipe);
    }

    var ustensilsRecipe = recipes[i].ustensils;
    for (var j = 0; j < ustensilsRecipe.length; j++) {
        var ustensilRecipe = ustensilsRecipe[j].toLowerCase();
        if(!ustensilArray.includes(ustensilRecipe)){
            ustensilArray.push(ustensilRecipe); 
        }  
    }

    var timeRecipe = recipes[i].time;
    timeArray.push(timeRecipe);
    
}
