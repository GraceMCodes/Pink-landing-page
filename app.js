
function buy(){
    let name = prompt("What is your name?")
    let character = prompt("What is your favourite pokemin?");
     alert("Thank you "+ name+ "For visiting!");
}


let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
