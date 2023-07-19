const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector('#submit-rating');
var actualRating = document.querySelector('#rating');
var givenRatings = document.querySelectorAll('.btn');

thanksContainer.style.display = 'none';

submitButton.addEventListener("click", myFunction);

    function myFunction(){
        mainContainer.style.display = "none";
        thanksContainer.style.display = "block";
        actualRating.innerHTML = givenRatings.innerHTML;
    };



    
