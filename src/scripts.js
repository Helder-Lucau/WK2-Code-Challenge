//Load the DOM content
document.addEventListener("DOMContentLoaded", () => {   
})

//Fetch animal data from db.json and displays on the browser
function getData() {
    fetch('http://localhost:3000/characters')
    .then((res) => res.json())
    .then((animalData) => {

    let ul = document.querySelector("#animal-list");

    animalData.forEach((characters) => {
    const list =  document.createElement("li");

    list.textContent = characters.name;
    ul.append(list)
        });    
    });
}
getData();


function addNewAnimal() {
    let form = document.getElementById("add-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    });
}
addNewAnimal();
