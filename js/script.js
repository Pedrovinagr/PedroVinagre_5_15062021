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

    let searchFilterIngredients = document.getElementById('search_ingredients');
    searchFilterIngredients.addEventListener('change', function(event){
        let searchIngredient = event.target.value;
        if(searchIngredient !==""){
            if(ingredientsArray.indexOf(searchIngredient) > -1){
                let indexFilterIngredients = ingredientsArray.indexOf(searchIngredient);
                let filterIngredient = ingredientsArray[indexFilterIngredients];
                console.log('Ingredient visible dans le filtre ingredients');
                console.log(filterIngredient);
                console.log('Liste des ingredients dans le filtre');
                let ingredientToFilter = searchIngredientsFromFilter(filterIngredient);
                console.log(ingredientToFilter);
                ingredientfilter(ingredientToFilter);
            }
        }
    });
});

function createIngredientsList(ingredientArrayToAgregate) {
    for(var i = 0; i < recipes.length; i++) {
        let ingredientList = recipes[i].ingredients;
        for(var j = 0; j < ingredientList.length; j++) {
            let ingredient = ingredientList[j].ingredient;
            if(!ingredientArrayToAgregate.includes(ingredient)) {
                ingredientArrayToAgregate.push(ingredient);
            }
            console.log('list ingredient')
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

function searchIngredientsFromFilter(ingredient) {
    let filterResult = [];
    for(var i = 0; i < recipes.lenght; i++) {
        let listfilter = recipes[i].ingredients;
        for(var j = 0; j < listfilter.lenght; j++) {
            let ingredientList = listfilter[j].ingredient;
            if(ingredientList === ingredient) {
                filterResult.push(recipes[i]);
            }
        }
    }
    return filterResult;
}

function ingredientfilter(recipeArray) {
    let filterBlock = document.getElementById('ingredients_list');
    let filterlistIngredient = '';
    for(var i = 0; i < recipeArray.lenght; i++) {
        let filterList = recipeArray[i];
        filterlistIngredient += '<li class="ingredients">' + filterList.ingredient + '</li>';
    }
    filterBlock.innerHTML = filterlistIngredient;
}

function listDataIngredients(ingredient) {
    let dataIngredient = []

    console.log('list filtre ingredient')
    console.log(dataIngredient)
}