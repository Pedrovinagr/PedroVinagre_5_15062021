// import de variable
// import {ingredientArrayAffichee} from '.script/js'
// fonction de recherche des titres de recette
function concatenateNameRecipes(concatenateName) {
    for(var i = 0; i < recipes.length; i++) {
        let nameList = recipes[i].name;
        if(!concatenateName.includes(nameList)) {
            concatenateName.push(nameList);
        }
    }
}

// fonction de recherche des descriptions de recette
function concatenateDescriptionRecipes(concatenatedescription) {
    for(var i = 0; i < recipes.length; i++) {
        let descriptionList = recipes[i].description;
        if(!concatenatedescription.includes(descriptionList)) {
            concatenatedescription.push(descriptionList);
        }
    }
}

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

// fonction de recherche dans recipes de tous les appareils
function concatenateApplianceRecipes(concatenateAppliance) {
    for(var i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance;
        if(!concatenateAppliance.includes(appliance)) {
            concatenateAppliance.push(appliance);
        }
    }
}

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

// fonction resultat du besoin de recherche
function resultOfResearchNeed(needValue){

    // var researchValue = needValue.target.value;
    var cleanValue = needValue.toLowerCase();
    // console.log(cleanValue)
    var resultSearchWords = [];
    // console.log(resultSearchWords)
    // SEARCH WORD VALUE
    if(cleanValue.length >= 3){
        if(cleanValue.indexOf("") != -1) {
            let searchArray = cleanValue.split(" ");
            // console.log(searchArray)
            for (var i = 0; i < searchArray.length; i++) {
                var searchWords = searchArray[i];
                // console.log(searchWords)
                if(!resultSearchWords.includes(searchWords)) {
                    resultSearchWords.push(searchWords);
                }
            }
            return resultSearchWords
        }
        
    }
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

function showIngredients(ingredientArray) {
    var filterIngredient = document.getElementById('ingredients_list');
    filterIngredient.innerHTML = "";
        var ingredientInFilterHtmlParent = document.createElement('ul');
        
        for(var i = 0; i < ingredientArray.length; i++) {
            var ingredientInFilterHtmlChild = document.createElement('li');
            ingredientInFilterHtmlChild.addEventListener("click", createIngredientFilterTag);
            ingredientInFilterHtmlChild.textContent = ingredientArray[i];
            ingredientInFilterHtmlChild.className = "ingredients";
            ingredientInFilterHtmlParent.appendChild(ingredientInFilterHtmlChild);
        }
        filterIngredient.appendChild(ingredientInFilterHtmlParent);
}

function showAppliance(appliances) {
    var filterAppliance = document.getElementById('appareils_list');
    filterAppliance.innerHTML = "";
        var applianceInFilterHtmlParent = document.createElement('ul');

        for(var i = 0; i < appliances.length; i++) {
            var applianceInFilterHtmlChild = document.createElement('li');
            applianceInFilterHtmlChild.addEventListener("click", createApplianceFilterTag);
            applianceInFilterHtmlChild.textContent = appliances[i];
            applianceInFilterHtmlChild.className = "appliances col-4";
            applianceInFilterHtmlParent.appendChild(applianceInFilterHtmlChild);
        }
        filterAppliance.appendChild(applianceInFilterHtmlParent);
}

function showUstensils(usentils) {
    var filterUstensils = document.getElementById('ustensiles_list');
    filterUstensils.innerHTML = "";
        var ustensilsInFilterHtmlParent = document.createElement('ul');

        for(var i = 0; i < usentils.length; i++) {
            var ustensilsInFilterHtmlChild = document.createElement('li');
            ustensilsInFilterHtmlChild.addEventListener("click", createUstensilFilterTag);
            ustensilsInFilterHtmlChild.textContent = usentils[i];
            ustensilsInFilterHtmlChild.className = "ustensils col-4";
            ustensilsInFilterHtmlParent.appendChild(ustensilsInFilterHtmlChild);
        }
        filterUstensils.appendChild(ustensilsInFilterHtmlParent);
}

// TAG INGREDIENT HTML
function createIngredientFilterTag(event) {
    var ingredientSelected = event.target.innerText;
    collectValueTagIngredient(ingredientSelected);
    var tagContainer = document.getElementById("ingredients__tag");
    // tagContainer.innerHTML = "";
    var filterIngredient = document.createElement("div");
    filterIngredient.classList.add("tag_input");
    filterIngredient.id = "ingredients_tag";
    var textIngredient = document.createElement("p");
    textIngredient.classList.add("text_ingredient");
    textIngredient.textContent = ingredientSelected;
    filterIngredient.appendChild(textIngredient);
    tagContainer.appendChild(filterIngredient);

    var iconTag = document.createElement("div");
    iconTag.classList.add("icon_tag");
    iconTag.id = "remove_ingredient";
    var iconImage = document.createElement("i");
    iconImage.addEventListener("click", removeTagIngredient);
    iconImage.className = "far fa-times-circle";
    iconTag.appendChild(iconImage);
    filterIngredient.appendChild(iconTag);

    var ingredientArrayDisplayed = [];
    console.log(ingredientArrayDisplayed)
    // var indexOfIngredients = ingredientArrayDisplayed.indexOf(ingredientSelected);
    // console.log(indexOfIngredients);
    // ingredientArrayAffichee.splice(indexOfIngredients, 1);
    // showIngredients(ingredientArrayAffichee);

    // function removeTagIngredient() {
        // ingredientSelected.value = null;
        // var ingredientArrayShown = textIngredient;
        // var indexOfIngredients = ingredientArrayShown.indexOf(ingredientSelected);
        // console.log(indexOfIngredients);
        // ingredientArrayShown.splice(ingredientSelected, 1);
        // createIngredientFilterTag();
        
        // // var btnDeletedTagIngredient = document.getElementById("remove_ingredient")
        // // btnDeletedTagIngredient.addEventListener("click", function() {
        // var tagIngredient = document.getElementById('ingredients_tag');
        // tagIngredient = innerHTML = "";
        // // });
    // }
    
}

// REMOVE INGREDIENT INSIDE FILTER INGREDIENT WHY SELECTED IN TAG
// function removeIngredientSelectedTag (ArrayIngredients) {
//     var ingredientArrayShown = ArrayIngredients;
//     var indexOfIngredients = ingredientArrayShown.indexOf(collectValueTagIngredient);
//     // console.log(indexOfIngredients);
//     ingredientArrayShown.splice(indexOfIngredients, 1);
//     showIngredients(ingredientArrayShown);
// }

// TAG APPLIANCE HTML
function createApplianceFilterTag(event) {
    var applianceSelected = event.target.innerText;
    collectValueTagAppliance(applianceSelected)
    var tagContainer = document.getElementById("appareils__tag");
    // tagContainer.innerHTML = "";
    var filterAppliance = document.createElement("div");
    filterAppliance.classList.add("tag_input");
    filterAppliance.id = "appareils_tag";
    var textAppliance = document.createElement("p");
    textAppliance.classList.add("text_appareil");
    textAppliance.textContent = applianceSelected;
    filterAppliance.appendChild(textAppliance);
    tagContainer.appendChild(filterAppliance);

    var iconTag = document.createElement("div");
    iconTag.classList.add("icon_tag");
    var iconImage = document.createElement("i");
    iconImage.className = "far fa-times-circle";
    iconTag.appendChild(iconImage);
    filterAppliance.appendChild(iconTag);
}

// TAG USTENSIL HTML
function createUstensilFilterTag(event) {
    var ustensilSelected = event.target.innerText;
    collectValueTagUstensil(ustensilSelected)
    var tagContainer = document.getElementById("ustensils__tag");
    // tagContainer.innerHTML = "";
    var filterUstensil = document.createElement("div");
    filterUstensil.classList.add("tag_input");
    filterUstensil.id = "ustensiles_tag";
    var textUstensil = document.createElement("p");
    textUstensil.classList.add("text_ustensile");
    textUstensil.textContent = ustensilSelected;
    filterUstensil.appendChild(textUstensil);
    tagContainer.appendChild(filterUstensil);

    var iconTag = document.createElement("div");
    iconTag.classList.add("icon_tag");
    var iconImage = document.createElement("i");
    iconImage.className = "far fa-times-circle";
    iconTag.appendChild(iconImage);
    filterUstensil.appendChild(iconTag);
}

// REMOVE TAG INGREDIENT
function removeTagIngredient() {
    var ingredientTag = document.getElementById('remove_ingredient')
    var tagingredient = document.getElementById('ingredients_tag')
    var idParentOfIngredientTag = ingredientTag.parentElement.parentElement
    idParentOfIngredientTag.removeChild(tagingredient);

    // var indexOfIngredients = ingredientArrayShown.indexOf(ingredientSelected);
    // console.log(indexOfIngredients);
    // ingredientArrayShown.splice(indexOfIngredients, 1);
    // showIngredients(ingredientArrayShown);
    
    // // var btnDeletedTagIngredient = document.getElementById("remove_ingredient")
    // // btnDeletedTagIngredient.addEventListener("click", function() {
    // var tagIngredient = document.getElementById('ingredients_tag');
    // tagIngredient = innerHTML = "";
    // // });
}

// COLLECT VALUE TAG

// var tagIngredientValue = [];
// collectValueTagIngredient(tagIngredientValue);
var ingredientTagValue = [];

function collectValueTagIngredient(value) {
    
    ingredientTagValue.push(value);
    // console.log('tag dans function : ' + ingredientTagValue);
    // for (var i = 0; i < ingredientTagValue.length; i++) {
    //     let ingredientsValue = ingredientTagValue[i];
    //     // console.log("tableau tag ingredient : " + ingredientTagValue);
    //     if(!tagIngredientValue.includes(ingredientsValue)) {
    //         tagIngredientValue.push(ingredientsValue);
    //     }
        
    // }

    // if(ingredientTagValue != "") {
    //     let wordTagIngredients = value.toLowerCase().split(" ");
    //     console.log("mot du tag : " + wordTagIngredients);
    //     for (var i = 0; i < wordTagIngredients.length; i++) {
    //         let wordTagIngredient = wordTagIngredients[i];
    //         console.log("mot du tag : " + wordTagIngredient);
    //     }
    // }
    
}


// console.log('tag en dehors de la function : ' + collectValueTagIngredient.value);

function collectValueTagAppliance(value) {
    var tagApplianceValue = [];
    tagApplianceValue.push(value);
}

function collectValueTagUstensil(value) {
    var tagUstensilValue = [];
    tagUstensilValue.push(value);
}

// fonction d'affichage des filtres
    var chevronDown = document.querySelector('.fa-chevron-down');
    var chevronUp = document.querySelector('.fa-chevron-up');

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