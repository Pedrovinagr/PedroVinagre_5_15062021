//DOM
const searchTag = document.querySelectorAll('.search_input');
const tag = searchTag.getElementById('input');
const tagMotion = searchTag.querySelectorAll('.motion');

tag.onkeyup = (e) =>{
    let tagsData = e.target.value;
    let emptyArray = [];

    if(tagsData){
        emptyArray = ingredients.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(tagsData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);

        searchTag.classList.add('active');
        showIngredients(emptyArray);

        let allList = tagMotion.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute('onclick', 'select(this)');
        }
    }
    else{
        searchTag.classList.remove('active');
    }
    
}

function select(element){
    let selectUserData = element.textContent;
    tags.value = selectUserData;
    searchTag.classList.remove('active');
}

function showIngredients(list){
    let listData;
    if(!list.length){
        userValue = tags.value;
        listData = '<li>' + userValue + '</li>';
    }
    else{
        listData = list.join('');
    }
    tagMotion.innerHTML = listData;
}