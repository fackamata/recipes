// navbar hide and display

const burger = document.getElementById('burgerBtn');
const navigationItem = document.querySelectorAll(".main-navigation__list__item");
burger.addEventListener('click', ()=>{
    console.log("clicked");
    navigationItem.forEach(element => {
        
        element.classList.toggle("burger-clicked");
    });
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 769) {
        navigationItem.forEach(element => {
        
            element.classList.remove("burger-clicked");
        });
    };
});