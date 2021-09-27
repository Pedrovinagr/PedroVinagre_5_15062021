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

    // removeTagIngredient();

    var recipeNameArray = [];
    concatenateNameRecipes(recipeNameArray);

    var descriptionArray = [];
    concatenateDescriptionRecipes(descriptionArray);

    var ingredientsArray = [];
    concatenateIngredientRecipes(ingredientsArray);

    ingredientArrayDisplayInFilter = ingredientsArray;
    newingredientArrayForFilter = ingredientsArray;
    
    showIngredients(newingredientArrayForFilter);
    

    var appliancesArray = [];
    concatenateApplianceRecipes(appliancesArray);

    applianceArrayDisplayInFilter = appliancesArray;
    newApplianceArrayForFilter = appliancesArray;

    showAppliance(applianceArrayDisplayInFilter);

    var ustensilsArray = [];
    concatenateUstensilRecipes(ustensilsArray);

    ustensilArrayDisplayInFilter = ustensilsArray;
    newUstensilArrayForFilter = ustensilsArray;
    
    showUstensils(ustensilArrayDisplayInFilter);

    // RECIPE RESULT TO BE SHOWN
    // var recipeResult = [];


    

    // DATA FILTER
    var filterIngredientsResultArray = [];
    var filterAppliancesResultArray = [];
    var filterUstensilsResultArray = [];

    // VARIOUS DATA
    // var choisenTagIngredientArray = [];
    // collectValueTagIngredient(choisenTagIngredientArray);
    // console.log(choisenTagIngredientArray);
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
        // recipeResult = [];

        // var researchValue = event.target.value;

        // var cleanValue = researchValue.toLowerCase();

        // // SEARCH WORD VALUE
        // if(cleanValue.length >= 3){
        //     if(cleanValue.indexOf("") != -1) {
        //         let searchArray = cleanValue.split(" ");
        //         for (var i = 0; i < searchArray.length; i++) {
        //             let searchWord = searchArray[i];
        var searchWord = event.target.value;
        // console.log(searchWord)
        searchWord = resultOfResearchNeed(searchWord);
        // console.log("début de la boucle : ")
        // console.log(searchWord)
        
        if(searchWord != '') {
            for (var i = 0; i < searchWord.length; i++) {
                let valueSearchWord = searchWord[i];
                // console.log(valueSearchWord)

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
                                    // console.log(resultForsearchIngredient)
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
                        // console.log(searchResultArrayFromIngredient)                
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
            // recipeResultFilter = recipeResult;
            // console.log(recipeResultFilter)
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
        // console.log(ingredientArrayDisplayInFilter)
        showIngredients(newingredientArrayForFilter);
        // removeIngredientSelectedTag(filterIngredientsResultArray);
        // ingredientArrayShown = filterIngredientsResultArray;
        applianceArrayDisplayInFilter = filterAppliancesResultArray;
        showAppliance(applianceArrayDisplayInFilter);

        ustensilArrayDisplayInFilter = filterUstensilsResultArray;
        showUstensils(ustensilArrayDisplayInFilter);
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
                        
                        ingredientArrayDisplayInFilter = searchResultArrayFromIngredientFilter;
                        newingredientArrayForFilter = searchResultArrayFromIngredientFilter;
                        // console.log(ingredientArrayDisplayInFilter)
                        showIngredients(newingredientArrayForFilter);
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
                        applianceArrayDisplayInFilter = searchResultArrayFromApplianceFilter;
                        showAppliance(applianceArrayDisplayInFilter);

                    }
                }
            }
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
                        showUstensils(ustensilArrayDisplayInFilter);
                    }
                }
            }
        }
    });


    // FILTER RECIPES WITH TAGS
    // console.log(showRecipes(recipeResult))
    // var recipeResultFilter = recipeResult;
    // console.log(recipeResultFilter)
    // var tagIngredientsArray = [];
    // collectValueTagIngredient(tagIngredientsArray);
    // console.log(tagIngredientsArray)
    // var tagAppliancesArray = [];
    // var tagUstensilsArray = [];

    // if(ingredientTagValue != "") {
    //     // for (var i = 0; i < recipeResultFilter.length; i++) {
    //     //     var finalRecipe = recipeResultFilter[i];
    //     //     // console.log("final :")
    //     //     // console.log(finalRecipe)
    //     //     var finalIngredientsInRecipe = finalRecipe.ingredients;
    //     //     // console.log("final :")
    //     //     // console.log(finalIngredientsInRecipe)
    //     //     var finalApplianceInRecipe = finalRecipe.appliance;
    //     //     // console.log("final :")
    //     //     // console.log(finalApplianceInRecipe)
    //     //     var finalUstensilsInRecipe = finalRecipe.ustensils;
    //     //     // console.log("final :")
    //     //     // console.log(finalUstensilsInRecipe)
    //     //     console.log(tagIngredientsArray)
    //     //     for (var j = 0; j < tagIngredientsArray.length; j++) {
    //     //         var resultListTagIngredient = tagIngredientsArray[j];
    //     //         console.log(resultListTagIngredient)
    //     // //         for (var K = 0; K < finalIngredientsInRecipe.length; K++) {
    //     // //             var finalIngredientInRecipe = finalIngredientsInRecipe[K];
    //     // //             if(finalIngredientInRecipe.ingredient == resultListTagIngredient) {
    //     // //                 if(!recipeResultFilter.includes(finalRecipe)) {
    //     // //                     recipeResultFilter.push(finalRecipe);
    //     // //                 }
    //     // //             }
                    
    //     // //         }
                
    //     //     }
    //     // }
    // }

    // if(recipeResultFilter.length > 0) {
    //     showRecipes(recipeResultFilter);
    // } else {
    //     showRecipes(recipeResult);
    // }
});

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

    // removeTagIngredient();

    var recipeNameArray = [];
    concatenateNameRecipes(recipeNameArray);

    var descriptionArray = [];
    concatenateDescriptionRecipes(descriptionArray);

    var ingredientsArray = [];
    concatenateIngredientRecipes(ingredientsArray);

    ingredientArrayDisplayInFilter = ingredientsArray;
    newingredientArrayForFilter = ingredientsArray;
    
    showIngredients(newingredientArrayForFilter);
    

    var appliancesArray = [];
    concatenateApplianceRecipes(appliancesArray);

    applianceArrayDisplayInFilter = appliancesArray;
    newApplianceArrayForFilter = appliancesArray;

    showAppliance(applianceArrayDisplayInFilter);

    var ustensilsArray = [];
    concatenateUstensilRecipes(ustensilsArray);

    ustensilArrayDisplayInFilter = ustensilsArray;
    newUstensilArrayForFilter = ustensilsArray;
    
    showUstensils(ustensilArrayDisplayInFilter);

    // RECIPE RESULT TO BE SHOWN
    // var recipeResult = [];


    

    // DATA FILTER
    var filterIngredientsResultArray = [];
    var filterAppliancesResultArray = [];
    var filterUstensilsResultArray = [];

    // VARIOUS DATA
    // var choisenTagIngredientArray = [];
    // collectValueTagIngredient(choisenTagIngredientArray);
    // console.log(choisenTagIngredientArray);
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
        // recipeResult = [];

        // var researchValue = event.target.value;

        // var cleanValue = researchValue.toLowerCase();

        // // SEARCH WORD VALUE
        // if(cleanValue.length >= 3){
        //     if(cleanValue.indexOf("") != -1) {
        //         let searchArray = cleanValue.split(" ");
        //         for (var i = 0; i < searchArray.length; i++) {
        //             let searchWord = searchArray[i];
        var searchWord = event.target.value;
        // console.log(searchWord)
        searchWord = resultOfResearchNeed(searchWord);
        // console.log("début de la boucle : ")
        // console.log(searchWord)
        
        if(searchWord != '') {
            for (var i = 0; i < searchWord.length; i++) {
                let valueSearchWord = searchWord[i];
                // console.log(valueSearchWord)

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
                                    // console.log(resultForsearchIngredient)
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
                        // console.log(searchResultArrayFromIngredient)                
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
            // recipeResultFilter = recipeResult;
            // console.log(recipeResultFilter)
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
        // console.log(ingredientArrayDisplayInFilter)
        showIngredients(newingredientArrayForFilter);
        // removeIngredientSelectedTag(filterIngredientsResultArray);
        // ingredientArrayShown = filterIngredientsResultArray;
        applianceArrayDisplayInFilter = filterAppliancesResultArray;
        showAppliance(applianceArrayDisplayInFilter);

        ustensilArrayDisplayInFilter = filterUstensilsResultArray;
        showUstensils(ustensilArrayDisplayInFilter);
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
                        
                        ingredientArrayDisplayInFilter = searchResultArrayFromIngredientFilter;
                        newingredientArrayForFilter = searchResultArrayFromIngredientFilter;
                        // console.log(ingredientArrayDisplayInFilter)
                        showIngredients(newingredientArrayForFilter);
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
                        applianceArrayDisplayInFilter = searchResultArrayFromApplianceFilter;
                        showAppliance(applianceArrayDisplayInFilter);

                    }
                }
            }
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
                        showUstensils(ustensilArrayDisplayInFilter);
                    }
                }
            }
        }
    });


    // FILTER RECIPES WITH TAGS
    // console.log(showRecipes(recipeResult))
    // var recipeResultFilter = recipeResult;
    // console.log(recipeResultFilter)
    // var tagIngredientsArray = [];
    // collectValueTagIngredient(tagIngredientsArray);
    // console.log(tagIngredientsArray)
    // var tagAppliancesArray = [];
    // var tagUstensilsArray = [];

    // if(ingredientTagValue != "") {
    //     // for (var i = 0; i < recipeResultFilter.length; i++) {
    //     //     var finalRecipe = recipeResultFilter[i];
    //     //     // console.log("final :")
    //     //     // console.log(finalRecipe)
    //     //     var finalIngredientsInRecipe = finalRecipe.ingredients;
    //     //     // console.log("final :")
    //     //     // console.log(finalIngredientsInRecipe)
    //     //     var finalApplianceInRecipe = finalRecipe.appliance;
    //     //     // console.log("final :")
    //     //     // console.log(finalApplianceInRecipe)
    //     //     var finalUstensilsInRecipe = finalRecipe.ustensils;
    //     //     // console.log("final :")
    //     //     // console.log(finalUstensilsInRecipe)
    //     //     console.log(tagIngredientsArray)
    //     //     for (var j = 0; j < tagIngredientsArray.length; j++) {
    //     //         var resultListTagIngredient = tagIngredientsArray[j];
    //     //         console.log(resultListTagIngredient)
    //     // //         for (var K = 0; K < finalIngredientsInRecipe.length; K++) {
    //     // //             var finalIngredientInRecipe = finalIngredientsInRecipe[K];
    //     // //             if(finalIngredientInRecipe.ingredient == resultListTagIngredient) {
    //     // //                 if(!recipeResultFilter.includes(finalRecipe)) {
    //     // //                     recipeResultFilter.push(finalRecipe);
    //     // //                 }
    //     // //             }
                    
    //     // //         }
                
    //     //     }
    //     // }
    // }

    // if(recipeResultFilter.length > 0) {
    //     showRecipes(recipeResultFilter);
    // } else {
    //     showRecipes(recipeResult);
    // }
});

