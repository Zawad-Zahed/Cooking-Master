const searchMeals = () => {
    const searchMeal = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('Please write some food name >_<'));
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
            <button onclick="getMealFullInfo('${mealName.strMeal}','${mealName.strMeasure1}')" type='button' class="btn btn-gray">haw</button>
            `;
            mealDiv.innerHTML = mealInfo;
            mealContainer.appendChild(mealDiv);
    })
}

const getMealFullInfo = async (name, ingredient) => {
 const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name},${ingredient}`;
 fetch(url)
.then(res => res.json())
.then(data => console.log(data))
 };

const displayError = error => {
const errorTag = document.getElementById('error-message');
errorTag.innerText = error;
 }
