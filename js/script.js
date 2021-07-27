document.addEventListener("DOMContentLoaded", function() {

    // Tableau des ingredients
    let tableauDesIngredients = [];
    

    console.log('Liste des ingredient dans le tableau :');
    console.log(tableauDesIngredients);

    function creerLeTableauDesIngredients(regroupementDesIngredients) {
        for(var i = 0; i < recipes.length; i++) {
            let listeDesIngredients = recipes[i].ingredients;
            for(var j = 0; j < listeDesIngredients.length; j++) {
                let ingredient = listeDesIngredients[j].ingredient;
                if(!regroupementDesIngredients.includes(ingredient)) {
                    regroupementDesIngredients.push(ingredient);
                }
            }
        }
    }
    
    creerLeTableauDesIngredients(tableauDesIngredients);

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

        if(texteSaisiePourLaRecherche !==""){
            var valeurDeRecherche = texteSaisiePourLaRecherche.tolowerCase();
            if(valeurDeRecherche.indexOf("") != -1) {
                var valeurSpliter = valeurDeRecherche.split(" ")
                for(var i = 0; i < valeurSpliter.length; i++) {
                    let motDeRecherche = valeurSpliter[i];
                    if (motDeRecherche > 2) {
                        for(var j = 0; j < tableauDesIngredients; j++) {
                            var ingredientVarJ = tableauDesIngredients[j].tolowerCase();
                        }
                        tableauDeRecherche.push(i);
                    }
                }
            }
            for(var j = 0; j < tableauDeRecherche.length; j++) {
                var indexDeMonIngredient = tableauDeRecherche[j];
                var monIngredient = tableauDesIngredients[indexDeMonIngredient];
            }
            console.log('résultat de la recherche')
            console.log(monIngredient)
        }
    });
});