// fichier script de base
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

    // Condition de la recherche "filtre ingredient"
    // let searchFilterIngredient = document.getElementById('search_ingredients');
    
    // searchFilterIngredient.addEventListener('change',function(event) {
    //     let searchTextIngredient = event.target.value;
    //     let ingredientResult = []
        
    //     console.log('valeur de la recherche')
    //     console.log(searchTextIngredient)

    //     if(searchTextIngredient !==""){
    //         if(searchTextIngredient > 3){
    //             let searchValueIngredient = searchTextIngredient.toLowerCase();
    //             if(searchValueIngredient.indexOf("") != -1) {
    //                 let searchArrayIngredient = searchValueIngredient.split(" ");
    //                 for(var i = 0; i < searchArrayIngredient.length; i++) {
    //                     let wordIngredient = searchArrayIngredient[i];
    //                     if(wordIngredient.length > 2) {
    //                         for(var j = 0; j < ingredientsArray.length - 1; j++) {
    //                             let ingredientOfSearch = ingredientsArray[j];
    //                             if(ingredientOfSearch === wordIngredient) {
    //                                 ingredientResult.push(j);
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     console.log(ingredientResult)
    // });

    let searchFilterIngredient = document.getElementById('search_ingredients');
    
    searchFilterIngredient.addEventListener('change',function(event) {
        let texteSaisiePourLaRecherche = event.target.value;
        let ingredientResult = []
        
        console.log('valeur de la recherche')
        console.log(texteSaisiePourLaRecherche)

        if(texteSaisiePourLaRecherche !==""){
            for(var index = 0; index < ingredientsArray.length; index++) {
                let ingredientAMonIndex = ingredientsArray[index];
                if (ingredientAMonIndex === texteSaisiePourLaRecherche) {
                    ingredientResult.push(index);
                }
            }
            for(var index = 0; index < ingredientResult.length; index++) {
                var indexDeMonIngredient = ingredientResult[index];
                var monIngredient = ingredientsArray[indexDeMonIngredient];
            }
            console.log('résultat de la recherche')
            console.log(monIngredient)
        }
    });

    // // fonction de recherche dans "filtre ingredient"
    // function searchIngredientsFromFilter(ingredient) {
    //     let ingredientResult = [];
    //     for(var i = 0; i < ingredientsArray.length; i++) {
    //         let ingredientInsideList = ingredientList[i];
    //         if(ingredientInsideList === ingredient) {
    //             ingredientResult.push(ingredientsArray[i]);
    //         }
    //     }
    //     return ingredientResult;
    // }

    // Condition de la barre de recherche
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

