document.addEventListener("DOMContentLoaded", function() {

    // CALL RECIPE FOR HTML
    showRecipes(recipes);

    // SHOW FILTER
    showIngredients(ingredientArray);
    showAppliance(applianceArray);
    showUstensils(ustensilArray);

    // SEARCH BAR ALGORITHM
    const centralSearchBar = document.getElementById('searchbar');
    const ingredientSearchBar = document.getElementById('search_ingredients');
    const applianceSearchBar = document.getElementById('search_appareils');
    const ustensilSearchBar = document.getElementById('search_ustensiles')

    dataSearchBarLoop(centralSearchBar);
    datasearchfilterLoop(ingredientSearchBar);
    if(centralSearchBar.value != "") {
        showRecipes(recipeResult);
    }
    else  {
        dataSearchBarLoop(ingredientSearchBar);
    }


    
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
});

