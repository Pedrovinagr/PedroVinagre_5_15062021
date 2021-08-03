document.addEventListener("DOMContentLoaded", function() {

    // Tableau des ingredients
    let ingredientsArray = [];
    console.log('Liste des ingredients:');
    console.log(ingredientsArray);

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
    
    concatenateIngredientRecipes(ingredientsArray);

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
    let cleanIngredientArray = [];

    centralSearchBar.addEventListener('change', function(event) {
        let researchValue = event.target.value;
        console.log('Valeur de la recherche')
        console.log(researchValue);
        let cleanValue = researchValue.toLowerCase();
        console.log('Valeur de la recherche en minuscule')
        console.log(cleanValue);
        console.log(cleanValue.indexOf(""))
        if(cleanValue.length >= 3){
            if(cleanValue.indexOf("") != -1) {
                let searchArray = cleanValue.split(" ");
                console.log(searchArray);
                for (var i = 0; i < searchArray.length; i++) {
                    let searchWord = searchArray[i];
                    console.log('tableau des mots de recherche');
                    console.log(searchWord)
                    if(searchWord.length > 2) {
                        for (let j = 0; j < ingredientsArray.length; j++) {
                            var resultIngredient = ingredientsArray[j];
                            console.log('resultat de recherche');
                            console.log(resultIngredient);
                        }
                    }
                }
            }

        }









        
        // if(cleanValue !=="") {
        //     for (var i = 0; i < ingredientsArray.length; i++) {
        //         let ingredient = ingredientsArray[i].toLowerCase();
        //         if(cleanValue === ingredient) {
        //             cleanIngredientArray.push(ingredient)
        //             console.log(cleanIngredientArray)
        //         }
        //     }
        // }
    }); 
});

