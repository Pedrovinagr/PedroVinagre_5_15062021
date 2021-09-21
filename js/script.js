// BACIC DATA
var ingredientArrayDisplayInFilter = [];
var applianceArrayDisplayInFilter = [];
var ustensilArrayDisplayInFilter = [];

var filterIngredientArrayBeforeTag = [];
var newingredientArrayForFilter = [];

var filterApplianceArrayBeforeTag = [];
var newApplianceArrayForFilter = [];

var filterUstensilArrayBeforeTag = [];
var newUstensilArrayForFilter = [];

// RECIPE RESULT TO BE SHOWN
var recipeResult = [];
var recipeResultFilter = [];


document.addEventListener("DOMContentLoaded", function() {

    // CALL RECIPE FOR HTML
    showRecipes(recipes);

    var recipeNameArray = [];
    concatenateNameRecipes(recipeNameArray);

    var descriptionArray = [];
    concatenateDescriptionRecipes(descriptionArray);

    var ingredientsArray = [];
    concatenateIngredientRecipes(ingredientsArray);
    
    var appliancesArray = [];
    concatenateApplianceRecipes(appliancesArray);
    
    var ustensilsArray = [];
    concatenateUstensilRecipes(ustensilsArray);
    
    // DATA FILTER
    var filterIngredientsResultArray = [];
    var filterAppliancesResultArray = [];
    var filterUstensilsResultArray = [];

    // VARIOUS DATA
    ingredientArrayDisplayInFilter = ingredientsArray;
    newingredientArrayForFilter = ingredientsArray;

    applianceArrayDisplayInFilter = appliancesArray;
    newApplianceArrayForFilter = appliancesArray;

    ustensilArrayDisplayInFilter = ustensilsArray;
    newUstensilArrayForFilter = ustensilsArray;

    // SHOW FILTER
    showIngredients(newingredientArrayForFilter);
    showAppliance(newApplianceArrayForFilter);
    showUstensils(newUstensilArrayForFilter);

    // SEARCH BAR ALGORITHM
    const centralSearchBar = document.getElementById('searchbar');

    var searchResultArrayFromIngredient = [];
    var resultForsearchIngredient = [];

    var searchResultArrayFromNameRecipe = [];
    var resultForSearchName = [];

    var searchResultArrayFromDescriptionRecipe = [];
    var resultForSearchDescription = [];

    centralSearchBar.addEventListener('change', function(event) {

        var searchWord = event.target.value;
        searchWord = resultOfResearchNeed(searchWord);
        
        if(searchWord != '') {
            for (var i = 0; i < searchWord.length; i++) {
                let valueSearchWord = searchWord[i];

                // SEARCH DATA IN THE VALUE INGREDIENT RECIPE
                if(valueSearchWord.length > 2) {
                    for (var j = 0; j < ingredientsArray.length -1; j++) {
                        let ingredientList = ingredientsArray[j].toLowerCase();
                        if(ingredientList.indexOf("") != -1) {
                            let wordIngredientList = ingredientList.split(" ");
                            for (var K = 0; K < wordIngredientList.length; K++) {
                                let ingredientWord = wordIngredientList[K];
                                if(ingredientWord === valueSearchWord) {
                                    resultForsearchIngredient.push(j);
                                }
                            }
                        }
                        else { 
                            if(ingredientList === valueSearchWord) {
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
                if(valueSearchWord.length > 2) {
                    for (var l = 0; l < recipeNameArray.length; l++) {
                        let nameList = recipeNameArray[l].toLowerCase();
                        if(nameList.indexOf("") != -1) {
                            let wordNameList = nameList.split(" ");
                            for (var m = 0; m < wordNameList.length; m++) {
                                let nameWord = wordNameList[m];
                                if(nameWord === valueSearchWord) {
                                    resultForSearchName.push(l);
                                }
                            }
                        }
                        else { if(nameList === valueSearchWord) {
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
                if(valueSearchWord.length > 2) {
                    for (var n = 0; n < descriptionArray.length; n++) {
                        let descriptionList = descriptionArray[n].toLowerCase();
                        if(descriptionList.indexOf("") != -1) {
                            let wordDescriptionList = descriptionList.split(" ");
                            for (var o = 0; o < wordDescriptionList.length; o++) {
                                let descriptionWord = wordDescriptionList[o];
                                if(descriptionWord === valueSearchWord) {
                                    resultForSearchDescription.push(n);
                                }
                            }
                        }
                        else { if(descriptionList === valueSearchWord) {
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
        
        ingredientArrayDisplayInFilter = filterIngredientsResultArray;
        newingredientArrayForFilter = filterIngredientsResultArray;
        showIngredients(newingredientArrayForFilter);

        applianceArrayDisplayInFilter = filterAppliancesResultArray;
        newApplianceArrayForFilter = filterAppliancesResultArray;
        showAppliance(newApplianceArrayForFilter);

        ustensilArrayDisplayInFilter = filterUstensilsResultArray;
        newUstensilArrayForFilter = filterUstensilsResultArray;
        showUstensils(newUstensilArrayForFilter);
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

    // FUNCTIONAL SEARCH BAR INGREDIENT CORRELATED WITH THE MAIN BAR
    ingredientSearchBar.addEventListener('focus', function(event) {
        if(centralSearchBar.value ==""){
            ingredientSearchBar.disabled = true;
        }
    });

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
                        
                        ingredientArrayDisplayInFilter = searchResultArrayFromIngredientFilter;
                        newingredientArrayForFilter = searchResultArrayFromIngredientFilter;
                        showIngredients(newingredientArrayForFilter);
                    }
                }
            }
        }
    });

     // FUNCTIONAL SEARCH BAR INGREDIENT CORRELATED WITH THE MAIN BAR
     applianceSearchBar.addEventListener('focus', function(event) {
        if(centralSearchBar.value ==""){
            applianceSearchBar.disabled = true;
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
                        applianceArrayDisplayInFilter = searchResultArrayFromApplianceFilter;
                        newApplianceArrayForFilter = searchResultArrayFromApplianceFilter;
                        showAppliance(newApplianceArrayForFilter);

                    }
                }
            }
        }
    });

     // FUNCTIONAL SEARCH BAR INGREDIENT CORRELATED WITH THE MAIN BAR
     ustensilSearchBar.addEventListener('focus', function(event) {
        if(centralSearchBar.value ==""){
            ustensilSearchBar.disabled = true;
        }
    });
    
    // SEARCH FILTER USTENSIL
    ustensilSearchBar.addEventListener('change', function(event) {
        let valueresearchFilter = event.target.value;
        let cleanValueFilter = valueresearchFilter.toLowerCase();

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
                        ustensilArrayDisplayInFilter = searchResultArrayFromUstensilFilter;
                        newUstensilArrayForFilter = searchResultArrayFromUstensilFilter;
                        showUstensils(newUstensilArrayForFilter);
                    }
                }
            }
        }
    });
});

