
const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipes-item')

for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        // Open modal
        modalOverlay.classList.add('active')

        // Get recipe from recipe list
        recipeImg = recipe.querySelector('#recipe-img').src;
        recipeTitle = recipe.querySelector('#recipe-title').innerHTML;
        recipeText = recipe.querySelector('#recipe-text').innerHTML;

        // Change recipe at modal
        modalOverlay.querySelector('#modal-img').src = recipeImg
        modalOverlay.querySelector('#modal-title').innerHTML = recipeTitle
        modalOverlay.querySelector('#modal-text').innerHTML = recipeText
    })
}

// Close Modal
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})