// fonction listes

// Liste des ingredients
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

// liste des Appareils
function createAppliancesList(applianceToAggregate) {
    for(var i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance;
        if(!applianceToAggregate.includes(appliance)) {
            applianceToAggregate.push(appliance);
        }
    }
}

// Liste des Ustensiles
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

// // fonction tag du filtre ingredient
// function tagIngredientsFilter()



// fonction de recherche dans "searchbar"
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
// let searchFilterIngredient = document.getElementById('search_ingredients');
// let searchingIngredients = [];

// console.log('tableau pour la recherche du filtre ingredient')
// console.log(searchingIngredients)

// searchFilterIngredient.addEventListener('change',function(event) {
//     let searchTextIngredient = event.target.value;
//     if(searchTextIngredient !==""){
//         if(searchTextIngredient > 3){
//             let searchValueIngredient = searchTextIngredient.toLowerCase();
            
//             if(searchValueIngredient.indexOf(" ") != -1) {
//                 let searchArrayIngredient = searchValueIngredient.split(" ");
//                 for(var i = 0; i < searchArrayIngredient.length; i++) {
//                     let wordIngredient = searchArrayIngredient[i];
//                     console.log(wordIngredient)
                    
//                     if(wordIngredient.length > 2) {
//                         for(var j = 0; j < ingredientsArray.length - 1; j++) {
//                             let ingredientOfSearch = ingredientsArray[j].toLowerCase();
//                             if(ingredientOfSearch.indexOf(" ") != -1) {
//                                 var ingredientWords = ingredientOfSearch.split(" ");
//                                 for(var k = 0; k < ingredientWords.length; k++) {
//                                     let ingredientWord = ingredientWords[k];
//                                     if(ingredientWord === wordIngredient) {
//                                         searchingIngredients.push(j);
//                                     }
//                                 }
//                             }
//                             else {
//                                 if(ingredientOfSearch === wordIngredient) {
//                                     searchingIngredients.push(j);
//                                 }
//                             }
//                         }
//                     }
//                 }

