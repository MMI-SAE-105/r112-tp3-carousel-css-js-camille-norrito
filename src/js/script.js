// ** CAROUSEL ***
// TODO
//Trouvez l'élément de classe CSS 
const carousel = document.querySelector(".carousel__container");

//Trouvez l'élément de classe CSS carousel__button--prev
const prevButton = document.querySelector('.carousel__button--prev');


const premierItem = document.querySelector(".carousel__item");

const scrollAmount = premierItem.clientWidth;

//Trouvez l'élément de classe CSS carousel__button--next 
const nextButton = document.querySelector('.carousel__button--next');

// Largeur de défilement d'un item
if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });


// Scroll au clic sur le bouton suivant
nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
}

