console.log(recipes)

// Tableau des ingredients
let tableauDesIngredients = [];
creerLeTableauDesIngredients(tableauDesIngredients);

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