//                 console.log('recherche filtre ingredient :');
//                 console.log(searchingIngredients);

//                 var searchResultFilterIngredient = [];
//                 for(var i = 0; i < searchingIngredients.length -1; i++) {
//                     let researchIngredientIndex = searchingIngredients[i];
//                     let ingredientFromFilter = ingredientsArray[researchIngredientIndex];
//                     if(searchResultFilterIngredient.length > 0) {
//                         for(var j = 0; j < searchResultFilterIngredient.length -1; j++) {
//                             if(!searchResultFilterIngredient.includes(createIngredientsList(ingredientFromFilter)));
//                             searchResultFilterIngredient.push(createIngredientsList(ingredientFromFilter));
//                         }
//                     } else {
//                     searchResultFilterIngredient.push(createIngredientsList(ingredientFromFilter));
//                     }
//                 } 
//             console.log('resultat de la recherche du filtre :')
//             console.log(searchResultFilterIngredient)

//             }
//         }
//     }
// });

// fichier script filter
//DOM
const searchIngredients = document.querySelector('.search_input');
const boxIngredients = document.getElementById('search_ingredients');
const boxMotion = document.querySelector('.motion');
const tagMotion = document.getElementById('ingredients_tag');
const tagIngredients = document.getElementById('ingredients__tag');

// const searchAppareils = document.querySelector('search_input');
// const boxAppareils = document.getElementById('search_appareils');
// const boxMotion = document.querySelector('.motion');

// box ingredients (ing)
boxIngredients.onkeyup = (e) =>{
    let boxDataIng = e.target.value;
    let emptyArrayIng = [];

    if(boxDataIng){
        emptyArrayIng = ingredient.filter((dataIng)=>{
            return dataIng.toLocaleLowerCase().startsWith(boxDataIng.toLocaleLowerCase());
        });
        emptyArrayIng = emptyArrayIng.map((dataIng)=>{
            return dataIng = '<li>'+ dataIng +'</li>';
        });
        console.log('liste des ingredients :')
        console.log(emptyArrayIng);

        searchIngredients.classList.add('active');
        showIngredients(emptyArrayIng);

        let allListIng = boxMotion.querySelectorAll('li');
        for (let i = 0; i < allListIng.length; i++){
            allListIng[i].setAttribute('onclick', 'select(this)');
        }
    }
    else{
        searchIngredients.classList.remove('active');
    }
    
}

function select(element){
    let selectUserDataIng = element.textContent;
    tagMotion.value = selectUserDataIng;
    tagIngredients.style.display = "block"
    searchIngredients.classList.remove('active');
}

function showIngredients(list){
    let listDataIng;
    if(!list.length){
        userValue = boxIngredients.value;
        listDataIng = '<li>' + userValue + '</li>';
        
    }
    else{
        listDataIng = list.join('');
    }
    
    boxMotion.innerHTML = listDataIng;
    
}

// // box appareil
// boxAppareils.onkeyup = (e) =>{
//     let boxData = e.target.value;
//     let emptyArray = [];

//     if(boxData){
//         emptyArray = ingredient.filter((data)=>{
//             return data.toLocaleLowerCase().startsWith(boxData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data)=>{
//             return data = '<li>'+ data +'</li>';
//         });
//         console.log(emptyArray);

