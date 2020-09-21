// Animal Button
const spotAnimalButtons = document.querySelectorAll(".big-five-list-item")

// Remove the First button
const removeTheFirstButton = document.querySelector(".remove-first-item-button")

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
        console.log(button);
    })
})

console.log(removeTheFirstButton)

removeTheFirstButton.addEventListener("click", () => {
    console.log("hoera")
    const lastChild = listOfSpottedAnimals.querySelector("li")[0];
    const firstRemoved = listOfSpottedAnimals.removeChild(lastChild);
})