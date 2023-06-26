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
    
    let list =  document.createElement("li");
    list.textContent = animal.name;
    ul.append(list)   
    
}

//Display animal details by clicking on the name
function displayAnimalDetails(){


}
//Add new animal to our db.json 
function addNewAnimal(){
    
    let form = document.getElementById("add-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        fetch('http://localhost:3000/characters',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    });
}
addNewAnimal();
