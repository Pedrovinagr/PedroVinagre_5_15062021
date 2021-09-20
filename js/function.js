// FONCTION RESULTAT DU BESOIN DE RECHERCHE
function resultOfResearchNeed(needValue){
    var cleanValue = needValue.toLowerCase();
    // SEARCH WORD VALUE
    if(cleanValue.length >= 3){
        let searchArray = cleanValue.split(" ");
        for (var i = 0; i < searchArray.length; i++) {
            var searchWords = searchArray[i];
            if(searchWords.length > 2) {
                if(!inputDataOfSearchBar.includes(searchWords)) {
                inputDataOfSearchBar.push(searchWords);
                }
            } 
        }
        return inputDataOfSearchBar;
    }
    else{
        document.getElementById('non_conf').innerHTML = 'Merci de renseigner suffisament de caractères'
        document.getElementById('non_conf').style.color = 'red';
        document.getElementById('non_conf').style.fontSize = '1.2rem';
    }
}

// SEARCH INSIDE ALL RECIPES
function searchAllRecipes (dataSearchBar){
    for(var i = 0; i < recipes.length - 1; i++) {
        var recipe = recipes[i];    
        var ingredientsInRecipe = recipe.ingredients;
        var nameInRecipe = recipe.name;
        var descriptionInRecipe = recipe.description;
        
        for(var j = 0; j < dataSearchBar.length; j++) {
            var resultSearchIngredient = dataSearchBar[j];
            for(var k = 0; k < ingredientsInRecipe.length; k++) {
                var ingredientInRecipe = ingredientsInRecipe[k];
                if(ingredientInRecipe.ingredient == resultSearchIngredient) {
                    if(!recipeResult.includes(recipe)) {
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for (var j = 0; j < dataSearchBar.length; j++) {
            var resultSearchNameRecipe = dataSearchBar[j];
            if (resultSearchNameRecipe == nameInRecipe) {
                if (!recipeResult.includes(recipe)) {
                    recipeResult.push(recipe);
                }
            }
        }

        for (var j = 0; j < dataSearchBar.length; j++) {
            var resultSearchDescriptionRecipe = dataSearchBar[j];
            if (resultSearchDescriptionRecipe == descriptionInRecipe) {
                if (!recipeResult.includes(recipe)) {
                    recipeResult.push(recipe);
                }
            }
        } 
    }
    return recipeResult;
}

// FILTER INGREDIENT
function menuDéroulantIng() {
    document.getElementById('ingredients_list').classList.toggle('is_visible_ing');
    
    var idIconFilter = document.getElementById('ingredients_list');
    var classIconFilter = idIconFilter.classList;

    if(classIconFilter.contains("is_visible_ing")) {
        var changeChevron = document.getElementById('btn_filter_ing');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_ing');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-up";
        visibleList.appendChild(changeChevron);  
    }
    else{
        var changeChevron = document.getElementById('btn_filter_ing');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_ing');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-down";
        visibleList.appendChild(changeChevron);   
    }
}

// FILTER APPLIANCE
function menuDéroulantApp() {
    document.getElementById('appareils_list').classList.toggle('is_visible_app');

    var idIconFilter = document.getElementById('appareils_list');
    var classIconFilter = idIconFilter.classList;

    if(classIconFilter.contains("is_visible_app")) {
        var changeChevron = document.getElementById('btn_filter_app');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_app');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-up";
        visibleList.appendChild(changeChevron);  
    }
    else{
        var changeChevron = document.getElementById('btn_filter_app');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_app');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-down";
        visibleList.appendChild(changeChevron);   
    }
}

// FILTER USTENSIL
function menuDéroulantUst() {
    document.getElementById('ustensiles_list').classList.toggle('is_visible_ust');

    var idIconFilter = document.getElementById('ustensiles_list');
    var classIconFilter = idIconFilter.classList;

    if(classIconFilter.contains("is_visible_ust")) {
        var changeChevron = document.getElementById('btn_filter_ust');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_ust');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-up";
        visibleList.appendChild(changeChevron);  
    }
    else{
        var changeChevron = document.getElementById('btn_filter_ust');
        changeChevron.innerHTML = "";
        visibleList = document.getElementById('btn_filter_ust');
        changeChevron = document.createElement("i");
        changeChevron.className = "chevron fas fa-chevron-down";
        visibleList.appendChild(changeChevron);
    }
}

// SHOW RECIPES IN HTML
function showRecipes(recipescard) {
    var recipeList = document.getElementById("recipes-list");

    for(var i = 0; i < recipescard.length; i++) {
        var recipe = recipescard[i];

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
            
            if(ingredientInRecipe.quantity){
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unit;
                }
                else{
                    quantityAndUnit = " " + ingredientInRecipe.quantity
                }

                if(ingredientInRecipe.unite) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unite;
                }
                       
            }

            if(ingredientInRecipe.quantite) {
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unit;
                }
                else{
                    quantityAndUnit = " " + ingredientInRecipe.quantite
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

// SHOW FILTER INGREDIENT
function showIngredients(ingredientArray) {
    var filterIngredient = document.getElementById('ingredients_list');
    var ingredientInFilterHtmlParent = document.createElement('ul');
    // ingredientInFilterHtmlParent.id = "ingredients_ul"

    for (var i = 0; i < ingredientArray.length; i++) {
        var ingredientInFilterHtmlChild = document.createElement('li');
        // ingredientInFilterHtmlChild.addEventListener("click", createIngredientFilterTag);
        ingredientInFilterHtmlChild.textContent = ingredientArray[i];
        ingredientInFilterHtmlChild.className = "ingredients";
        ingredientInFilterHtmlChild.id = "ingredients"
        ingredientInFilterHtmlParent.appendChild(ingredientInFilterHtmlChild);
    }
    
    filterIngredient.appendChild(ingredientInFilterHtmlParent);
}

// SHOW FILTER APPLIANCE
function showAppliance(appliancesArray) {
    var filterAppliance = document.getElementById('appareils_list');
    var applianceInFilterHtmlParent = document.createElement('ul');

    for(var i = 0; i < appliancesArray.length; i++) {
        var applianceInFilterHtmlChild = document.createElement('li');
        // applianceInFilterHtmlChild.addEventListener("click", createApplianceFilterTag);
        applianceInFilterHtmlChild.textContent = appliancesArray[i];
        applianceInFilterHtmlChild.className = "appliances";
        applianceInFilterHtmlParent.appendChild(applianceInFilterHtmlChild);
    }
    filterAppliance.appendChild(applianceInFilterHtmlParent);
}

// SHOW FILTER USTENSIL
function showUstensils(usentilsArray) {
    var filterUstensils = document.getElementById('ustensiles_list');
    var ustensilsInFilterHtmlParent = document.createElement('ul');

    for(var i = 0; i < usentilsArray.length; i++) {
        var ustensilsInFilterHtmlChild = document.createElement('li');
        // ustensilsInFilterHtmlChild.addEventListener("click", createUstensilFilterTag);
        ustensilsInFilterHtmlChild.textContent = usentilsArray[i];
        ustensilsInFilterHtmlChild.className = "ustensils";
        ustensilsInFilterHtmlParent.appendChild(ustensilsInFilterHtmlChild);
    }
    filterUstensils.appendChild(ustensilsInFilterHtmlParent);
}

// // TAG INGREDIENT HTML
// function createIngredientFilterTag(event) {
//     var ingredientSelected = event.target.innerText;
//     collectValueTagIngredient(ingredientSelected);

//     var tagContainer = document.getElementById("ingredients__tag");
//     var filterIngredient = document.createElement("div");
//     filterIngredient.classList.add("tag_input");
//     filterIngredient.id = "ingredients_tag";
//     var textIngredient = document.createElement("p");
//     textIngredient.classList.add("text_ingredient");
//     textIngredient.id = "ingredient_text"
//     textIngredient.textContent = ingredientSelected;
//     filterIngredient.appendChild(textIngredient);
//     tagContainer.appendChild(filterIngredient);

//     var iconTag = document.createElement("div");
//     iconTag.classList.add("icon_tag");
//     iconTag.id = "remove_ingredient";
//     var iconImage = document.createElement("i");

//     var listIngredientbeforeTag = document.querySelectorAll('.ingredients');
//     for (var i = 0; i < listIngredientbeforeTag.length; i++) {
//        var ingredientListBeforeTag = listIngredientbeforeTag[i].innerText; 
//        filterIngredientArrayBeforeTag.push(ingredientListBeforeTag);
//     }

//     iconImage.addEventListener("click", removeTagIngredient);

//     iconImage.className = "far fa-times-circle";
//     iconTag.appendChild(iconImage);
//     filterIngredient.appendChild(iconTag);

//     var indexOfIngredients = ingredientArrayDisplayInFilter.indexOf(ingredientSelected);
//     ingredientArrayDisplayInFilter.splice(indexOfIngredients, 1);
//     showIngredients(ingredientArrayDisplayInFilter);

//     iconImage.addEventListener("click", addIngredientFilter);   
// }

// // TAG APPLIANCE HTML
// function createApplianceFilterTag(event) {
//     var applianceSelected = event.target.innerText;
//     collectValueTagAppliance(applianceSelected);

//     var tagContainer = document.getElementById("appareils__tag");
//     var filterAppliance = document.createElement("div");
//     filterAppliance.classList.add("tag_input");
//     filterAppliance.id = "appareils_tag";
//     var textAppliance = document.createElement("p");
//     textAppliance.classList.add("text_appareil");
//     textAppliance.textContent = applianceSelected;
//     filterAppliance.appendChild(textAppliance);
//     tagContainer.appendChild(filterAppliance);

//     var iconTag = document.createElement("div");
//     iconTag.classList.add("icon_tag");
//     var iconImage = document.createElement("i");

//     var listAppliancebeforeTag = document.querySelectorAll('.appliances');
//     for (var i = 0; i < listAppliancebeforeTag.length; i++) {
//        var applianceListBeforeTag = listAppliancebeforeTag[i].innerText; 
//        filterApplianceArrayBeforeTag.push(applianceListBeforeTag);
//     }

//     iconImage.addEventListener("click", removeTagAppliance);

//     iconImage.className = "far fa-times-circle";
//     iconTag.appendChild(iconImage);
//     filterAppliance.appendChild(iconTag);

//     var indexOfAppliances = applianceArrayDisplayInFilter.indexOf(applianceSelected);
//     applianceArrayDisplayInFilter.splice(indexOfAppliances, 1);
//     showAppliance(applianceArrayDisplayInFilter);
//     iconImage.addEventListener("click", addApplianceFilter);
// }

// // TAG USTENSIL HTML
// function createUstensilFilterTag(event) {
//     var ustensilSelected = event.target.innerText;
//     collectValueTagUstensil(ustensilSelected);

//     var tagContainer = document.getElementById("ustensils__tag");
//     var filterUstensil = document.createElement("div");
//     filterUstensil.classList.add("tag_input");
//     filterUstensil.id = "ustensiles_tag";
//     var textUstensil = document.createElement("p");
//     textUstensil.classList.add("text_ustensile");
//     textUstensil.textContent = ustensilSelected;
//     filterUstensil.appendChild(textUstensil);
//     tagContainer.appendChild(filterUstensil);

//     var iconTag = document.createElement("div");
//     iconTag.classList.add("icon_tag");
//     var iconImage = document.createElement("i");

//     var listUstensilbeforeTag = document.querySelectorAll('.ustensils');
//     for (var i = 0; i < listUstensilbeforeTag.length; i++) {
//        var ustensilListBeforeTag = listUstensilbeforeTag[i].innerText; 
//        filterUstensilArrayBeforeTag.push(ustensilListBeforeTag);
//     }

//     iconImage.addEventListener("click", removeTagUstensil);

//     iconImage.className = "far fa-times-circle";
//     iconTag.appendChild(iconImage);
//     filterUstensil.appendChild(iconTag);

//     var indexOfUstensils = ustensilArrayDisplayInFilter.indexOf(ustensilSelected);
//     ustensilArrayDisplayInFilter.splice(indexOfUstensils, 1);
//     showUstensils(ustensilArrayDisplayInFilter);

//     iconImage.addEventListener("click", addUstensilFilter);
// }

// // REMOVE TAG INGREDIENT
// function removeTagIngredient(event) {
//     var tag = event.target;
//     var tagIngredient = document.getElementById('ingredients__tag');
//     var idParentOfIngredientTag = tag.parentElement.parentElement;
//     tagIngredient.removeChild(idParentOfIngredientTag);
//     var ingredientSelected = idParentOfIngredientTag.firstChild.innerText

//     collectValueTagIngredient(ingredientSelected);
// }

// // REMOVE TAG APPLIANCE
// function removeTagAppliance(event) {
//     var tag = event.target;
//     var tagAppliance = document.getElementById('appareils__tag');
//     var idParentOfApplianceTag = tag.parentElement.parentElement;
//     tagAppliance.removeChild(idParentOfApplianceTag);
//     var applianceSelected = idParentOfApplianceTag.firstChild.innerText
//     collectValueTagAppliance(applianceSelected);
// }

// // REMOVE TAG USTENSIL
// function removeTagUstensil(event) {
//     var tag = event.target;
//     var tagUstensil = document.getElementById('ustensils__tag');
//     var idParentOfUstensilTag = tag.parentElement.parentElement;
//     tagUstensil.removeChild(idParentOfUstensilTag);
//     var ustensilSelected = idParentOfUstensilTag.firstChild.innerText

//     collectValueTagUstensil(ustensilSelected);
// }

// // ADD TAG INGREDIENT REMOVE IN THE FILTER
// function addIngredientFilter(event){
//     var iconRemove = event.target
//     var iconRemoveParent = iconRemove.parentElement.parentElement;
//     var valueTagRemove = iconRemoveParent.innerText
//     var indexOfIngredientsRemove = filterIngredientArrayBeforeTag.indexOf(valueTagRemove);

//     newingredientArrayForFilter.splice(indexOfIngredientsRemove, 0, valueTagRemove);
//     showIngredients(newingredientArrayForFilter);
// }

// // ADD TAG APPAREIL REMOVE IN THE FILTER
// function addApplianceFilter(event){
//     var iconRemove = event.target
//     var iconRemoveParent = iconRemove.parentElement.parentElement;
//     var valueTagRemove = iconRemoveParent.innerText
//     var indexOfAppliancesRemove = filterApplianceArrayBeforeTag.indexOf(valueTagRemove);

//     newApplianceArrayForFilter.splice(indexOfAppliancesRemove, 0, valueTagRemove);
//     showAppliance(newApplianceArrayForFilter);
// }

// // ADD TAG USTENSIL REMOVE IN THE FILTER
// function addUstensilFilter(event){
//     var iconRemove = event.target
//     var iconRemoveParent = iconRemove.parentElement.parentElement;
//     var valueTagRemove = iconRemoveParent.innerText
//     var indexOfUstensilsRemove = filterUstensilArrayBeforeTag.indexOf(valueTagRemove);

//     newUstensilArrayForFilter.splice(indexOfUstensilsRemove, 0, valueTagRemove);
//     showUstensils(newUstensilArrayForFilter);
// }


// // FONCTION D'AFFICHAGE DES RECETTES PAR RAPPORT AU TAG INGREDIENT
// var ingredientTagValue = [];
// var applianceTagValue = [];
// var ustensilTagValue = [];

// // COLLECT VALUE INGREDIENT
// function collectValueTagIngredient(value) {
//     if(ingredientTagValue.includes(value)) {
//         var indexOfValue = ingredientTagValue.indexOf(value);
//         ingredientTagValue.splice(indexOfValue, 1);
//     }
//     else{
//         ingredientTagValue.push(value);
//     }

//     if(ingredientTagValue.length > 0) {
//         if(recipeResult.length > 0) {
//             for(var i = 0; i < recipeResult.length; i++) {
//                 let recipe = recipeResult[i];
//                 let ingredientsInRecipe = recipe.ingredients;
                
//                 for(var j = 0; j < ingredientTagValue.length; j++) {
//                     let resultTagIngredient = ingredientTagValue[j];

//                     for(var k = 0; k < ingredientsInRecipe.length; k++) {
//                         let ingredientInRecipe = ingredientsInRecipe[k].ingredient;

//                         if(ingredientInRecipe === resultTagIngredient) {
//                             if(!recipeResultFilter.includes(recipe)) {
//                                 recipeResultFilter.push(recipe);
//                             }
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipeResult);
//             }
//         }
//         else{
//             for(var i = 0; i < recipes.length; i++) {
//                 var recipe = recipes[i];
//                 var ingredientsInRecipe = recipe.ingredients;
                
//                 for(var j = 0; j < ingredientTagValue.length; j++) {
//                     var resultTagIngredient = ingredientTagValue[j];

//                     for(var k = 0; k < ingredientsInRecipe.length; k++) {
//                         var ingredientInRecipe = ingredientsInRecipe[k].ingredient;

//                         if(ingredientInRecipe === resultTagIngredient) {
//                             if(!recipeResultFilter.includes(recipe)) {
//                                 recipeResultFilter.push(recipe);
//                             }
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipes);
//             }
//         }
//     }
// }

// // COLLECT VALUE APPLIANCE
// function collectValueTagAppliance(value) {
//     if(applianceTagValue.includes(value)) {
//         var indexOfValue = applianceTagValue.indexOf(value);
//         applianceTagValue.splice(indexOfValue, 1);
//     }
//     else{
//         applianceTagValue.push(value);
//     }

//     if(applianceTagValue.length > 0) {
//         if(recipeResult.length > 0) {
//             for(var i = 0; i < recipeResult.length; i++) {
//                 let recipe = recipeResult[i];
//                 let applianceInRecipe = recipe.appliance;
                
//                 for(var j = 0; j < applianceTagValue.length; j++) {
//                     let resultTagAppliance = applianceTagValue[j];

//                     if(applianceInRecipe === resultTagAppliance) {
//                         if(!recipeResultFilter.includes(recipe)) {
//                             recipeResultFilter.push(recipe);
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipeResult);
//             }
//         }
//         else{
//             for(var i = 0; i < recipes.length; i++) {
//                 let recipe = recipes[i];
//                 let applianceInRecipe = recipe.appliance;
                
//                 for(var j = 0; j < applianceTagValue.length; j++) {
//                     let resultTagAppliance = applianceTagValue[j];

//                     if(applianceInRecipe === resultTagAppliance) {
//                         if(!recipeResultFilter.includes(recipe)) {
//                             recipeResultFilter.push(recipe);
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipes);
//             }
//         }
//     }
// }

// // COLLECT VALUE USTENSIL
// function collectValueTagUstensil(value) {
//     if(ustensilTagValue.includes(value)) {
//         var indexOfValue = ustensilTagValue.indexOf(value);
//         ustensilTagValue.splice(indexOfValue, 1);
//     }
//     else{
//         ustensilTagValue.push(value);
//     }

//     if(ustensilTagValue.length > 0) {
//         if(recipeResult.length > 0) {
//             for(var i = 0; i < recipeResult.length; i++) {
//                 let recipe = recipeResult[i];
//                 let ustensilsInRecipe = recipe.ustensils;
                
//                 for(var j = 0; j < ustensilTagValue.length; j++) {
//                     let resultTagUstensil = ustensilTagValue[j];

//                     for(var k = 0; k < ustensilsInRecipe.length; k++) {
//                         let ustensilInRecipe = ustensilsInRecipe[k];

//                         if(ustensilInRecipe === resultTagUstensil) {
//                             if(!recipeResultFilter.includes(recipe)) {
//                                 recipeResultFilter.push(recipe);
//                             }
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipeResult);
//             }
//         }
//         else{
//             for(var i = 0; i < recipes.length; i++) {
//                 let recipe = recipes[i];
//                 let ustensilsInRecipe = recipe.ustensils;
                
//                 for(var j = 0; j < ustensilTagValue.length; j++) {
//                     let resultTagUstensil = ustensilTagValue[j];

//                     for(var k = 0; k < ustensilsInRecipe.length; k++) {
//                         let ustensilInRecipe = ustensilsInRecipe[k];

//                         if(ustensilInRecipe === resultTagUstensil) {
//                             if(!recipeResultFilter.includes(recipe)) {
//                                 recipeResultFilter.push(recipe);
//                             }
//                         }
//                     }
//                 }
//             }
//             if(recipeResultFilter.length > 0) {
//                 showRecipes(recipeResultFilter);
//             } else {
//                 showRecipes(recipes);
//             }
//         }
//     }
// }