//Load the DOM content
document.addEventListener("DOMContentLoaded", () => {   
})

//Fetch animal data from db.json 
function fetchData(){
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(animalData => animalData.forEach(animal =>  printAnimalData(animal)))
}
fetchData();

//Display fetched data from db.json on the browser
function printAnimalData(animal) {

    let ul = document.querySelector('#animal-list')
    
    let list =  document.createElement("li")
    list.textContent = animal.name;
    ul.append(list)    
}




// function addNewAnimal() {
//     let form = document.getElementById("add-form")
//     form.addEventListener("submit", (e) => {
//         e.preventDefault()
//     });
// }
// addNewAnimal();
