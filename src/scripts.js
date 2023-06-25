//Load the DOM content and stop the form submitting using prevent Default
document.addEventListener("DOMContentLoaded", () => { 
    let form = document.getElementById("add-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    });
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
    
    let list =  document.createElement("li");
    list.textContent = animal.name;
    ul.append(list)   
    
}

//Display animal details by clicking on the name
function displayAnimalDetails(){

}
//Add new animal 
function addNewAnimal(){

}
