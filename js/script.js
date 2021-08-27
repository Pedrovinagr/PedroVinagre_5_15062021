document.addEventListener("DOMContentLoaded", function() {

    // CALL RECIPE FOR HTML
    showRecipes(recipes);
    // RECIPE RESULT TO BE SHOWN
    var recipeResult = [];

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
        // RESET RECIPE RESULT ARRAY TO CLEAR FOR HTML
        recipeResult = [];
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
                            else { 
                                if(ingredientList === searchWord) {
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
        // console.log('tableau recipeResult :');
        // console.log(recipeResult);
        if(recipeResult.length > 0) {
            showRecipes(recipeResult);
        } else {
            showRecipes(recipes);
        }
        console.log('tableau recipeResult :');
        console.log(recipeResult);

        // expore data de la recherche pour créer les filtres
        

        for(var i = 0; i < recipeResult.length; i++) {
            var dataFilterIngredients = recipeResult[i].ingredients;
            for (var j = 0; j < dataFilterIngredients.length; j++) {
                var dataFilterIngredient = dataFilterIngredients[j].ingredient;
                if(!filterIngredientsResultArray.includes(dataFilterIngredient)) {
                    filterIngredientsResultArray.push(dataFilterIngredient);
                }
            }
        }

        let filterAppliancesResultArray = [];
        console.log('tableau filterAppliancesResultArray :');
        console.log(filterAppliancesResultArray);

        for (var i = 0; i < recipeResult.length; i++) {
            var dataFilterAppliances = recipeResult[i].appliance;
            if(!filterAppliancesResultArray.includes(dataFilterAppliances)) {
                filterAppliancesResultArray.push(dataFilterAppliances);
            }
        }

        let filterUstensilsResultArray = [];
        console.log('tableau filterUstensilsResultArray :');
        console.log(filterUstensilsResultArray);

        for (var i = 0; i < recipeResult.length; i++) {
            var dataUstensils = recipeResult[i].ustensils;
            for (var j = 0; j < dataUstensils.length; j++) {
                var dataFilterUstensils = dataUstensils[j];
                if(!filterUstensilsResultArray.includes(dataFilterUstensils)) {
                filterUstensilsResultArray.push(dataFilterUstensils);
                }
            }
        }

        // Insérer les tableaux dans les filtres
        // filtre ingrédient
        var filterIngredient = document.getElementById('ingredients_list');
        var ingredientInFilterHtmlParent = document.createElement('ul');
        
        for(var i = 0; i < filterIngredientsResultArray.length; i++) {
            var ingredientInFilterHtmlChild = document.createElement('li');
            ingredientInFilterHtmlChild.textContent = filterIngredientsResultArray[i];
            ingredientInFilterHtmlChild.className = "ingredients col-4";
            ingredientInFilterHtmlParent.appendChild(ingredientInFilterHtmlChild);
        }
        filterIngredient.appendChild(ingredientInFilterHtmlParent);

        // filtre appareil
        var filterAppliance = document.getElementById('appareils_list');
        var applianceInFilterHtmlParent = document.createElement('ul');

        for(var i = 0; i < filterAppliancesResultArray.length; i++) {
            var applianceInFilterHtmlChild = document.createElement('li');
            applianceInFilterHtmlChild.textContent = filterAppliancesResultArray[i];
            applianceInFilterHtmlChild.className = "ingredients";
            applianceInFilterHtmlParent.appendChild(applianceInFilterHtmlChild);
        }
        filterAppliance.appendChild(applianceInFilterHtmlParent);

        // filtre ustensile
        var filterUstensils = document.getElementById('ustensiles_list');
        var ustensilsInFilterHtmlParent = document.createElement('ul');

        for(var i = 0; i < filterUstensilsResultArray.length; i++) {
            var ustensilsInFilterHtmlChild = document.createElement('li');
            ustensilsInFilterHtmlChild.textContent = filterUstensilsResultArray[i];
            ustensilsInFilterHtmlChild.className = "ingredients";
            ustensilsInFilterHtmlParent.appendChild(ustensilsInFilterHtmlChild);
        }
        filterUstensils.appendChild(ustensilsInFilterHtmlParent);
    });

    // Algo de recherche des filtres

});


// fonction d'affichage des filtres
var chevronDown = document.querySelector('.fa-chevron-down');
var chevronUp = document.querySelector('.fa-chevron-up');

function menuDéroulant() {
document.getElementById('ingredients_list').classList.toggle('is_visible')
}

