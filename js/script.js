document.addEventListener("DOMContentLoaded", function() {
    console.log(recipes);

    let ingredientsArray = [];
    createIngredientsList(ingredientsArray);
    console.log("Liste des ingredients");
    console.log(ingredientsArray);

    let applianceArray = [];
    createAppliancesList(applianceArray);
    console.log("Liste des appareils");
    console.log(applianceArray);

    let ustensilsArray = [];
    createUstensilesList(ustensilsArray);
    console.log("Liste des ustensiles");
    console.log(ustensilsArray);

    let 
});

function createIngredientsList(ingredientArrayToAgregate) {
    for(var i = 0; i < recipes.length; i++) {
        let ingredientList = recipes[i].ingredients;
        for(var j = 0; j < ingredientList.length; j++) {
            let ingredient = ingredientList[j].ingredient;
            if(!ingredientArrayToAgregate.includes(ingredient)) {
                ingredientArrayToAgregate.push(ingredient);
            }
            console.log('liste ingredients')
            console.log(ingredient)
        }
    }
}

function createAppliancesList(applianceToAggregate) {
    for(var i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance;
        if(!applianceToAggregate.includes(appliance)) {
            applianceToAggregate.push(appliance);
        }
    }
}

function createUstensilesList(ustensilsListToAggregate) {
    for(var i = 0; i < recipes.length; i++) {
        let ustensilsList = recipes[i].ustensils;
        for(var j = 0; j < ustensilsList.length; j++) {
            let ustensil = ustensilsList[j];
            if(!ustensilsListToAggregate.includes(ustensil)) {
                ustensilsListToAggregate.push(ustensil);
            }
        }
    }
}

function filterIngredients(ingredientArray) {
    let filterList = document.getElementById('ingredients_list')
}