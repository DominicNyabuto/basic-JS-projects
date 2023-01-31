// setting up a hex const that will be used to generate a hex color loop for
// lots of other colors we wouldnt get from the simple color flipper 

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025
const btn = document.getElementById("btn"); 
const color = document.querySelector(".color"); 

btn.addEventListener('click', function (){ 
    let hexColor = "#"; 
    for (let i = 0; i < 6; i++) { 
        hexColor += hex[getRandomNumber()]; 
    }

    color.testContent = hexColor; 
    document.body.style.backgroundColor = hexColor; 
});

function getRandomNumber() { 
    return Math.floor(Math.random() * hex.length); 
}