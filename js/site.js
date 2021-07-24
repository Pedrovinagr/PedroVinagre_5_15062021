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

    let searchBarInput = document.getElementById("searchbar");
    searchBarInput.addEventListener("change", function(event) {
        let searchText = event.target.value;
        if(searchText !== "") {
            if(ingredientsArray.indexOf(searchText) > -1) {
                let indexOfIngredients = ingredientsArray.indexOf(searchText);
                let ingredient = ingredientsArray[indexOfIngredients];
                console.log("Ingredients visible dans notre tableau");
                console.log(ingredient);
                console.log("Recettes avec cet ingredient :");
                let recipesToShow = searchRecipeFromIngredients(ingredient);
                console.log(recipesToShow);
                showRecipes(recipesToShow);
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

function searchRecipeFromIngredients(ingredient) {
    let recipesResult = [];
    for(var i = 0; i < recipes.length; i++) {
        let ingredientList = recipes[i].ingredients;
        for(var j = 0; j < ingredientList.length; j++) {
            let ingredientInsideList = ingredientList[j].ingredient;
            if(ingredientInsideList === ingredient) {
                recipesResult.push(recipes[i]);
            }
        }
    }
    return recipesResult;
}

function showRecipes(recipeArray) {
    let recipeBlock = document.getElementById("recettes-list");
    let recipesCard = '';
    for(var i = 0; i < recipeArray.length; i++) {
        let recipe = recipeArray[i];
        recipesCard += '<div class="card"><img src="./img/logo.png" class="card-img-top" alt="Placeholder Image"><div class="card-body"><div class="row"><div class="col"><h3>' + recipe.name + '</h3></div><div class="col"><i class="far fa-clock"></i> ' + recipe.time + 'min</div></div><div class="row"><div class="col">' + createListOfIngredients(recipe.ingredients) + '</div><div class="col"><p>' + recipe.description + '</p></div></div></div></div>';
    }
    recipeBlock.innerHTML = recipesCard;
}

function createListOfIngredients(ingredientFromRecipe) {
    let recipeString = '<ul class="list-unstyled">';
    for(var i = 0; i < ingredientFromRecipe.length; i++) {
        let ingredientInsideRecipe = ingredientFromRecipe[i];

        let ingredientQuantity;
        if(ingredientInsideRecipe.quantity) {
            ingredientQuantity = ingredientInsideRecipe.quantity;
        } else if(ingredientInsideRecipe.quantite) {
            ingredientQuantity = ingredientInsideRecipe.quantite;
        } else {
            ingredientQuantity = '';
        }


        let ingredientUnit;
        if(ingredientInsideRecipe.unit) {
            ingredientUnit = ingredientInsideRecipe.unit;
        } else {
            ingredientUnit = '';
        }

        let ingredientString = '<li><strong>' + ingredientInsideRecipe.ingredient + '</strong> '+ ingredientQuantity + '  ' + ingredientUnit + '</li>';
        recipeString += ingredientString;
    }
    recipeString += '</ul>';
    return recipeString;
}

// let ingredientsArray = [];
// let applianceArray = [];
// let ustensilsArray = [];

// document.addEventListener("DOMContentLoaded", function() {
//     console.log(recipes);

//     let ingredientsArray = [];
//     createIngredientsList(ingredientsArray);
//     console.log("Liste des ingredients");
//     console.log(ingredientsArray);

//     let applianceArray = [];
//     createAppliancesList(applianceArray);
//     console.log("Liste des appareils");
//     console.log(applianceArray);

//     let ustensilsArray = [];
//     createUstensilesList(ustensilsArray);
//     console.log("Liste des ustensiles");
//     console.log(ustensilsArray);

//     let ingredientFilter = document.getElementById('ingredients_list');
//     var ingredientListHtml = document.createElement('ul');

//     console.log('valeur li')
//     console.log(ingredientListHtml)

//     for(var i = 0; i < ingredientsArray.lenght - 1; i++) {
//         var ingredientItemHtml = document.createElement('li');
//         ingredientItemHtml.textContent = ingredientsArray[i];
//         ingredientItemHtml.classList = "ingredients";
//         ingredientListHtml.appendChild(ingredientItemHtml);
//     }

//     ingredientFilter.appendChild(ingredientListHtml);

//     console.log('filtre ingredient')
//     console.log(ingredientItemHtml)

//     let searchFilterIngredients = document.getElementById('search_ingredients');
//     searchFilterIngredients.addEventListener('change', function(event){
//         let searchIngredient = event.target.value;
//         if(searchIngredient !==""){
//             if(ingredientsArray.indexOf(searchIngredient) > -1){
//                 let indexFilterIngredients = ingredientsArray.indexOf(searchIngredient);
//                 let filterIngredient = ingredientsArray[indexFilterIngredients];
//                 console.log('Ingredient visible dans le filtre ingredients');
//                 console.log(filterIngredient);
//                 console.log('Liste des ingredients dans le filtre');
//                 let ingredientToFilter = searchIngredientsFromFilter(filterIngredient);
//                 console.log(ingredientToFilter);
//                 ingredientfilter(ingredientToFilter);
//             }
//         }
//     });
// });

// function createIngredientsList(ingredientArrayToAgregate) {
//     for(var i = 0; i < recipes.length; i++) {
//         let ingredientList = recipes[i].ingredients;
//         for(var j = 0; j < ingredientList.length; j++) {
//             let ingredient = ingredientList[j].ingredient;
//             if(!ingredientArrayToAgregate.includes(ingredient)) {
//                 ingredientArrayToAgregate.push(ingredient);
//             }
//         }
//     }
    
// }

// function createAppliancesList(applianceToAggregate) {
//     for(var i = 0; i < recipes.length; i++) {
//         let appliance = recipes[i].appliance;
//         if(!applianceToAggregate.includes(appliance)) {
//             applianceToAggregate.push(appliance);
//         }
//     }
// }

// function createUstensilesList(ustensilsListToAggregate) {
//     for(var i = 0; i < recipes.length; i++) {
//         let ustensilsList = recipes[i].ustensils;
//         for(var j = 0; j < ustensilsList.length; j++) {
//             let ustensil = ustensilsList[j];
//             if(!ustensilsListToAggregate.includes(ustensil)) {
//                 ustensilsListToAggregate.push(ustensil);
//             }
//         }
//     }
// }

// function searchIngredientsFromFilter(ingredient) {
//     let filterResult = [];
//     for(var i = 0; i < recipes.lenght; i++) {
//         let listfilter = recipes[i].ingredients;
//         for(var j = 0; j < listfilter.lenght; j++) {
//             let ingredientList = listfilter[j].ingredient;
//             if(ingredientList === ingredient) {
//                 filterResult.push(recipes[i]);
//             }
//         }
//     }
//     return filterResult;
// }

// function ingredientfilter(recipeArray) {
//     let filterBlock = document.getElementById('ingredients_list');
//     let filterlistIngredient = '';
//     for(var i = 0; i < recipeArray.lenght; i++) {
//         let filterList = recipeArray[i];
//         filterlistIngredient += '<li class="ingredients">' + filterList.ingredient + '</li>';
//     }
//     filterBlock.innerHTML = filterlistIngredient;
// }

// function listDataIngredients(ingredient) {
//     let dataIngredient = []

//     console.log('list filtre ingredient')
//     console.log(dataIngredient)
// }