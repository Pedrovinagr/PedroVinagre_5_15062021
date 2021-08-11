document.addEventListener("DOMContentLoaded", function() {
    // tableau des titres de recette
    let recipeNameArray = [];
    console.log('Liste des titres de recette:');
    console.log(recipeNameArray);

    // fonction de recherche des titres de recette
    function concatenateNameRecipes(concatenateName) {
        for(var i = 0; i < recipes.length; i++) {
            let nameList = recipes[i].name;
            if(!concatenateName.includes(nameList)) {
                concatenateName.push(nameList);
            }
        }
    }

    concatenateNameRecipes(recipeNameArray);

    // tableau des descriptions de toutes les recettes
    let descriptionArray = [];
    console.log('Liste des descriptions de toutes les recettes:');
    console.log(descriptionArray);

    // fonction de recherche des titres de recette
    function concatenateDescriptionRecipes(concatenatedescription) {
        for(var i = 0; i < recipes.length; i++) {
            let descriptionList = recipes[i].description;
            if(!concatenatedescription.includes(descriptionList)) {
                concatenatedescription.push(descriptionList);
            }
        }
    }

    concatenateDescriptionRecipes(descriptionArray);

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


    // Algo  de recherhce par ingredient sur la barre de recherche
    const centralSearchBar = document.getElementById('searchbar');

    var searchResultArrayFromIngredient = [];
    var resultForsearchIngredient = [];

    var searchResultArrayFromNameRecipe = [];
    var resultForSearchName = [];

    var searchResultArrayFromDescriptionRecipe = [];
    var resultForSearchDescription = [];

    centralSearchBar.addEventListener('change', function(event) {
        let researchValue = event.target.value;
        console.log('Valeur de la recherche')
        console.log(researchValue);
        let cleanValue = researchValue.toLowerCase();
        // console.log('Valeur de la recherche en minuscule');
        // console.log(cleanValue);
        // console.log(cleanValue.indexOf(""));

        // condition > à 3 caractères
        if(cleanValue.length >= 3){
            // mots connu dans le tableau
            if(cleanValue.indexOf("") != -1) {
                // séparation des mots composés de la recherche en plusieurs mots de recherche
                let searchArray = cleanValue.split(" ");
                // console.log(searchArray);
                for (var i = 0; i < searchArray.length; i++) {
                    // tableau des mots de recherche
                    let searchWord = searchArray[i];
                    // console.log('tableau des mots de recherche');
                    // console.log(searchWord);

                    // recherche sur des mots > à 2 caractères
                    if(searchWord.length > 2) {
                        for (var j = 0; j < ingredientsArray.length -1; j++) {

                            // liste des ingredients en minuscule
                            let ingredientList = ingredientsArray[j].toLowerCase();
                            // console.log('resultat de recherche');
                            // console.log(ingredientList);

                            // indexliste des ingredients connu
                            if(ingredientList.indexOf("") != -1) {

                                // séparation des mots composés de la liste des ingredients en plusieurs mots
                                let wordIngredientList = ingredientList.split(" ");
                                // console.log('liste des mots spliter');
                                // console.log(wordIngredientList);

                                for (var K = 0; K < wordIngredientList.length; K++) {

                                    // tableau de liste des mots d'ingredients
                                    let ingredientWord = wordIngredientList[K];
                                    // console.log('liste de mot de recherche');
                                    // console.log(ingredientWord);
                                    if(ingredientWord === searchWord) {
                                        resultForsearchIngredient.push(j);
                                        // console.log('tableau de recherche');
                                        // console.log(resultForsearchIngredient);
                                    }
                                }
                            }
                            else { if(ingredientList === searchWord) {
                                resultForsearchIngredient.push(j);
                                // console.log('tableau de recherche else');
                                // console.log(resultForsearchIngredient);
                                }
                            }
                        }
                        for (var i = 0; i < resultForsearchIngredient.length; i++) {
                            let indexForResultSearchIngredient = resultForsearchIngredient[i];
                            let ingredientByIndex = ingredientsArray[indexForResultSearchIngredient];
                            searchResultArrayFromIngredient.push(ingredientByIndex);                 
                        }
                        console.log('tableau des ingredients suite à la recherche');
                        console.log(searchResultArrayFromIngredient);
                    }
                    // recherche dans le tableau de nom de recette
                    if(searchWord.length > 2) {
                        for (let l = 0; l < recipeNameArray.length; l++) {
                            const nameList = recipeNameArray[l].toLowerCase();
                            // console.log('resultat de recherche');
                            // console.log(nameList);
                            if(nameList.indexOf("") != -1) {
                                let wordNameList = nameList.split(" ");
                                for (var m = 0; m < wordNameList.length; m++) {
                                    let nameWord = wordNameList[m];
                                    if(nameWord === searchWord) {
                                        resultForSearchName.push(l);
                                        // console.log('tableau de recherche des noms de recette');
                                        // console.log(resultForSearchName);
                                    }
                                }
                            }
                            else { if(nameList === searchWord) {
                                resultForSearchName.push(l);
                                }
                            }
                        }
                        for (var i = 0; i < resultForSearchName.length; i++) {
                            let indexForResultSearchName = resultForSearchName[i];
                            let nameRecipeByIndex = recipeNameArray[indexForResultSearchName];
                            searchResultArrayFromNameRecipe.push(nameRecipeByIndex);
                        }
                        console.log('tableau de nom de recette suite à la recherche');
                        console.log(searchResultArrayFromNameRecipe);
                    }

                    // recherche dans le tableau descrition de la recette
                    if(searchWord.length > 2) {
                        for (let n = 0; n < descriptionArray.length; n++) {
                            const descriptionList = descriptionArray[n].toLowerCase();
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
                        for (var i = 0; i < resultForSearchDescription.length; i++) {
                            let indexForResultSearchDescription = resultForSearchDescription[i];
                            let descriptionRecipeByIndex = descriptionArray[indexForResultSearchDescription];
                            searchResultArrayFromDescriptionRecipe.push(descriptionRecipeByIndex);
                        }
                        console.log('tableau des descriptions de recette suite à la recherche');
                        console.log(searchResultArrayFromDescriptionRecipe);
                    }
                }
            }
        }
    }); 
});

