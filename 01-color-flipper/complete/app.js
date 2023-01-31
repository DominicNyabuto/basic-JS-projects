const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"); 
const color = document.querySelector(".color"); 

btn.addEventListener("click", function() {
    //to get random number between 0 - 3

    const randomNumber = getRandomNumber(); 
    console.log(randomNumber); 


    document.body.style.backgroundColor = colors[randomNumber]; 
    color.textContent = colors[randomNumber]; 
}); 

function getRandomNumber() { 
    return Math.floor(Math.random() * colors.length); 
}





//Math.floor rounds to the bnearest whole number 
//Math.random generates random numbers between 0 and 1, exclusive of 1