// SHOW RECIPES IN HTML
function showRecipes(recipes) {
    
    var recipeList = document.getElementById("recipes-list");
    recipeList.innerHTML = "";

    for(var i = 0; i < recipes.length; i++) {

        var recipe = recipes[i];

        var recipeCard = document.createElement("div");
        recipeCard.className = "cards col-4";
    
        var recipeCardImgTop = document.createElement("p");
        recipeCardImgTop.classList.add("card-img-top");
        recipeCard.appendChild(recipeCardImgTop);
    
        var recipeCardBody = document.createElement("div");
        recipeCardBody.classList.add("card-body");
    
        var recipeCardPart1 = document.createElement("div");
        recipeCardPart1.classList.add("part1");
    
        var recipeCardPart1H3 = document.createElement("h3");
        recipeCardPart1H3.classList.add("title_card");
        recipeCardPart1H3.textContent = recipe.name;
        recipeCardPart1.appendChild(recipeCardPart1H3);
    
        var recipeCardPart1Timing = document.createElement("div");
        recipeCardPart1Timing.classList.add("timing");
        
        var recipeCardPart1TimingI = document.createElement("i");
        recipeCardPart1TimingI.className = "far fa-clock";
        recipeCardPart1Timing.appendChild(recipeCardPart1TimingI);
    
        var recipeCardPart1TimingTime = document.createElement("p");
        recipeCardPart1TimingTime.classList.add("time");
        recipeCardPart1TimingTime.textContent = recipe.time + " min";
        recipeCardPart1Timing.appendChild(recipeCardPart1TimingTime);
    
        recipeCardPart1.appendChild(recipeCardPart1Timing);
    
        recipeCardBody.appendChild(recipeCardPart1);
    
        var recipeCardPart2 = document.createElement("div");
        recipeCardPart2.classList.add("part2");
    
        var recipeCardPart2Listing = document.createElement("div");
        recipeCardPart2Listing.classList.add("listing");

        for(var j = 0; j < recipe.ingredients.length; j++) {
            var ingredientInRecipe = recipe.ingredients[j];

            var recipeIngredientI = document.createElement("i");
            var recipeIngredientIStrong = document.createElement("strong");
            recipeIngredientIStrong.textContent = ingredientInRecipe.ingredient + " :";
            recipeIngredientI.appendChild(recipeIngredientIStrong);

            var quantityAndUnit = "";

            if(ingredientInRecipe.quantity) {
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unit;
                }
                if(ingredientInRecipe.unite) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unite;
                }
                
            }
            if(ingredientInRecipe.quantite) {
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unit;
                }
                if(ingredientInRecipe.unite) {
                    quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unite;
                }
            }
            recipeIngredientI.append(quantityAndUnit);
            var recipeIngredientLineBreak = document.createElement("br");
            recipeCardPart2Listing.appendChild(recipeIngredientI);
            recipeCardPart2Listing.appendChild(recipeIngredientLineBreak);
        }
    
        recipeCardPart2.appendChild(recipeCardPart2Listing);
    
        var recipeCardPart2Description = document.createElement("p");
        recipeCardPart2Description.classList.add("description");
        recipeCardPart2Description.textContent = recipe.description;
    
        recipeCardPart2.appendChild(recipeCardPart2Description);
    
        recipeCardBody.appendChild(recipeCardPart2);

        recipeCard.appendChild(recipeCardBody);

        recipeList.appendChild(recipeCard);
    }
}


// document.addEventListener("DOMContentLoaded", function() {
//     // tableau des titres de recette
//     let recipeNameArray = [];
//     console.log('Liste des titres de recette:');
//     console.log(recipeNameArray);

//     // fonction de recherche des titres de recette
//     function concatenateNameRecipes(concatenateName) {
//         for(var i = 0; i < recipes.length; i++) {
//             let nameList = recipes[i].name;
//             if(!concatenateName.includes(nameList)) {
//                 concatenateName.push(nameList);
//             }
//         }
//     }

//     concatenateNameRecipes(recipeNameArray);

//     // tableau des descriptions de toutes les recettes
//     let descriptionArray = [];
//     console.log('Liste des descriptions de toutes les recettes:');
//     console.log(descriptionArray);

//     // fonction de recherche des titres de recette
//     function concatenateDescriptionRecipes(concatenatedescription) {
//         for(var i = 0; i < recipes.length; i++) {
//             let descriptionList = recipes[i].description;
//             if(!concatenatedescription.includes(descriptionList)) {
//                 concatenatedescription.push(descriptionList);
//             }
//         }
//     }

//     concatenateDescriptionRecipes(descriptionArray);

