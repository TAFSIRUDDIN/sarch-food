const search = document.getElementById('srcbtn').addEventListener('click', function(){
    const search = document.getElementById('searchitem').value;
    if(search == " "){
        // alert("please Input a first letter of food");
        const noResult =`<h4 class ="no-result">NO SEARCH RESULT</h4>`
        const foodCategories = document.getElementById('food-categori');
        foodCategories.innerHTML = noResult;

    }
    if(search == ""){
            // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    fetch(url)
        .then( res => res.json())
        .then(data => displayCategory(data));
    }
    else{
        // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    fetch(url)
        .then( res => res.json())
        .then(data => displayCategory(data));
    }
})

const displayCategory = item =>{
    console.log(item);
    const foodCategories = document.getElementById('food-categori');
    const items = item.meals;

    items.forEach(element => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col-4 food-div';
       const foodName = element.strMeal;
       const image = element.strMealThumb;
       console.log(foodName);

       const foodInfo = `
       <img onclick ="foodDetales('${element.idMeal}')" class="image" src="${image}">
       <h3 onclick ="foodDetales('${element.idMeal}')">${foodName}</h3>
      
       
     `
    
     foodDiv.innerHTML = foodInfo;
     foodCategories.appendChild(foodDiv);
    ;
    });

    // for (let i = 0; i < item.meals.length; i++) {
    //     const food = item.meals[i];
    //     const foodName = food.strCategory;
    //     console.log(foodName);
        
    // }
}
function foodDetales(foodId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
.then( res => res.json())
.then(data => displayFoodinfo(data));
}

const displayFoodinfo = itemdteals =>{
    const items = itemdteals.meals;
    const food = items[0];
    const foodDetales = document.getElementById('food-detales');
    
    foodDetales.innerHTML =`
    <img class="imagedetales" src="${food.strMealThumb}">
        <h2 class="ingradentsHead1">${food.strMeal}</h2>
        <h4 class="ingradentsHead2">ingradents</h4>
        <li class="ingradents">${food.strIngredient1}</li>
        <li class="ingradents">${food.strIngredient2}</li>
        <li class="ingradents">${food.strIngredient3}</li>
        <li class="ingradents">${food.strIngredient4}</li>
        <li class="ingradents">${food.strIngredient5}</li>
        <li class="ingradents">${food.strIngredient6}</li>
        <li class="ingradents">${food.strIngredient8}</li>
        <li class="ingradents">${food.strIngredient9}</li>
    `
    // foodDetalesDiv.innerHTML = foodDetalesLIst;
    
    console.log(name);
}






