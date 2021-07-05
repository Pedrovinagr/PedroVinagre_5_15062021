//DOM
const searchTagIngredients = document.querySelector('.search_ingredient');
const tagIngredient = document.getElementById('tag_ingredient');
const tagMotion = document.querySelector('.motion');

tagIngredient.onkeyup = (e) =>{
    let ingredientData = e.target.value;
    let emptyArray = [];

    if(ingredientData){
        emptyArray = ingredient.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(ingredientData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchTagIngredients.classList.add('active');
    }
    showIngredients(emptyArray);
}

function showIngredients(list){
    let listData;
    if(!list.length){

    }
    else{
        listData = list.join('');
    }
    tagMotion.innerHTML = listData;
}