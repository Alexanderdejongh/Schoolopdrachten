// Animal Button
const spotAnimalButtons = document.querySelectorAll(".big-five-list-item")

// Remove the First button
const removeTheFirstButton = document.getElementById("remove-first-item-button")


// Remove all button
const removeAllButton = document.getElementById("remove-all-button")

// parent
const listOfSpottedAnimals = document.querySelector("#spotted-animals-list");

// Eventlister

const clickButton = spotAnimalButtons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log("hoera!");
        //li en a tag
        const newLi = document.createElement("li");
        // Maak een Kind aan
        listOfSpottedAnimals.appendChild(newLi);
        // Stop de text in het kind
        newLi.innerHTML = button.textContent;

    })
})

// console.log(removeTheFirstButton)

const removedAnimals = removeTheFirstButton.addEventListener("click", () => {
    const lastChild = listOfSpottedAnimals.getElementsByTagName("li")[0];
    const firstRemoved = listOfSpottedAnimals.removeChild(lastChild);
})

console.log(listOfSpottedAnimals)

removeAllButton.addEventListener("click", () => {
    listOfSpottedAnimals.childElementCount
    console.log(listOfSpottedAnimals)
    for (let i = 0; i < listOfSpottedAnimals.childElementCount; i++) {
        const lastChild = listOfSpottedAnimals.getElementsByTagName("li")[i];
        console.log(lastChild)
        const childsRemoved = listOfSpottedAnimals.removeChild(lastChild);
    }


})