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
        showIngredients(emptyArray);

        let allList = tagMotion.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute('onclick', 'select(this)');
        }
    }
    else{
        searchTagIngredients.classList.remove('active');
    }
    
}

function select(element){
    let selectUserData = element.textContent;
    tagIngredient.value = selectUserData;
    searchTagIngredients.classList.remove('active');
}

function showIngredients(list){
    let listData;
    if(!list.length){
        userValue = tagIngredient.value;
        listData = '<li>' + userValue + '</li>';
    }
    else{
        listData = list.join('');
    }
    tagMotion.innerHTML = listData;
}