//         searchAppareils.classList.add('active');
//         showAppareils(emptyArray);

//         let allList = boxMotion.querySelectorAll('li');
//         for (let i = 0; i < allList.length; i++){
//             allList[i].setAttribute('onclick', 'select(this)');
//         }
//     }
//     else{
//         searchAppareils.classList.remove('active');
//     }
    
// }

// function select(element){
//     let selectUserData = element.textContent;
//     boxAppareils.value = selectUserData;
//     searchAppareils.classList.remove('active');
// }

// function showAppareils(list){
//     let listData;
//     if(!list.length){
//         userValue = boxAppareils.value;
//         listData = '<li>' + userValue + '</li>';
//     }
//     else{
//         listData = list.join('');
//     }
//     boxMotion.innerHTML = listData;
// }

// fichier site (KV)
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

// fichier Filtre ingredients
// Insérer le tableau dans le filtre
let menuIngredient = document.getElementById('ingredients_list');
var listeDesIngredientsHtml = document.createElement('ul');

for(var i = 0; i < tableauDesIngredients.length - 1; i++) {
    var IngredientDansLeMenu = document.createElement('li');
    IngredientDansLeMenu.textContent = tableauDesIngredients[i];
    IngredientDansLeMenu.classList = "ingredients";
    listeDesIngredientsHtml.appendChild(IngredientDansLeMenu);
}

menuIngredient.appendChild(listeDesIngredientsHtml);

// Recheche sur le filtre ingredient
let searchFilterIngredient = document.getElementById('search_ingredients');

searchFilterIngredient.addEventListener('change',function(event) {
    let texteSaisiePourLaRecherche = event.target.value;
    let tableauDeRecherche = []
    
    console.log('valeur de la recherche')
    console.log(texteSaisiePourLaRecherche)

    if(texteSaisiePourLaRecherche !=="") {
        var valeurDeRechercheMinuscule = texteSaisiePourLaRecherche.toLowerCase();
        // saisie de recheche mis en minuscule, découper en mot et contient un index
        if(valeurDeRechercheMinuscule.indexOf("") != -1) {
            var valeurDeRechercheMiseDansUnTableau = valeurDeRechercheMinuscule.split(" ");
            for (var i = 0; i < valeurDeRechercheMiseDansUnTableau.length; i++) {
                let motDeRecherche = valeurDeRechercheMiseDansUnTableau[i];
                // rechercher dans le tableau d'ingredient la valeur recherchée
                if(motDeRecherche!=="") {
                    for (var j = 0; j  < tableauDesIngredients.length -1; j++) {
                        let ingredientRecherche = tableauDesIngredients[j].toLowerCase();
                        // découper les groupes de mot du tableau de recherche verifier s'ils ont un index et pusher dans le tableauDeRecherche
                        if(ingredientRecherche.indexOf("") != -1) {
                            let motIngredientRecherche = ingredientRecherche.split(" ");
                            for (var k = 0; k < motIngredientRecherche.length; k++) {
                                let motRecherche = motIngredientRecherche[k];
                                if(motRecherche === motDeRecherche) {
                                    tableauDeRecherche.push(j);
                                }
                            }
                        } else {
                            if(ingredientRecherche === motDeRecherche) {
                                tableauDeRecherche.push(j);
                            }
                        }
                    }
                }
            }
            console.log('resultat de la recherche ingredient');
            console.log(tableauDeRecherche)
        }

        //     for(var i = 0; i < tableauDesIngredients.length; i++) {
        //         let ingredientAMonIndex = tableauDesIngredients[i];
        //         if (ingredientAMonIndex === texteSaisiePourLaRecherche) {
        //             tableauDeRecherche.push(i);
        //         }
        //     }
        //     for(var j = 0; j < tableauDeRecherche.length; j++) {
        //         var indexDeMonIngredient = tableauDeRecherche[j];
        //         var monIngredient = tableauDesIngredients[indexDeMonIngredient];
        //     }

        //     console.log('résultat de la recherche');
        //     console.log(monIngredient);
        // }
    }
});

var chevronDown = document.querySelector('.fa-chevron-down');
var chevronUp = document.querySelector('.fa-chevron-up');

function menuDéroulant() {
document.getElementById('ingredients_list').classList.toggle('is_visible')
}

// if(texteSaisiePourLaRecherche !==""){
//     var valeurDeRecherche = texteSaisiePourLaRecherche.tolowerCase();
//     if(valeurDeRecherche.indexOf("") != -1) {
//         var valeurSpliter = valeurDeRecherche.split(" ")
//         for(var i = 0; i < valeurSpliter.length; i++) {
//             let motDeRecherche = valeurSpliter[i];
//             if (motDeRecherche > 2) {
//                 for(var j = 0; j < tableauDesIngredients; j++) {
//                     var ingredientVarJ = tableauDesIngredients[j].tolowerCase();
//                     if(ingredientVarJ.indexOf("") != -1) {
//                         var ingredientAttendu = ingredientVarJ.split("");
//                     }
//                     console.log(ingredientAttendu)
//                 }
//             }
//         }
//     }
// }

