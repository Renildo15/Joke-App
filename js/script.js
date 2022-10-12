const button = document.querySelector(".container");
const jokediv = document.querySelector(".container .joke p");

async function getJock(){
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {Accept: "application/json"},
    });

    jokeObj = await jokeData.json();
    jokediv.innerHTML = jokeObj.joke;
    console.log(jokeData);

}

button.addEventListener("click", getJock)
document.addEventListener("DOMContentLoaded", getJock);