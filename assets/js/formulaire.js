sauce = document.getElementsByClassName('sauce')
btnSauce = document.getElementById('btnSauce')

function displaySauce(){
    console.log(sauce[0])
    for (let i = 0; i < Object.keys(sauce).length; i++) {
        // str = str + i;
        console.log(sauce[i])
        if (sauce[i].style.display === "none") {
            sauce[i].style.display = "block";
            btnSauce.style.display = "none";
        } else {
            sauce[i].style.display = "none";
            btnSauce.style.display = "block";
        }
        
    }
}

marinade = document.getElementsByClassName('marinade')
btnMarinade = document.getElementById('btnMarinade')

function displayMarinade(){
 
    for (let i = 0; i < Object.keys(marinade).length; i++) {
        // str = str + i;
        console.log(marinade[i])
        if (marinade[i].style.display === "none") {
            marinade[i].style.display = "block";
            btnMarinade.style.display = "none";
        } else {
            marinade[i].style.display = "none";
            btnMarinade.style.display = "block";
        }
        
    }
}
