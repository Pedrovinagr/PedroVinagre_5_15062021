document.addEventListener("DOMContentLoaded", function() {
    console.log(recipes);

    let ingredientsArray = [];
    createIngredientsList(ingredientsArray);
    console.log("Liste des ingredients");
    console.log(ingredientsArray);

    let applianceArray = [];
    createAppliancesList(applianceArray);
    // console.log("Liste des appareils");
    // console.log(applianceArray);

    let ustensilsArray = [];
    createUstensilesList(ustensilsArray);
    // console.log("Liste des ustensiles");
    // console.log(ustensilsArray);

    // Ajout tableau dans le filtre ingrédients
    let ingredientFilter = document.getElementById('ingredients_list');
    var ingredientListHtml = document.createElement('ul');

    for(var i = 0; i < ingredientsArray.length - 1; i++) {
        var ingredientItemHtml = document.createElement('li');
        ingredientItemHtml.textContent = ingredientsArray[i];
        ingredientItemHtml.classList = "ingredients";
        ingredientListHtml.appendChild(ingredientItemHtml);
    }

    ingredientFilter.appendChild(ingredientListHtml);

    // // Ajout tableau dans le filtre appareils
    // let applianceFilter = document.getElementById('appareils_list');
    // var applianceListHtml = document.createElement('ul');

    // for(var i = 0; i < applianceArray.length - 1; i++) {
    //     var applianceItemHtml = document.createElement('li');
    //     applianceItemHtml.textContent = applianceArray[i];
    //     applianceItemHtml.classList = "appareils";
    //     applianceListHtml.appendChild(applianceItemHtml);
    // }

    // applianceFilter.appendChild(applianceListHtml);

    // // Ajout tableau dans le filtre ustensiles
    // let ustensilsFilter = document.getElementById('ustensiles_list');
    // var ustensilsListHtml = document.createElement('ul');

    // for(var i = 0; i < ustensilsArray.length - 1; i++) {
    //     var ustensilsItemHtml = document.createElement('li');
    //     ustensilsItemHtml.textContent = ustensilsArray[i];
    //     ustensilsItemHtml.classList = "ustensiles";
    //     ustensilsListHtml.appendChild(ustensilsItemHtml);
    // }

    // ustensilsFilter.appendChild(ustensilsListHtml);

    // boucle de la barre de recherche
    let searchBarInput = document.getElementById("searchbar");
    searchBarInput.addEventListener("change", function(event) {
        let searchText = event.target.value;
        if(searchText !== "") {
            if(ingredientsArray.indexOf(searchText) > -1) {
                let indexOfIngredients = ingredientsArray.indexOf(searchText);
                let ingredient = ingredientsArray[indexOfIngredients];
                let recipesToShow = searchRecipeFromIngredients(ingredient);
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
    let recipeBlock = document.getElementById("recipes");
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

// barre de recherche filtre ingredient
let searchFilterIngredient = document.getElementById('search_ingredients');
let searchingIngredients = [];

searchFilterIngredient.addEventListener('change',function(event) {
    let searchTextIngredient = event.target.value;
    if(searchTextIngredient !==""){
        if(searchTextIngredient > 3){
            let searchValueIngredient = searchTextIngredient.toLowerCase();
            
            if(searchValueIngredient.indexOf(" ") != -1) {
                let searchArrayIngredient = searchValueIngredient.split(" ");
                for(var i = 0; i < searchArrayIngredient.length; i++) {
                    let wordIngredient = searchArrayIngredient[i];
                    console.log(wordIngredient)
                    
                    if(wordIngredient.length > 2) {
                        for(var j = 0; j < ingredientsArray.length - 1; j++) {
                            let ingredientOfSearch = ingredientsArray[j].toLowerCase();
                            if(ingredientOfSearch.indexOf(" ") != -1) {
                                var ingredientWords = ingredientOfSearch.split(" ");
                                for(var k = 0; k < ingredientWords.length; k++) {
                                    let ingredientWord = ingredientWords[k];
                                    if(ingredientWord === wordIngredient) {
                                        searchingIngredients.push(j);
                                    }
                                }
                            }
                            else {
                                if(ingredientOfSearch === wordIngredient) {
                                    searchingIngredients.push(j);
                                }
                            }
                        }
                    }
                }

                console.log('recherche filtre ingredient :');
                console.log(searchingIngredients);

                var searchResultFilterIngredient = [];
                for(var i = 0; i < searchingIngredients.length -1; i++) {
                    let researchIngredientIndex = searchingIngredients[i];
                    let ingredientFromFilter = ingredientsArray[researchIngredientIndex];
                    if(searchResultFilterIngredient.length > 0) {
                        for(var j = 0; j < searchResultFilterIngredient.length -1; j++) {
                            if(!searchResultFilterIngredient.includes(createIngredientsList(ingredientFromFilter)));
                            searchResultFilterIngredient.push(createIngredientsList(ingredientFromFilter));
                        }
                    } else {
                    searchResultFilterIngredient.push(createIngredientsList(ingredientFromFilter));
                    }
                } 
            console.log('resultat de la recherche du filtre :')
            console.log(searchResultFilterIngredient)

            }
        }
    }
});