// script

    // console.log(recipes)
    // console.log(recipeResult)
    // console.log(recipeResultFilter)
    
    // if(centralSearchBar.value !="" && ingredientSearchBar.value != "") {
            
    //     console.log(centralSearchBar)
    //     console.log(ingredientSearchBar)
    
    // }

    // SEARCH BAR ALGORITHM
    // const centralSearchBar = document.getElementById('searchbar');
    // var resultForsearchIngredient = [];
    // var resultForSearchName = [];
    // var resultForSearchDescription = [];

    // centralSearchBar.addEventListener('change', function(event) {

    //     searchWord = event.target.value;
    //     resultOfResearchNeed(searchWord);
        
    //     if(inputDataOfSearchBar.length > 0) {
    //         for (var i = 0; i < inputDataOfSearchBar.length; i++) {
    //             var valueSearchWord = inputDataOfSearchBar[i];
                

    //             // SEARCH DATA IN THE VALUE INGREDIENT RECIPE
    //             for (var j = 0; j < ingredientArray.length -1; j++) {
    //                 let ingredientList = ingredientArray[j].toLowerCase().split(" ");
    //                 for (var K = 0; K < ingredientList.length; K++) {
    //                     let ingredientWord = ingredientList[K];
    //                     if(ingredientWord.length > 2) {
    //                         if(ingredientWord === valueSearchWord) {
    //                             resultForsearchIngredient.push(j);
    //                         }
    //                     }
    //                     else { 
    //                         if(ingredientList === valueSearchWord) {
    //                             resultForsearchIngredient.push(j);
    //                         }
    //                     }
    //                 }
    //             }
    //             for (var i = 0; i < resultForsearchIngredient.length; i++) {
    //                 let indexForResultSearchIngredient = resultForsearchIngredient[i];
    //                 let ingredientByIndex = ingredientArray[indexForResultSearchIngredient];
    //                 resultOfResearch.push(ingredientByIndex);                 
    //             }
                
    //             // SEARCH DATA IN THE VALUE NAME RECIPE
    //             for (var l = 0; l < nameArray.length; l++) {
    //                 let nameList = nameArray[l].toLowerCase().split(" ");
    //                 for (var m = 0; m < nameList.length; m++) {
    //                     let nameWord = nameList[m];
    //                     if(nameWord.length > 2) {
    //                         if(nameWord === valueSearchWord) {
    //                         resultForSearchName.push(l);
    //                         }  
    //                     }
    //                     else { 
    //                         if(nameList === valueSearchWord) {
    //                             resultForSearchName.push(l);
    //                         }
    //                     }
    //                 }
    //             }
    //             for (var i = 0; i < resultForSearchName.length; i++) {
    //                 let indexForResultSearchName = resultForSearchName[i];
    //                 let nameRecipeByIndex = nameArray[indexForResultSearchName];
    //                 resultOfResearch.push(nameRecipeByIndex);
    //             }
                
    //             // SEARCH DATA IN THE VALUE DESCRIPTION RECIPE
    //             for (var n = 0; n < descriptionArray.length; n++) {
    //                 let descriptionList = descriptionArray[n].toLowerCase().split(" ");
    //                 for (var o = 0; o < descriptionList.length; o++) {
    //                     let descriptionWord = descriptionList[o];
    //                     if(descriptionWord.length > 2) {
    //                         if(descriptionWord === valueSearchWord) {
    //                             resultForSearchDescription.push(n);
    //                         }   
    //                     }
    //                     else { 
    //                         if(descriptionList === valueSearchWord) {
    //                             resultForSearchDescription.push(n);
    //                         }
    //                     }
    //                 }   
    //             }
    //             for (var i = 0; i < resultForSearchDescription.length; i++) {
    //                 let indexForResultSearchDescription = resultForSearchDescription[i];
    //                 let descriptionRecipeByIndex = descriptionArray[indexForResultSearchDescription];
    //                 resultOfResearch.push(descriptionRecipeByIndex);
    //             }
    //         }
    //         searchAllRecipes(resultOfResearch);
    //     }

    //     if(recipeResult.length > 0) {
    //         showRecipes(recipeResult);
    //     } else {
    //         showRecipes(recipes);
    //     }

    //     // RESRET DATA ARRAY 
    //     ingredientArray = [];
    //     applianceArray = [];
    //     ustensilArray = [];

    //     // UPDATE FILTER INGREDIENT
    //     for(var i = 0; i < recipeResult.length; i++) {
    //         var dataFilterIngredients = recipeResult[i].ingredients;
    //         for (var j = 0; j < dataFilterIngredients.length; j++) {
    //             var dataFilterIngredient = dataFilterIngredients[j].ingredient;
    //             if(!ingredientArray.includes(dataFilterIngredient)) {
    //                 ingredientArray.push(dataFilterIngredient);
    //             } 
    //         }
    //     }

    //     // UPDATE FILTER APPLIANCE
    //     for (var i = 0; i < recipeResult.length; i++) {
    //         var dataFilterAppliances = recipeResult[i].appliance;
    //         if(!applianceArray.includes(dataFilterAppliances)) {
    //             applianceArray.push(dataFilterAppliances);
    //         }
    //     }

    //     // UPDATE FILTER USTENSIL
    //     for (var i = 0; i < recipeResult.length; i++) {
    //         var dataUstensils = recipeResult[i].ustensils;
    //         for (var j = 0; j < dataUstensils.length; j++) {
    //             var dataFilterUstensils = dataUstensils[j];
    //             if(!ustensilArray.includes(dataFilterUstensils)) {
    //                 ustensilArray.push(dataFilterUstensils);
    //             }
    //         }
    //     }

    //     // INSERT DATA INTO FILTERS
    //     showIngredients(ingredientArray);
    //     showAppliance(applianceArray);
    //     showUstensils(ustensilArray);

    // });

    // SEARCH FILTERS ALGORITHM
    // const ingredientSearchBar = document.getElementById('search_ingredients');
    // const applianceSearchBar = document.getElementById('search_appareils');
    // const ustensilSearchBar = document.getElementById('search_ustensiles')



    // var searchResultArrayFromIngredientFilter = [];
    // var resultForsearchIngredientInFilter = [];

    // var searchResultArrayFromApplianceFilter = [];
    // var resultForsearchApplianceInFilter = [];

    // var searchResultArrayFromUstensilFilter = [];
    // var resultForsearchUstensilInFilter = [];

    // // SEARCH FILTER INGREDIENT
    // ingredientSearchBar.addEventListener('change', function(event) {

    //     var valueresearchFilter = event.target.value;
    //     if(valueresearchFilter.length >= 3){
    //         var searchArrayFilter = valueresearchFilter.toLowerCase().split(" ");
    //         for (var i = 0; i < searchArrayFilter.length; i++) {
    //             let searchWordFilter = searchArrayFilter[i];                
    //             for (var j = 0; j < ingredientArray.length; j++) {
    //                 let ingredientListFilter = ingredientArray[j].toLowerCase().split(" ");
    //                 for (var K = 0; K < ingredientListFilter.length; K++) {
    //                     let ingredientWordInFilter = ingredientListFilter[K];
    //                     if(ingredientWordInFilter.length > 2) {
    //                         if(ingredientWordInFilter === searchWordFilter) {
    //                             resultForsearchIngredientInFilter.push(j);
    //                         }
    //                     }
    //                     else { 
    //                         if(ingredientListFilter === searchWordFilter) {
    //                         resultForsearchIngredientInFilter.push(j);
    //                         }
    //                     }
    //                 }
    //             }

    //             for (var i = 0; i < resultForsearchIngredientInFilter.length; i++) {
    //                 let indexForResultSearchIngredientInFilter = resultForsearchIngredientInFilter[i];
    //                 let ingredientFilterByIndex = ingredientArray[indexForResultSearchIngredientInFilter];
    //                 if(!resultOfResearchFilter.includes(ingredientFilterByIndex)) {
    //                     resultOfResearchFilter.push(ingredientFilterByIndex);
    //                 }                 
    //             }
    //             showIngredients(resultOfResearchFilter);
    //             searchBarRecipes(resultOfResearchFilter);
    //         }
    //     }

        
    //     if(centralSearchBar.value !="" && ingredientSearchBar.value != "") {
            
    //         console.log(centralSearchBar)
    //         console.log(ingredientSearchBar)
        
    //     }
        
    //     if(recipeResultFilter.length > 0) {
    //         // showRecipes(recipeResultFilter);
    //         // RESRET DATA ARRAY
    //         applianceArray = [];
    //         ustensilArray = [];

    //         // UPDATE FILTER APPLIANCE
    //         for (var i = 0; i < recipeResultFilter.length; i++) {
    //             var dataFilterAppliances = recipeResultFilter[i].appliance;
    //             if(!applianceArray.includes(dataFilterAppliances)) {
    //                 applianceArray.push(dataFilterAppliances);
    //             }
    //         }

    //         // UPDATE FILTER USTENSIL
    //         for (var i = 0; i < recipeResultFilter.length; i++) {
    //             var dataUstensils = recipeResultFilter[i].ustensils;
    //             for (var j = 0; j < dataUstensils.length; j++) {
    //                 var dataFilterUstensils = dataUstensils[j];
    //                 if(!ustensilArray.includes(dataFilterUstensils)) {
    //                     ustensilArray.push(dataFilterUstensils);
    //                 }
    //             }
    //         }

    //         // INSERT DATA INTO FILTERS
    //         showAppliance(applianceArray);
    //         showUstensils(ustensilArray);
    //     }
    //     else {
    //         showRecipes(recipeResult);
    //     }
    // });

    // // SEARCH FILTER APPLIANCE
    // applianceSearchBar.addEventListener('change', function(event) {
    //     var valueresearchFilter = event.target.value;
    //     var cleanValueFilter = valueresearchFilter.toLowerCase();

    //     if(cleanValueFilter.length >= 3){
    //         if(cleanValueFilter.indexOf("") != -1) {
    //             let searchArrayFilter = cleanValueFilter.split(" ");
    //             for (var i = 0; i < searchArrayFilter.length; i++) {
    //             let searchWordFilter = searchArrayFilter[i];
    //                 if(searchWordFilter.length > 2) {
    //                     for (var j = 0; j < filterAppliancesResultArray.length; j++) {
    //                         let applianceListFilter = filterAppliancesResultArray[j].toLowerCase();
    //                         if(applianceListFilter.indexOf("") != -1) {
    //                             let wordApplianceListFilter = applianceListFilter.split(" ");
    //                             for (var K = 0; K < wordApplianceListFilter.length; K++) {
    //                                 let applianceWordInFilter = wordApplianceListFilter[K];
    //                                 if(applianceWordInFilter === searchWordFilter) {
    //                                     resultForsearchApplianceInFilter.push(j);
    //                                 }
    //                             }
    //                         }
    //                         else { 
    //                             if(applianceListFilter === searchWordFilter) {
    //                                 resultForsearchApplianceInFilter.push(j);
    //                             }
    //                         }
    //                     }
    //                     for (var i = 0; i < resultForsearchApplianceInFilter.length; i++) {
    //                         let indexForResultSearchApplianceInFilter = resultForsearchApplianceInFilter[i];
    //                         let applianceFilterByIndex = filterAppliancesResultArray[indexForResultSearchApplianceInFilter];
    //                         searchResultArrayFromApplianceFilter.push(applianceFilterByIndex);                 
    //                     }
    //                     applianceArrayDisplayInFilter = searchResultArrayFromApplianceFilter;
    //                     newApplianceArrayForFilter = searchResultArrayFromApplianceFilter;
    //                     showAppliance(newApplianceArrayForFilter);

    //                 }
    //             }
    //         }
    //     }
    // });
    
    // // SEARCH FILTER USTENSIL
    // ustensilSearchBar.addEventListener('change', function(event) {
    //     let valueresearchFilter = event.target.value;
    //     let cleanValueFilter = valueresearchFilter.toLowerCase();

    //     if(cleanValueFilter.length >= 3){
    //         if(cleanValueFilter.indexOf("") != -1) {
    //             let searchArrayFilter = cleanValueFilter.split(" ");
    //             for (var i = 0; i < searchArrayFilter.length; i++) {
    //             let searchWordFilter = searchArrayFilter[i];
    //                 if(searchWordFilter.length > 2) {
    //                     for (var j = 0; j < filterUstensilsResultArray.length; j++) {
    //                         let ustensilListFilter = filterUstensilsResultArray[j].toLowerCase();
    //                         if(ustensilListFilter.indexOf("") != -1) {
    //                             let wordUstensilListFilter = ustensilListFilter.split(" ");
    //                             for (var K = 0; K < wordUstensilListFilter.length; K++) {
    //                                 let ustensilWordInFilter = wordUstensilListFilter[K];
    //                                 if(ustensilWordInFilter === searchWordFilter) {
    //                                     resultForsearchUstensilInFilter.push(j);
    //                                 }
    //                             }
    //                         }
    //                         else { 
    //                             if(ustensilListFilter === searchWordFilter) {
    //                                 resultForsearchUstensilInFilter.push(j);
    //                             }
    //                         }
    //                     }
    //                     for (var i = 0; i < resultForsearchUstensilInFilter.length; i++) {
    //                         let indexForResultSearchUstensilInFilter = resultForsearchUstensilInFilter[i];
    //                         let ustensilFilterByIndex = filterUstensilsResultArray[indexForResultSearchUstensilInFilter];
    //                         searchResultArrayFromUstensilFilter.push(ustensilFilterByIndex);                 
    //                     }
    //                     ustensilArrayDisplayInFilter = searchResultArrayFromUstensilFilter;
    //                     newUstensilArrayForFilter = searchResultArrayFromUstensilFilter;
    //                     showUstensils(newUstensilArrayForFilter);
    //                 }
    //             }
    //         }
    //     }
    // });