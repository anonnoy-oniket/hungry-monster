document.getElementById('button').addEventListener('click', () => {
    const foodName = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('main-container').innerText = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => displayFoodPreview(data));
})

const section = document.getElementById('main-container')

const displayFoodPreview = foodsObject => {
    const foodsArray = foodsObject.meals;

    if (foodsArray === null) {
        const div = document.createElement("div");

            const foodPreview = `
                <p id='nothing-found'> Looks like we don't have the item you are searching for!! <p>
                <div>
                    <img src="/nothing-found.png" alt="">
                </div>
            `
            div.innerHTML = foodPreview;
            section.appendChild(div);
    }

    else {
        for (let i = 0; i < foodsArray.length; i++) {
            const element = foodsArray[i];
            const foodName = element.strMeal;
            const foodThumbnail = element.strMealThumb;

            const div = document.createElement("div");
            div.className = "food-preview"

            const foodPreview = `
                <div>
                    <img src="${foodThumbnail}" alt="" class="images">
                </div>
                <h4>${foodName}</h4>
            `
            div.innerHTML = foodPreview;
            section.appendChild(div);

        }
    }
}