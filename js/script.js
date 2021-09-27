document.addEventListener("DOMContentLoaded", function() {

    // CALL RECIPE FOR HTML
    showRecipes(recipes);

    // SHOW FILTER
    showIngredients(ingredientArray);
    showAppliance(applianceArray);
    showUstensils(ustensilArray);


    dataSearchBarLoop(centralSearchBar);
    datasearchfilterIngLoop(ingredientSearchBar);
    datasearchfilterAppLoop(applianceSearchBar);
    datasearchfilterUstLoop(ustensilSearchBar);


    if(centralSearchBar.value != "") {
        showRecipes(recipeResult);
    }
    else  {
        showRecipes(recipes);
    }
});

