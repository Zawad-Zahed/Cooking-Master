const searchMeals = () => {
    const searchMeal = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('Write a Food name Please >_<'));
}


const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = "";
    meals.forEach(mealName => {
        const mealDiv = document.createElement('div');
            mealDiv.className = 'meal-style';
        const mealInfo = `
            <img src="${mealName.strMealThumb}">
            <h3>${mealName.strMeal}</h3>
            <button onclick="MealsInfo"('${mealName.strMeal}','${mealName.strMeasure1}') class="btn btn-gray">More Info</button>
            `;
            mealDiv.innerHTML = mealInfo;
            mealContainer.appendChild(mealDiv);
    })
}

const getMealsInfo = (name, ingredient) => {
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name},${ingredient}`;
 fetch(url)
.then(res => res.json())
.then(data => console.log(data[0].name, ingredient))
 };

 const fullMealsInfo = meal => {
     const mealDiv = document.getElementById('MealsInfo');
     mealDiv.innerHTML = `
     <h3>mealName.strMeal</h3>
     <p>mealCategory.strCategory</p>
     <p>mealCountry.strArea</p>
     
     `
 }

const displayError = error => {
const errorTag = document.getElementById('error-message');
errorTag.innerText = error;
 }
