document.addEventListener("DOMContentLoaded", function() {

    // CALL RECIPE FOR HTML
    showRecipes(recipes);

    removeTagIngredient();

    // RECIPE RESULT TO BE SHOWN
    var recipeResult = [];
    var recipeResultFilter = [];

    // BACIC DATA
    var recipeNameArray = [];
    concatenateNameRecipes(recipeNameArray);

    var descriptionArray = [];
    concatenateDescriptionRecipes(descriptionArray);

    var ingredientsArray = [];
    concatenateIngredientRecipes(ingredientsArray);
    showIngredients(ingredientsArray);

    let appliancesArray = [];
    concatenateApplianceRecipes(appliancesArray);
    showAppliance(appliancesArray);

    let ustensilsArray = [];
    concatenateUstensilRecipes(ustensilsArray);
    showUstensils(ustensilsArray);

    // DATA FILTER
    var filterIngredientsResultArray = [];
    var filterAppliancesResultArray = [];
    var filterUstensilsResultArray = [];

    // VARIOUS DATA
    // removeIngredientSelectedTag(ingredientsArray);
    // var ingredientArrayShown = ingredientsArray;
    // var ingredientTagShown = collectValueTagIngredient;
    // console.log("tag ingredient visible : " + ingredientTagShown);

    // SEARCH BAR ALGORITHM
    const centralSearchBar = document.getElementById('searchbar');

    var searchResultArrayFromIngredient = [];
    var resultForsearchIngredient = [];

    var searchResultArrayFromNameRecipe = [];
    var resultForSearchName = [];

    var searchResultArrayFromDescriptionRecipe = [];
    var resultForSearchDescription = [];

    centralSearchBar.addEventListener('change', function(event) {
        // RESET RECIPE RESULT ARRAY TO CLEAR FOR HTML
        recipeResult = [];

        var researchValue = event.target.value;
        var cleanValue = researchValue.toLowerCase();

        // SEARCH WORD VALUE
        if(cleanValue.length >= 3){
            if(cleanValue.indexOf("") != -1) {
                let searchArray = cleanValue.split(" ");
                for (var i = 0; i < searchArray.length; i++) {
                    let searchWord = searchArray[i];

                    // SEARCH DATA IN THE VALUE INGREDIENT RECIPE
                    if(searchWord.length > 2) {
                        for (var j = 0; j < ingredientsArray.length -1; j++) {
                            let ingredientList = ingredientsArray[j].toLowerCase();
                            if(ingredientList.indexOf("") != -1) {
                                let wordIngredientList = ingredientList.split(" ");
                                for (var K = 0; K < wordIngredientList.length; K++) {
                                    let ingredientWord = wordIngredientList[K];
                                    if(ingredientWord === searchWord) {
                                        resultForsearchIngredient.push(j);
                                    }
                                }
                            }
                            else { 
                                if(ingredientList === searchWord) {
                                resultForsearchIngredient.push(j);
                                }
                            }
                        }

                        // RESULT BETWEEN RESEARCH AND DATA
                        for (var i = 0; i < resultForsearchIngredient.length; i++) {
                            let indexForResultSearchIngredient = resultForsearchIngredient[i];
                            let ingredientByIndex = ingredientsArray[indexForResultSearchIngredient];
                            searchResultArrayFromIngredient.push(ingredientByIndex);                 
                        }
                    }

                    // SEARCH DATA IN THE VALUE NAME RECIPE
                    if(searchWord.length > 2) {
                        for (var l = 0; l < recipeNameArray.length; l++) {
                            let nameList = recipeNameArray[l].toLowerCase();
                            if(nameList.indexOf("") != -1) {
                                let wordNameList = nameList.split(" ");
                                for (var m = 0; m < wordNameList.length; m++) {
                                    let nameWord = wordNameList[m];
                                    if(nameWord === searchWord) {
                                        resultForSearchName.push(l);
                                    }
                                }
                            }
                            else { if(nameList === searchWord) {
                                resultForSearchName.push(l);
                                }
                            }
                        }

                        // RESULT BETWEEN RESEARCH AND DATA
                        for (var i = 0; i < resultForSearchName.length; i++) {
                            let indexForResultSearchName = resultForSearchName[i];
                            let nameRecipeByIndex = recipeNameArray[indexForResultSearchName];
                            searchResultArrayFromNameRecipe.push(nameRecipeByIndex);
                        }
                    }

                    // SEARCH DATA IN THE VALUE DESCRIPTION RECIPE
                    if(searchWord.length > 2) {
                        for (var n = 0; n < descriptionArray.length; n++) {
                            let descriptionList = descriptionArray[n].toLowerCase();
                            if(descriptionList.indexOf("") != -1) {
                                let wordDescriptionList = descriptionList.split(" ");
                                for (var o = 0; o < wordDescriptionList.length; o++) {
                                    let descriptionWord = wordDescriptionList[o];
                                    if(descriptionWord === searchWord) {
                                        resultForSearchDescription.push(n);
                                    }
                                }
                            }
                            else { if(descriptionList === searchWord) {
                                resultForSearchDescription.push(n);
                                }
                            }
                        }

                        // RESULT BETWEEN RESEARCH AND DATA
                        for (var i = 0; i < resultForSearchDescription.length; i++) {
                            let indexForResultSearchDescription = resultForSearchDescription[i];
                            let descriptionRecipeByIndex = descriptionArray[indexForResultSearchDescription];
                            searchResultArrayFromDescriptionRecipe.push(descriptionRecipeByIndex);
                        }
                    }
                }
            }
        }

        // SEARCH INSIDE ALL RECIPES
        for(var i = 0; i < recipes.length - 1; i++) {
            var recipe = recipes[i];
            var ingredientsInRecipe = recipe.ingredients;
            var nameInRecipe = recipe.name;
            var descriptionInRecipe = recipe.description;

            for(var j = 0; j < searchResultArrayFromIngredient.length; j++) {
                var resultSearchIngredient = searchResultArrayFromIngredient[j];
                for(var k = 0; k < ingredientsInRecipe.length; k++) {
                    var ingredientInRecipe = ingredientsInRecipe[k];
                    if(ingredientInRecipe.ingredient == resultSearchIngredient) {
                        if(!recipeResult.includes(recipe)) {
                            recipeResult.push(recipe);
                        }
                    }
                }
            }

            for (var j = 0; j < searchResultArrayFromNameRecipe.length; j++) {
                var resultSearchNameRecipe = searchResultArrayFromNameRecipe[j];
                if (resultSearchNameRecipe == nameInRecipe) {
                    if (!recipeResult.includes(recipe)) {
                        recipeResult.push(recipe);
                    }
                }
            }

            for (var j = 0; j < searchResultArrayFromDescriptionRecipe.length; j++) {
                var resultSearchDescriptionRecipe = searchResultArrayFromDescriptionRecipe[j];
                if (resultSearchDescriptionRecipe == descriptionInRecipe) {
                    if (!recipeResult.includes(recipe)) {
                        recipeResult.push(recipe);
                    }
                }
            }
        }

        if(recipeResult.length > 0) {
            showRecipes(recipeResult);
        } else {
            showRecipes(recipes);
        }

        // EXPORT SEARCH DATA TO CREATE FILTERS

        // FILTER INGREDIENT
        for(var i = 0; i < recipeResult.length; i++) {
            var dataFilterIngredients = recipeResult[i].ingredients;
            for (var j = 0; j < dataFilterIngredients.length; j++) {
                var dataFilterIngredient = dataFilterIngredients[j].ingredient;
                if(!filterIngredientsResultArray.includes(dataFilterIngredient)) {
                    filterIngredientsResultArray.push(dataFilterIngredient);
                }
            }
        }

        // FILTER APPLIANCE
        for (var i = 0; i < recipeResult.length; i++) {
            var dataFilterAppliances = recipeResult[i].appliance;
            if(!filterAppliancesResultArray.includes(dataFilterAppliances)) {
                filterAppliancesResultArray.push(dataFilterAppliances);
            }
        }

        // FILTER USTENSIL
        for (var i = 0; i < recipeResult.length; i++) {
            var dataUstensils = recipeResult[i].ustensils;
            for (var j = 0; j < dataUstensils.length; j++) {
                var dataFilterUstensils = dataUstensils[j];
                if(!filterUstensilsResultArray.includes(dataFilterUstensils)) {
                filterUstensilsResultArray.push(dataFilterUstensils);
                }
            }
        }

        // INSERT DATA INTO FILTERS
        showIngredients(filterIngredientsResultArray);
        // removeIngredientSelectedTag(filterIngredientsResultArray);
        // ingredientArrayShown = filterIngredientsResultArray;
        showAppliance(filterAppliancesResultArray);
        showUstensils(filterUstensilsResultArray);
    });

    // SEARCH FILTERS ALGORITHM
    const ingredientSearchBar = document.getElementById('search_ingredients');
    const applianceSearchBar = document.getElementById('search_appareils');
    const ustensilSearchBar = document.getElementById('search_ustensiles')

    var searchResultArrayFromIngredientFilter = [];
    var resultForsearchIngredientInFilter = [];

    var searchResultArrayFromApplianceFilter = [];
    var resultForsearchApplianceInFilter = [];

    var searchResultArrayFromUstensilFilter = [];
    var resultForsearchUstensilInFilter = [];

    // SEARCH FILTER INGREDIENT
    ingredientSearchBar.addEventListener('change', function(event) {
        var valueresearchFilter = event.target.value;
        var cleanValueFilter = valueresearchFilter.toLowerCase();

        if(cleanValueFilter.length >= 3){
            if(cleanValueFilter.indexOf("") != -1) {
                let searchArrayFilter = cleanValueFilter.split(" ");
                for (var i = 0; i < searchArrayFilter.length; i++) {
                let searchWordFilter = searchArrayFilter[i];
                    if(searchWordFilter.length > 2) {
                        for (var j = 0; j < filterIngredientsResultArray.length; j++) {
                            let ingredientListFilter = filterIngredientsResultArray[j].toLowerCase();
                            if(ingredientListFilter.indexOf("") != -1) {
                                let wordIngredientListFilter = ingredientListFilter.split(" ");
                                for (var K = 0; K < wordIngredientListFilter.length; K++) {
                                    let ingredientWordInFilter = wordIngredientListFilter[K];
                                    if(ingredientWordInFilter === searchWordFilter) {
                                        resultForsearchIngredientInFilter.push(j);
                                    }
                                }
                            }
                            else { 
                                if(ingredientListFilter === searchWordFilter) {
                                resultForsearchIngredientInFilter.push(j);
                                }
                            }
                        }
                        for (var i = 0; i < resultForsearchIngredientInFilter.length; i++) {
                            let indexForResultSearchIngredientInFilter = resultForsearchIngredientInFilter[i];
                            let ingredientFilterByIndex = filterIngredientsResultArray[indexForResultSearchIngredientInFilter];
                            searchResultArrayFromIngredientFilter.push(ingredientFilterByIndex);                 
                        }
                        showIngredients(searchResultArrayFromIngredientFilter);
                        // removeIngredientSelectedTag(searchResultArrayFromIngredientFilter);
                        // ingredientArrayShown = searchResultArrayFromIngredientFilter;
                    }
                }
            }
        }
    });

    // SEARCH FILTER APPLIANCE
    applianceSearchBar.addEventListener('change', function(event) {
        var valueresearchFilter = event.target.value;
        var cleanValueFilter = valueresearchFilter.toLowerCase();

        if(cleanValueFilter.length >= 3){
            if(cleanValueFilter.indexOf("") != -1) {
                let searchArrayFilter = cleanValueFilter.split(" ");
                for (var i = 0; i < searchArrayFilter.length; i++) {
                let searchWordFilter = searchArrayFilter[i];
                    if(searchWordFilter.length > 2) {
                        for (var j = 0; j < filterAppliancesResultArray.length; j++) {
                            let applianceListFilter = filterAppliancesResultArray[j].toLowerCase();
                            if(applianceListFilter.indexOf("") != -1) {
                                let wordApplianceListFilter = applianceListFilter.split(" ");
                                for (var K = 0; K < wordApplianceListFilter.length; K++) {
                                    let applianceWordInFilter = wordApplianceListFilter[K];
                                    if(applianceWordInFilter === searchWordFilter) {
                                        resultForsearchApplianceInFilter.push(j);
                                    }
                                }
                            }
                            else { 
                                if(applianceListFilter === searchWordFilter) {
                                    resultForsearchApplianceInFilter.push(j);
                                }
                            }
                        }
                        for (var i = 0; i < resultForsearchApplianceInFilter.length; i++) {
                            let indexForResultSearchApplianceInFilter = resultForsearchApplianceInFilter[i];
                            let applianceFilterByIndex = filterAppliancesResultArray[indexForResultSearchApplianceInFilter];
                            searchResultArrayFromApplianceFilter.push(applianceFilterByIndex);                 
                        }
                        showAppliance(searchResultArrayFromApplianceFilter);

                    }
                }
            }
        }
    });

    // SEARCH FILTER USTENSIL
    ustensilSearchBar.addEventListener('change', function(event) {
        var valueresearchFilter = event.target.value;
        var cleanValueFilter = valueresearchFilter.toLowerCase();

        if(cleanValueFilter.length >= 3){
            if(cleanValueFilter.indexOf("") != -1) {
                let searchArrayFilter = cleanValueFilter.split(" ");
                for (var i = 0; i < searchArrayFilter.length; i++) {
                let searchWordFilter = searchArrayFilter[i];
                    if(searchWordFilter.length > 2) {
                        for (var j = 0; j < filterUstensilsResultArray.length; j++) {
                            let ustensilListFilter = filterUstensilsResultArray[j].toLowerCase();
                            if(ustensilListFilter.indexOf("") != -1) {
                                let wordUstensilListFilter = ustensilListFilter.split(" ");
                                for (var K = 0; K < wordUstensilListFilter.length; K++) {
                                    let ustensilWordInFilter = wordUstensilListFilter[K];
                                    if(ustensilWordInFilter === searchWordFilter) {
                                        resultForsearchUstensilInFilter.push(j);
                                    }
                                }
                            }
                            else { 
                                if(ustensilListFilter === searchWordFilter) {
                                    resultForsearchUstensilInFilter.push(j);
                                }
                            }
                        }
                        for (var i = 0; i < resultForsearchUstensilInFilter.length; i++) {
                            let indexForResultSearchUstensilInFilter = resultForsearchUstensilInFilter[i];
                            let ustensilFilterByIndex = filterUstensilsResultArray[indexForResultSearchUstensilInFilter];
                            searchResultArrayFromUstensilFilter.push(ustensilFilterByIndex);                 
                        }
                        showUstensils(searchResultArrayFromUstensilFilter);
                    }
                }
            }
        }
    });

    // SEARCH INSIDE ALL RECIPES
    // for(var i = 0; i < recipes.length - 1; i++) {
    //     var recipe = recipes[i];
    //     var ingredientsInRecipe = recipe.ingredients;
    //     var nameInRecipe = recipe.name;
    //     var descriptionInRecipe = recipe.description;

    //     for(var j = 0; j < searchResultArrayFromIngredient.length; j++) {
    //         var resultSearchIngredient = searchResultArrayFromIngredient[j];
    //         for(var k = 0; k < ingredientsInRecipe.length; k++) {
    //             var ingredientInRecipe = ingredientsInRecipe[k];
    //             if(ingredientInRecipe.ingredient == resultSearchIngredient) {
    //                 if(!recipeResult.includes(recipe)) {
    //                     recipeResult.push(recipe);
    //                 }
    //             }
    //         }
    //     }

    //     for (var j = 0; j < searchResultArrayFromNameRecipe.length; j++) {
    //         var resultSearchNameRecipe = searchResultArrayFromNameRecipe[j];
    //         if (resultSearchNameRecipe == nameInRecipe) {
    //             if (!recipeResult.includes(recipe)) {
    //                 recipeResult.push(recipe);
    //             }
    //         }
    //     }

    //     for (var j = 0; j < searchResultArrayFromDescriptionRecipe.length; j++) {
    //         var resultSearchDescriptionRecipe = searchResultArrayFromDescriptionRecipe[j];
    //         if (resultSearchDescriptionRecipe == descriptionInRecipe) {
    //             if (!recipeResult.includes(recipe)) {
    //                 recipeResult.push(recipe);
    //             }
    //         }
    //     }
    // }

    // if(recipeResult.length > 0) {
    //     showRecipes(recipeResult);
    // } else {
    //     showRecipes(recipes);
    // }
});