//     // Tableau des ingredients
//     let ingredientsArray = [];
//     console.log('Liste des ingredients:');
//     console.log(ingredientsArray);

//     // fonction de recherche dans recipes de tous les ingredients
//     function concatenateIngredientRecipes(concatenateIngredient) {
//         for(var i = 0; i < recipes.length; i++) {
//             let IngredientsList = recipes[i].ingredients;
//             for(var j = 0; j < IngredientsList.length; j++) {
//                 let ingredient = IngredientsList[j].ingredient;
//                 if(!concatenateIngredient.includes(ingredient)) {
//                     concatenateIngredient.push(ingredient);
//                 }
//             }
//         }
//     }
    
//     concatenateIngredientRecipes(ingredientsArray);

//     // Tableau des appareils
//     let appliancesArray = [];
//     console.log('Liste des appareils:');
//     console.log(appliancesArray);

//     // fonction de recherche dans recipes de tous les appareils
//     function concatenateApplianceRecipes(concatenateAppliance) {
//         for(var i = 0; i < recipes.length; i++) {
//             let appliance = recipes[i].appliance;
//             if(!concatenateAppliance.includes(appliance)) {
//                 concatenateAppliance.push(appliance);
//             }
//         }
//     }
    
//     concatenateApplianceRecipes(appliancesArray);

//     // Tableau des ustensiles
//     let ustensilsArray = [];
//     console.log('Liste des ustensiles:');
//     console.log(ustensilsArray);

//     // fonction de recherche dans recipes de tous les ustensiles
//     function concatenateUstensilRecipes(concatenateUstensil) {
//         for(var i = 0; i < recipes.length; i++) {
//             let ustensilsList = recipes[i].ustensils;
//             for(var j = 0; j < ustensilsList.length; j++) {
//                 let ustensil = ustensilsList[j];
//                 if(!concatenateUstensil.includes(ustensil)) {
//                     concatenateUstensil.push(ustensil);
//                 }
//             }
//         }
//     }
    
//     concatenateUstensilRecipes(ustensilsArray);


//     // Algo  de recherhce par ingredient sur la barre de recherche
//     const centralSearchBar = document.getElementById('searchbar');

//     var searchResultArrayFromIngredient = [];
//     var resultForsearchIngredient = [];

//     var searchResultArrayFromNameRecipe = [];
//     var resultForSearchName = [];

//     var searchResultArrayFromDescriptionRecipe = [];
//     var resultForSearchDescription = [];

//     centralSearchBar.addEventListener('change', function(event) {
//         let researchValue = event.target.value;
//         console.log('Valeur de la recherche')
//         console.log(researchValue);
//         let cleanValue = researchValue.toLowerCase();
//         // console.log('Valeur de la recherche en minuscule');
//         // console.log(cleanValue);
//         // console.log(cleanValue.indexOf(""));

//         // condition > à 3 caractères
//         if(cleanValue.length >= 3){
//             // mots connu dans le tableau
//             if(cleanValue.indexOf("") != -1) {
//                 // séparation des mots composés de la recherche en plusieurs mots de recherche
//                 let searchArray = cleanValue.split(" ");
//                 // console.log(searchArray);
//                 for (var i = 0; i < searchArray.length; i++) {
//                     // tableau des mots de recherche
//                     let searchWord = searchArray[i];
//                     // console.log('tableau des mots de recherche');
//                     // console.log(searchWord);

//                     // recherche sur des mots > à 2 caractères
//                     if(searchWord.length > 2) {
//                         for (var j = 0; j < ingredientsArray.length -1; j++) {

//                             // liste des ingredients en minuscule
//                             let ingredientList = ingredientsArray[j].toLowerCase();
//                             // console.log('resultat de recherche');
//                             // console.log(ingredientList);

//                             // indexliste des ingredients connu
//                             if(ingredientList.indexOf("") != -1) {

//                                 // séparation des mots composés de la liste des ingredients en plusieurs mots
//                                 let wordIngredientList = ingredientList.split(" ");
//                                 // console.log('liste des mots spliter');
//                                 // console.log(wordIngredientList);

//                                 for (var K = 0; K < wordIngredientList.length; K++) {

