document.getElementById('button').addEventListener('click', () => {
    const foodName = document.getElementById('input').value;
    document.getElementById('input').value = "";
    console.log(foodName);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => displayFoodPreview(data));
})

const displayFoodPreview = foodsObject =>{
    const foodsArray = foodsObject.meals;
    foodsArray.forEach(element => {
        const foodName = element.strMeal;
        console.log(foodName);
    });
}