//DOM
const searchIngredients = document.querySelector('.search_input');
const boxIngredients = document.getElementById('search_ingredients');
const boxMotion = document.querySelector('.motion');
const tagMotion = document.querySelector('.ingredients_tag');

// const searchAppareils = document.querySelector('search_input');
// const boxAppareils = document.getElementById('search_appareils');
// const boxMotion = document.querySelector('.motion');

// box ingredients (ing)
boxIngredients.onkeyup = (e) =>{
    let boxDataIng = e.target.value;
    let emptyArrayIng = [];

    if(boxDataIng){
        emptyArrayIng = ingredient.filter((dataIng)=>{
            return dataIng.toLocaleLowerCase().startsWith(boxDataIng.toLocaleLowerCase());
        });
        emptyArrayIng = emptyArrayIng.map((dataIng)=>{
            return dataIng = '<li>'+ dataIng +'</li>';
        });
        console.log(emptyArrayIng);

        searchIngredients.classList.add('active');
        showIngredients(emptyArrayIng);

        let allListIng = boxMotion.querySelectorAll('li');
        for (let i = 0; i < allListIng.length; i++){
            allListIng[i].setAttribute('onclick', 'select(this)');
        }
    }
    else{
        searchIngredients.classList.remove('active');
    }
    
}

function select(element){
    let selectUserDataIng = element.textContent;
    boxIngredients.value = selectUserDataIng;
    searchIngredients.classList.remove('active');
}

function showIngredients(list){
    let listDataIng;
    if(!list.length){
        userValue = boxIngredients.value;
        listDataIng = '<li>' + userValue + '</li>';
        
    }
    else{
        listDataIng = list.join('');
    }
    
    boxMotion.innerHTML = listDataIng;
    
}

// // box appareil
// boxAppareils.onkeyup = (e) =>{
//     let boxData = e.target.value;
//     let emptyArray = [];

//     if(boxData){
//         emptyArray = ingredient.filter((data)=>{
//             return data.toLocaleLowerCase().startsWith(boxData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data)=>{
//             return data = '<li>'+ data +'</li>';
//         });
//         console.log(emptyArray);

//         searchAppareils.classList.add('active');
//         showAppareils(emptyArray);

//         let allList = boxMotion.querySelectorAll('li');
//         for (let i = 0; i < allList.length; i++){
//             allList[i].setAttribute('onclick', 'select(this)');
//         }
//     }
//     else{
//         searchAppareils.classList.remove('active');
//     }
    
// }

// function select(element){
//     let selectUserData = element.textContent;
//     boxAppareils.value = selectUserData;
//     searchAppareils.classList.remove('active');
// }

// function showAppareils(list){
//     let listData;
//     if(!list.length){
//         userValue = boxAppareils.value;
//         listData = '<li>' + userValue + '</li>';
//     }
//     else{
//         listData = list.join('');
//     }
//     boxMotion.innerHTML = listData;
// }