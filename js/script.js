document.addEventListener("DOMContentLoaded", function() {

    // Tableau des ingredients
    let IngredientsArray = [];
    console.log('Liste des ingredients:');
    console.log(IngredientsArray);

    // fonction de recherche dans recipes de tous les ingredients
    function concatenateIngredientRecipes(concatenateIngredient) {
        for(var i = 0; i < recipes.length; i++) {
            let IngredientsList = recipes[i].ingredients;
            for(var j = 0; j < IngredientsList.length; j++) {
                let ingredient = IngredientsList[j].ingredient;
                if(!concatenateIngredient.includes(ingredient)) {
                    concatenateIngredient.push(ingredient);
                }
            }
        }
    }
    
    concatenateIngredientRecipes(IngredientsArray);

    // Tableau des appareils
    let appliancesArray = [];
    console.log('Liste des appareils:');
    console.log(appliancesArray);

    // fonction de recherche dans recipes de tous les appareils
    function concatenateApplianceRecipes(concatenateAppliance) {
        for(var i = 0; i < recipes.length; i++) {
            let appliance = recipes[i].appliance;
            if(!concatenateAppliance.includes(appliance)) {
                concatenateAppliance.push(appliance);
            }
        }
    }
    
    concatenateApplianceRecipes(appliancesArray);

    // Tableau des ustensiles
    let ustensilsArray = [];
    console.log('Liste des ustensiles:');
    console.log(ustensilsArray);

    // fonction de recherche dans recipes de tous les ustensiles
    function concatenateUstensilRecipes(concatenateUstensil) {
        for(var i = 0; i < recipes.length; i++) {
            let ustensilsList = recipes[i].ustensils;
            for(var j = 0; j < ustensilsList.length; j++) {
                let ustensil = ustensilsList[j];
                if(!concatenateUstensil.includes(ustensil)) {
                    concatenateUstensil.push(ustensil);
                }
            }
        }
    }
    
    concatenateUstensilRecipes(ustensilsArray);

    const centralSearchBar = document.getElementById('searchbar');
    let cleanIngredientArray = []

    centralSearchBar.addEventListener('change', function(event) {
        let researchValue = event.target.value;
        console.log(researchValue)
        let cleanValue = researchValue.toLowerCase();
        console.log(cleanValue)
        if(cleanValue !=="") {
            for (var i = 0; i < IngredientsArray.length; i++) {
                let ingredient = IngredientsArray[i].toLowerCase();
                if(cleanValue === ingredient) {
                    cleanIngredientArray.push(ingredient)
                    console.log(cleanIngredientArray)
                }
            }
        }
    });
});