//                                     // tableau de liste des mots d'ingredients
//                                     let ingredientWord = wordIngredientList[K];
//                                     // console.log('liste de mot de recherche');
//                                     // console.log(ingredientWord);
//                                     if(ingredientWord === searchWord) {
//                                         resultForsearchIngredient.push(j);
//                                         // console.log('tableau de recherche');
//                                         // console.log(resultForsearchIngredient);
//                                     }
//                                 }
//                             }
//                             else { if(ingredientList === searchWord) {
//                                 resultForsearchIngredient.push(j);
//                                 // console.log('tableau de recherche else');
//                                 // console.log(resultForsearchIngredient);
//                                 }
//                             }
//                         }
//                         for (var i = 0; i < resultForsearchIngredient.length; i++) {
//                             let indexForResultSearchIngredient = resultForsearchIngredient[i];
//                             let ingredientByIndex = ingredientsArray[indexForResultSearchIngredient];
//                             searchResultArrayFromIngredient.push(ingredientByIndex);                 
//                         }
//                         console.log('tableau des ingredients suite à la recherche');
//                         console.log(searchResultArrayFromIngredient);
//                     }
//                     // recherche dans le tableau de nom de recette
//                     if(searchWord.length > 2) {
//                         for (let l = 0; l < recipeNameArray.length; l++) {
//                             const nameList = recipeNameArray[l].toLowerCase();
//                             // console.log('resultat de recherche');
//                             // console.log(nameList);
//                             if(nameList.indexOf("") != -1) {
//                                 let wordNameList = nameList.split(" ");
//                                 for (var m = 0; m < wordNameList.length; m++) {
//                                     let nameWord = wordNameList[m];
//                                     if(nameWord === searchWord) {
//                                         resultForSearchName.push(l);
//                                         // console.log('tableau de recherche des noms de recette');
//                                         // console.log(resultForSearchName);
//                                     }
//                                 }
//                             }
//                             else { if(nameList === searchWord) {
//                                 resultForSearchName.push(l);
//                                 }
//                             }
//                         }
//                         for (var i = 0; i < resultForSearchName.length; i++) {
//                             let indexForResultSearchName = resultForSearchName[i];
//                             let nameRecipeByIndex = recipeNameArray[indexForResultSearchName];
//                             searchResultArrayFromNameRecipe.push(nameRecipeByIndex);
//                         }
//                         console.log('tableau de nom de recette suite à la recherche');
//                         console.log(searchResultArrayFromNameRecipe);
//                     }

//                     // recherche dans le tableau descrition de la recette
//                     if(searchWord.length > 2) {
//                         for (let n = 0; n < descriptionArray.length; n++) {
//                             const descriptionList = descriptionArray[n].toLowerCase();
//                             if(descriptionList.indexOf("") != -1) {
//                                 let wordDescriptionList = descriptionList.split(" ");
//                                 for (var o = 0; o < wordDescriptionList.length; o++) {
//                                     let descriptionWord = wordDescriptionList[o];
//                                     if(descriptionWord === searchWord) {
//                                         resultForSearchDescription.push(n);
//                                     }
//                                 }
//                             }
//                             else { if(descriptionList === searchWord) {
//                                 resultForSearchDescription.push(n);
//                                 }
//                             }
//                         }
//                         for (var i = 0; i < resultForSearchDescription.length; i++) {
//                             let indexForResultSearchDescription = resultForSearchDescription[i];
//                             let descriptionRecipeByIndex = descriptionArray[indexForResultSearchDescription];
//                             searchResultArrayFromDescriptionRecipe.push(descriptionRecipeByIndex);
//                         }
//                         console.log('tableau des descriptions de recette suite à la recherche');
//                         console.log(searchResultArrayFromDescriptionRecipe);
//                     }
//                 }
//             }
//         }
        
//         // supprimer le recipes HTML
//         var recipesHtml = document.getElementById('recipes_html');
//         var recipesParent = document.getElementById('container');

//         recipesParent.removeChild(recipesHtml);

//         // Insérer le tableau des ingredients dans le filtre
//         let ingredientMenu = document.getElementById('ingredients_list');
//         let listOfIngredientsHtml = document.createElement('ul');

//         for(var i = 0; i < searchResultArrayFromIngredient.length; i++) {
//             var IngredientInTheMenu = document.createElement('li');
//             IngredientInTheMenu.textContent = searchResultArrayFromIngredient[i];
//             IngredientInTheMenu.classList = "ingredients";
//             listOfIngredientsHtml.appendChild(IngredientInTheMenu);
//         }

//         ingredientMenu.appendChild(listOfIngredientsHtml);
//     });
// });

// var chevronDown = document.querySelector('.fa-chevron-down');
// var chevronUp = document.querySelector('.fa-chevron-up');

// function menuDéroulant() {
// document.getElementById('ingredients_list').classList.toggle('is_visible')
// }
