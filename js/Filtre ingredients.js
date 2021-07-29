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